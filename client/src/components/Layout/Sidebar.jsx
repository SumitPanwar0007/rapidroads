import React from 'react'
import { useContext } from 'react'
import {useAppContext} from '../AppContext'
import { useNavigate } from 'react-router-dom'
import { message } from 'antd'
import logout from '../../images/logout.svg'



const Sidebar = () => {
  const { activeState,setActiveState,
              menu}=useAppContext();
  const navigate=useNavigate();
  const data=localStorage.getItem('user')
  const name=JSON.parse(data);

  const handleSidebar=(value)=>{
    setActiveState(value)
    console.log(value)
  }
  const handleLogout=()=>{
    localStorage.removeItem('user');
    navigate('/login')
    message.success('See you again')
  }

  return (
    
    <div className=' h-full flex flex-col gap-4 px-2 justify-around '>
      <div className=" flex flex-col items-center">
        <img src={"https://designoholic.com/wp-content/uploads/2017/07/red-five-dribs.png"} alt="" className='h-20 mx-auto' />
        <h3>{name.name}</h3>
      </div>

      <div className='flex flex-col gap-4'>

  
      <div className="bg-slate-800 text-white text-center hover:bg-slate-300 rounded-lg px-2">

      <button onClick={()=>handleSidebar('dashboard')}>Home</button>
      </div>
      <div className="bg-slate-800 text-white text-center hover:bg-slate-300 rounded-lg px-2">

      <button onClick={()=>handleSidebar('transections')}>Transections</button>
      </div>

      <div className="bg-slate-800 text-white text-center hover:bg-slate-300 rounded-lg px-2">

      <button onClick={()=>handleSidebar('challans')}>Challans</button>
      </div>

      
      <div className="bg-slate-800 text-white text-center hover:bg-slate-300 rounded-lg px-2">

      <button onClick={()=>handleSidebar('Search')}>Search</button>
      </div>

      </div>

      <div className="bg-slate-800 text-white text-center hover:bg-slate-300 rounded-lg p-2 w-1/2 mx-auto ">
    <img src={logout} alt="" className='w-6 sm:hidden items-center' />
      <button onClick={handleLogout} className='hidden sm:block'>Logout</button>
      </div>
    </div>
  )
}

export default Sidebar
