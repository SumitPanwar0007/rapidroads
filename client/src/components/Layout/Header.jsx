import React from 'react'
import police from '../../images/police.svg'
import burger from '../../images/burger3.svg'
import { useAppContext } from '../AppContext'

const Header = () => {
  const {menu,setMenu}=useAppContext();
  const data=localStorage.getItem('user')
  const name=JSON.parse(data);
 
  const handleMenu=()=>{
    setMenu(!menu)
    
  }

  return (
    <div  className="flex justify-between sm:text-lg py-2 bg-[#0F171C] text-white">
      <img src={burger} alt=""  className=' sm:hidden w-8'
            onClick={handleMenu}/>

      <h1 className='text-yellow-500 pl-4 text-xl font-bold'>
  Rapid Roads
      </h1>
      <div className='pr-4 flex'>
        <img src={police} alt="" className='w-6 sm:w-8 '/>

        <div>

        <h2 className='text-yellow-500 pl-4 text-xs sm:text-xl font-bold'>{name.name}</h2>
        <h4 className="text-blue-500 text-xs sm:text-base text-center ">Admin</h4>
        </div>
      </div>
    </div>
  )
}

export default Header
