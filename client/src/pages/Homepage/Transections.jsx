import React,{useEffect,useState} from 'react'
import { Field, Form, Formik } from 'formik';
import { Textfields } from '../Textfields';
import {Modal, message,Table,Select, DatePicker,Space } from 'antd';
import { DeleteOutlined, EditOutlined } from "@ant-design/icons";
import moment from "moment"
import axios from 'axios';

import { useAppContext } from '../../components/AppContext';

const {RangePicker}=DatePicker;
const Transections = () => {
  
const [ownerDetails, setOwnerDetails] = useState(null);
const [modalVisible, setModalVisible] = useState(false);
  const handleAccept = async (vehicleNumber) => {
    try {
      console.log(" first vehicle number: ", vehicleNumber)
      const response = await axios.post('https://rto-challan-information-verification-india.p.rapidapi.com/api/rc/challaninfo',
        {
        headers: {
          'content-type': 'application/json',
          'X-RapidAPI-Key': 'f0113ce685mshcc6a043f343cb0ep108f41jsn633b3024b885',
          'X-RapidAPI-Host': 'rto-vehicle-information-verification-india.p.rapidapi.com'
        },
        data: {
          reg_no: vehicleNumber, // Replace reg_no with the available vehicle_number
          consent: 'yes',
          consent_text: 'I hereby declare my consent agreement for fetching my information via AITAN Labs API'
        }
      });
      setOwnerDetails(response.data);
      setModalVisible(true);
    } catch (error) {
      console.error(error);
      message.error('Failed to fetch owner details.');
    }
  };

  //ContextApi

  const{
    setLoading,selectDate,setSelectDate,showModal,setShowModal,
    allTransection,setAllTransection,
    frequency,setFrequency,setEditable
  }=useAppContext();

  ///form handling
  // const handleSubmit= async (values)=>{
    
  // }
  const getAllTransections= async ()=>{
    try{
      setLoading(true)
      let res=await axios.post('http://localhost:8081/transection/transection',{frequency,selectDate});
      setLoading(false)

      setAllTransection(res.data)
      // console.log(allTransection)
  }
  catch(err){
    console.error(err.message)
    message.error("Error Occured")
  }
  }

  useEffect(()=>{
    getAllTransections();
    // console.log(frequency)
  },[frequency,selectDate]);


  //delete
const handleDelete= async (record)=>{

try{
  setLoading(true)

  const id=record._id
 await axios.post('http://localhost:8081/transection/deleteTransection',{id})
 message.success("Deleted Successfully");

}
catch(error){
  console.log("error occured",error)
}
}

  //tabel data
  const columns=[
    
    
    // {
    //   title:"Id",
    //   dataIndex:'_id',
    //   key:'id'
    // },
    {
      title:"Name",
      dataIndex:'_name',
      key:'_name' 

    },
    {
      title:"camID",
      dataIndex:'camID',
      key:'camID' 

    },
    {
      title:"Amount",
      dataIndex:'amount',
      key:'price',
      render:(text,record)=>(
        <div style={{color:'red'}}>{text}</div>
      )
      },
      {
        title:"Location",
        dataIndex:'location',
        key:'location'
      },
      {
        title:"Date",
        dataIndex:'date',
        key:'date',
        render:(text)=> <span>{moment(text).format('YYYY-MM-DD')}</span>
      },
      {
        title:"vehicle number",
        dataIndex:'vehicle_number',
        key:'vehicle number'
      },
      {
        title:"Status",
        dataIndex:'status',
        key:'status'
      },
      {
        title: "Edit",
        key: "action",
        render:(record,text)=>(
          <div>
            <EditOutlined 
              onClick={()=>{
                setEditable(record)
                setShowModal(true)
              }}
            />
            <DeleteOutlined 
            className='mx-3 text-red-500'
            style={{color:'red'}}
              onClick={
                ()=>handleDelete(record)
              }
            />
          </div>
        )

      },
    
  {
    title: 'Action',
    key: 'action',
    render: (text, record) => (
      <button 
        className="bg-yellow-500 hover:bg-yellow-700 text-white font-bold py-2 px-4 rounded" 
        onClick={() => handleAccept(record.vehicle_number)}
      >
        Accept
      </button>
    )
  }
  ]





  return (
    <div className='flex flex-col'>
      
      <div className="bg-slate-300 mx-4 px-8  py-2 rounded-lg h-14 my-4 flex justify-between  ">
      <div className="w-auto gap-2 flex mx-2 ">
        <h4>  Range Filter</h4>
        <Select value={frequency} onChange={(value)=>setFrequency(value)} style={{minWidth:'10vw', maxWidth:'20vw'}} dropdownStyle={{ backgroundColor: '#CBD5E1' }}>
          <Select.Option value="7">Last 1 Week</Select.Option>
          <Select.Option  value="30">Last 1 Month </Select.Option>
          <Select.Option value="365">Last 1 Year</Select.Option>
          <Select.Option value="custom">Custom</Select.Option>
        </Select> 
        {frequency ==='custom' && <RangePicker value={selectDate} onChange={(value)=>setSelectDate(value)} />}
        </div>
        <h4>  All Transection</h4>
       

        {/* <button onClick={()=>{setShowModal(true)}} className='bg-yellow-500 rounded-lg px-2'>more</button> */}
      </div>

     <div></div>
<Modal
 open={showModal} 
 onCancel={()=>setShowModal(false)} 
 footer={false}>
 {/* title={editable ?"Edit Challan":"Add Challan"} */}
  <h1>Add Manual Challan</h1>
  <Formik
  initialValues={{name:'',loc_name:'',cam_id:'',date:'',price:'',numberPlate:'',image:'',status:''}}
  onSubmit={ async (value)=>{
    console.log('values', value)
    try{
   
      setLoading(true)
      const response= await axios.post('http://localhost:8081/transection/addTransection',value)
      
      console.log('response of the adding is : ',response.data)
      setLoading(false)
      message.success('Transection added successfullly')
      setShowModal(false)
    }
    catch(err){
     setLoading(false)
     console.log(err)
     message.error("Failed to add transection")
    }
    
  }}
  >
    <Form className='p-4 h-auto w-full text-sm'>

<Textfields name="loc_name" type="text" label='Location name' className='border border-slate-300 h-8 rounded-lg my- px-4'/>
<Textfields name="cam_id" type="text" label="camera number" className='border border-slate-300 h-8 rounded-lg my-2 px-4' />
<Textfields name="date" type="date" label="date" className='border border-slate-300 h-8 rounded-lg my-2 px-4'/>
<Textfields name="price" type="text" label="Price"  className='border border-slate-300 h-8 rounded-lg my-2 px-4'/>
<Textfields name='numberPlate' label='Number Plate' placeholder='Enter Vehicle number' className='border border-slate-300 h-8 rounded-lg my-2 px-4'></Textfields>
<label htmlFor='status' name="status" className=" text-base h-8  my-2 pr-4">Status:</label>
  <Field as='select' name="status" className="border border-slate-300 gap-2 text-base h-8 rounded-lg my-2 px-4" >
    <option value="paid">Paid</option>
    <option value="unpaid">Unpaid</option>

  </Field>

<div className="my-2">
    <label htmlFor="image"  className="block text-gray-600">Upload Image:</label>
    <input
      type="file" id="image"
      name="image" accept="image/*"
      className="border border-slate-300 p-2 rounded-lg w-full my-2"
    />
  </div>

   
<div className="flex justify-center my-4 ">

<button type="submit" className="p-2 px-4 bg-[#FFCF01] mx-auto rounded-lg text-base "  >Submit</button>
</div>

</Form>
  </Formik>
</Modal>

  <Table columns={columns} dataSource={allTransection}   style={{ backgroundColor: '#FFD800' }}/>
  {/* Modal for displaying owner details */}
  <Modal
        title="Owner Details"
        open={modalVisible}
        // visible={modalVisible}
        onCancel={() => setModalVisible(false)}
        footer={null}
      >
        {ownerDetails && (
          <div>
            <p>Owner Name: {ownerDetails.owner_name}</p>
            <p>Owner Father's Name: {ownerDetails.owner_father_name}</p>
            <p>Current Address: {ownerDetails.current_address_line1}, {ownerDetails.current_address_line2}, {ownerDetails.current_state} - {ownerDetails.current_pincode}</p>
            <p>Mobile Number: {ownerDetails.mobile_no}</p>
            
          </div>
        )}
      </Modal>
    </div>
  )
}

export default Transections
