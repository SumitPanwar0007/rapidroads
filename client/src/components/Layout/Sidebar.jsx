import React from 'react'
import { useContext } from 'react'
import {useAppContext} from '../AppContext'
import { useNavigate } from 'react-router-dom'
import { message } from 'antd'
import logout from '../../images/logout.svg'
import police from '../../images/police.svg'



const Sidebar = () => {
  const { activeState,setActiveState,menu}=useAppContext();
  const navigate=useNavigate();
  const data=localStorage.getItem('user')
  const name=JSON.parse(data);
  console.log("your datas is ",name)

  const handleSidebar=(value)=>{
    setActiveState(value)
    // console.log(value)
  }
  const handleLogout=()=>{
    localStorage.removeItem('user');
    navigate('/login')
    message.success('See you again')
  }

  return (
    
    <div className=' h-full  flex flex-col gap-4 px-2 justify-around  '>
      <div className=" flex flex-col items-center">
        <img src={police} alt="" className='h-20 mx-auto' />
        <h3 className='text-yellow-500 text-xl'>{name.name}</h3>
      </div>

      <div className='flex flex-col gap-4'>

      <div className="bg-slate-800 text-white hover:text-black text-center hover:bg-yellow-500 rounded-lg px-2 font-semibold text-xl">

      <button onClick={()=>handleSidebar('home')}>  
       Home</button>
      </div>
  
      <div className="bg-slate-800 hover:text-black text-center hover:bg-yellow-500 rounded-lg px-2 font-semibold text-xl">

      <button onClick={()=>handleSidebar('dashboard')}>Dashboard</button>
      </div>
      <div className="bg-slate-800 hover:text-black text-center hover:bg-yellow-500 rounded-lg px-2 font-semibold text-xl">

      <button onClick={()=>handleSidebar('transections')}>
        Transection</button>
      </div>

      <div className="bg-slate-800 hover:text-black text-center hover:bg-yellow-500 rounded-lg px-2 font-semibold text-xl">

      <button onClick={()=>handleSidebar('challans')}>New Challan</button>
      </div>
      <div className="bg-slate-800 hover:text-black text-center hover:bg-yellow-500 rounded-lg px-2 font-semibold text-xl">

      <button onClick={()=>handleSidebar('Search')}>Search</button>
      </div>

      </div>

      <div className="bg-slate-800 hover:text-black text-center hover:bg-yellow-500 rounded-lg p-2  mx-auto font-semibold text-xl ">
    <img src={logout} alt="" className='w-6 sm:hidden items-center' />
      <button onClick={handleLogout} className='hidden sm:block '><span className='flex'>Logout <img src={logout} alt="" /> </span> </button>
      </div>
    </div>
  )
}

export default Sidebar
