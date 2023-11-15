import React,{useState} from 'react'
import {Modal} from 'antd';
import { Form, Formik } from 'formik';
import { Textfields } from '../Textfields';

const Transections = () => {
  const [showModal,setShowModal]=useState(false);
  return (
    <div className='flex flex-col'>
      <div className="bg-slate-300 mx-4 px-8  py-2 rounded-lg h-14 my-4 flex justify-between  ">
        this is page of transections
        <button onClick={()=>{setShowModal(true)}} className='bg-yellow-500 rounded-lg px-2'>add more</button>
      </div>

<div></div>
<Modal open={showModal} onCancel={()=>setShowModal(false)} footer={false}>
  <h1>hello add hrer</h1>
  <Formik
  initialValues={{loc_name:'',cam_id:''}}
  onSubmit={async (value)=>{
    console.log('values', value)
  }}
  >
    <Form className='p-4 h-[45vh] w-full text-sm'>
<Textfields name="loc_name" type="text" label='Location name' className='border border-slate-300 h-8 rounded-lg my-2'/>
<Textfields name="cam_id" type="text" label="camera numer" className='border border-slate-300 h-8 rounded-lg my-2' />
<Textfields name="date" type="date" label="date" className='border border-slate-300 h-8 rounded-lg my-2'/>

   
<div className="flex justify-center my-4 ">

<button type="submit" className="p-2 px-4 bg-[#FFCF01] mx-auto rounded-lg text-base "  >Submit</button>
</div>

</Form>
  </Formik>
</Modal>
    </div>
  )
}

export default Transections
