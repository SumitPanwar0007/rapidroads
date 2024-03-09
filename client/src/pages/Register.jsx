import React,{useEffect} from 'react'
import {Formik, Form} from 'formik'
import * as Yup from 'yup';
import axios from 'axios';
import {Textfields} from './Textfields'
import { Link,useNavigate  } from 'react-router-dom';
import { message } from 'antd';

import { useAppContext } from '../components/AppContext';
import Spinner from '../components/Spinner';







const Register = () => {
  const navigate=useNavigate();
const{loading,setLoading}=useAppContext();

  const registerSchema=  Yup.object({
  
    name: Yup.string().min(2).max(20).required("Please enter a User name"),
  
    email: Yup.string().email().required("Email is required"),
  
    password: Yup.string().min(6).required("Password is required"),
  
    confirm_password: Yup.string().required().oneOf([
        Yup.ref('password'), null], "Passwords must match")
  }); 
  

//prevent login user
// useEffect(()=>{
//   if(localStorage.getItem('user')){
//     navigate('/');
//   }
// },[navigate])


  
  return (

      
   <div className='h-full flex flex-col justify-center items-center bg-[#F4F5F6]'>

          <div className="w-full h-[12vh] bg-[#0F171C] flex justify-between  py-4">
          <h1 className="text-[#FFCF01] text-xl px-6">Rapid Roads</h1>
          <h1 className="text-[#FFCF01] text-xl px-6">About</h1>

          </div>

          <div className="w-full flex justify-between bg-stone-300 h-screen">
      <div className="w-1/2">

      <iframe  className='w-full h-full ' src="https://lottie.host/embed/20e0eb4a-1191-40b7-922b-22c632cc864c/wp8z7YJVZp.json"></iframe>
      </div>
          <div className=" mt-16 flex flex-col justify-center items-center  sm:w-1/2 gap-4 mb-8">
        

   
   
          <div className='h-10/12 w-full sm:w-[35vw] flex flex-col justify-center items-center bg-white/[0.7] rounded-lg shadow-lg shadow-slate-500 '> 
        

          <div className="flex justify-around   w-full pt-8 mb-6  border-b border-slate-200">
          <div className="sm:text-center text-sm sm:text-base font-semibold hover:bg-[#F4F5F6] w-1/2 rounded-lg px-4 py-2">
          <Link to='/login'>Signin</Link>

          </div>
          <div className="sm:text-center text-sm sm:text-base font-semibold hover:bg-[#F4F5F6] w-1/2  px-4 py-2 border-b-2 border-[#0F171C]">
          <Link to='/register'>Register</Link>
          </div>

          </div>
          {loading && <Spinner/>}
          <Formik
          initialValues={{
            name: '', email: '',password: '',confirm_password: ''
          }}
         validationSchema={registerSchema}
          onSubmit={async (values)=>{
            
              try{
               setLoading(true);
                await axios.post("http://localhost:8081/users/register",values); 
                
                message.success('registeraion succsessful')
                setLoading(false);
                navigate('/login')

              }
              catch(error){
                setLoading(true);
                message.error("invalid enteries")
                setLoading(false);
              }
          }}>
 

         {formik =>(   

           

                  <Form className='p-4 w-10/12 text-sm sm:text-base' >

                  <Textfields label="Full Name" name="name" type="text" className='my-2 border  border-slate-300 h-8 rounded-lg px-2'/>
                   <Textfields label="Email" type='email' id='email' name='email' className='my-2 border border-slate-300 h-8 rounded-lg px-2'/>
                  <Textfields label="Password" type='password' id='password' name='password' className='my-2 border border-slate-300 h-8 rounded-lg px-2' />
                  <Textfields label="Confirm Password" type='confirm_password' id='confirm_password' name='confirm_password' className=' px-2 my-2 border border-slate-300 h-8 rounded-lg'  />

                 
                  <div className="flex justify-center my-4 ">

                  <button type="submit" className="p-2 px-4 bg-[#FFCF01] mx-auto rounded-lg text-base "  >Submit</button>
                  </div>



                  </Form>

         )}

         

          </Formik>
</div>
</div>
</div>
<div className="flex flex-col text-sm mt-14 px-2 mx-12 gap-6"> 
     <div className="text-justify text-sm p-6 mt-10 text-black/[0.7]">
      Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsam quidem, a, commodi accusantium possimus et sunt eius facilis distinctio, illum fuga asperiores velit alias. Laboriosam provident rem tempora praesentium. Dolor.
      Quasi nesciunt doloribus sunt, quaerat aspernatur incidunt eum labore blanditiis quibusdam iste quas quo voluptatem et. Illo maiores nemo inventore voluptates, perspiciatis, tempore harum modi velit quibusdam esse voluptate natus.
      Cum doloribus aliquam maiores aliquid, odio <br />
      Omnis itaque fugiat error debitis quos quo quibusdam perspiciatis sunt dolorum ea voluptatibus distinctio unde explicabo neque, ratione velit adipisci quasi voluptates facere. Possimus, similique. Iste maiores deleniti quasi deserunt!
      Accusantium necessitatibus illum perferendis provident ducimus doloribus tempora ipsam, exercitationem nesciunt optio voluptatum modi? Pariatur consequatur quas ea odit illum ipsum quidem autem iusto et explicabo ex, soluta deleniti consequuntur.
      Nesciunt, cumque? Expedita, omnis magnam. At ad soluta neque eius voluptates aliquam non cupiditate quia, in cum ex similique, laudantium temporibus dolore dicta architecto, eum ea fugiat praesentium obcaecati possimus!
     </div>
    

     <div className="text-justify text-sm p-6 mt-10 text-black/[0.7] border-t border-slate-700 flex justify-evenly">
     
     <p>2023-2024</p>

     <p>rapid roads</p>
     </div>
   

     </div>
</div>




     
    
  )
}

export default Register
