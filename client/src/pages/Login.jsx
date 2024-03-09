import React,{useEffect} from 'react'
import {Form, Formik, useFormik} from 'formik'
import { Link,useNavigate } from 'react-router-dom';
import * as Yup from 'yup';
import { Textfields } from './Textfields';
import { message } from 'antd';
import axios from 'axios';
import { useAppContext } from '../components/AppContext';
import Spinner from '../components/Spinner';

const Login = () => {
 const navigate=useNavigate();

 const {loading,setLoading}=useAppContext();
    const loginValidation= Yup.object({
      email:Yup.string().required('please enter your email'),
      password:Yup.string().min(6).max(12).required('Please enter your Password')

    })
  

    //prevent login user
useEffect(()=>{
  if(localStorage.getItem('user')){
    navigate('/');
  }
},[navigate])

  return (
    <div className='h-full flex flex-col justify-center items-center bg-[#F4F5F6]'>

          <div className="w-full h-[12vh] bg-[#0F171C] flex justify-between  py-4">
          <h1 className="text-[#FFCF01] font-semibold text-xl px-6">Rapid Roads</h1>
          <h1 className="text-[#FFCF01] text-xl px-6">About</h1>

           </div>
           <div className="w-full flex justify-between bg-stone-300 h-screen ">
            <div className="w-1/2 ">
            <iframe className='w-full h-full ' src="https://lottie.host/embed/20e0eb4a-1191-40b7-922b-22c632cc864c/wp8z7YJVZp.json"></iframe>

            </div>
          
      <div className="bg-stone-300 w-1/2  flex flex-col justify-center items-center   gap-4 ">
       
        <div className='h-10/12 w-full sm:w-[35vw] flex flex-col justify-center items-center bg-white/[0.7] rounded-lg shadow-lg shadow-slate-500 '> 

        <div className="flex justify-around   w-full pt-8  mb-6 border-b border-slate-200">
          <div className="text-center font-semibold text-sm sm:text-base  hover:bg-[#F4F5F6] w-1/2 px-4 py-2 border-b-2 border-[#0F171C] ">
            <Link to='/login'>Signin</Link>
         
           </div>
          <div className="text-center font-semibold text-sm sm:text-base hover:bg-[#F4F5F6] w-1/2 px-4 py-2 ">
           
            <Link to='/register'>Register</Link>
            </div>

        </div>
        {loading && <Spinner/>}
        <Formik 
              initialValues={{
              email: "",password: ""
              }}
              validationSchema={loginValidation}
              onSubmit={async (value)=>{
              
                try{
                  console.log("values are",value)
                  setLoading(true);
                const {data} =  await axios.post('http://localhost:8081/users/login',value)
                console.log("your data is :",data.user);
                message.success("Successfully login");
                localStorage.setItem('user',JSON.stringify({...data.user,password:''}))
                setLoading(false);
                  navigate('/')
                }
                catch(error){
                  setLoading(true);
                  message.error("Invalid username/password")
                  setLoading(false);
                }
              }} >

                {formik =>(

<Form className='p-4 h-[45vh] w-10/12 text-lg' >
         

<Textfields label="Email" type='email' id='email' name='email' className='px-2 text-base border border-slate-300 h-8 rounded-lg my-2'/>

<Textfields label="Password" type='password' id='password' name='password' className='px-2 text-base my-2 border border-slate-300 h-8 rounded-lg' />

<div className="flex items-center py-8 my-4"> 
<button type="submit" className="p-2 px-4  bg-[#FFCF01] mx-auto rounded-lg text-base ">Submit</button>

</div>

</Form>
  
  )}

        </Formik>
   

        
      </div>
      </div>
      </div>
     <div className="flex flex-col text-sm mt-14 px-2 mx-12 gap-6"> 
     <div className="text-justify text-sm p-6 mt-10 text-black/[0.7]">
     Our traffic safety campaign is dedicated to promoting safe driving practices and preventing accidents on the road. We believe that raising awareness about traffic rules is essential to achieving these goals. <br />

Through awareness campaigns and programs, we aim to educate the public about the importance of following traffic rules. By understanding the significance of traffic signs, signals, and speed limits, individuals can make informed decisions while on the road. <br /> This not only ensures their own safety but also that of other drivers, passengers, and pedestrians.

Additionally, we offer driver education and training programs to equip individuals with the necessary knowledge and skills to be responsible drivers. Our programs cover topics such as defensive driving techniques, road safety principles, and the consequences of reckless driving.
<br /> We believe that these programs are critical for promoting safe driving practices and reducing accidents on the road.

Our traffic safety campaign also works closely with law enforcement agencies to enforce traffic rules and regulations. We believe that this partnership is essential for creating a safe and responsible driving culture. <br />

Join us in our efforts to make our roads safer for everyone. Together, we can create a world where accidents are prevented, and lives are saved.

     

    Additionally, driver education and training programs can equip individuals with the necessary knowledge and skills to be responsible drivers. These programs cover topics such as defensive driving techniques, road safety principles, and the consequences of reckless driving.     </div>
    

     <div className="text-justify text-sm p-6 mt-10 text-black/[0.7] border-t border-slate-700 flex justify-evenly">
     
     <p>2023-2024</p>

     <p>rapid roads</p>
     </div>
   

     </div>
    </div>
  )
}

export default Login
