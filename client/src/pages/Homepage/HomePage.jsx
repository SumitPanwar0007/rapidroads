import React from 'react'
import Header from '../../components/Layout/Header'
import Footer from '../../components/Layout/Footer'
import Sidebar from '../../components/Layout/Sidebar'
import Dashboard from './Dashboard'
import { useAppContext } from '../../components/AppContext'
import Transections from './Transections'
import Challan from './Challan'
import SearchChallan from './SearchChallan'

const HomePage = () => {
  const{activeState,setActiveState,menu}=useAppContext();
  return (
    <div className='h-screen flex flex-col '>
      <div className="w-full">
        <Header />
      </div>
      
      <div className="flex w-full h-[900px] border ">

          <div className={menu?'absolute z-10 bg-[#0F171C] h-full flex flex-col gap-4 px-2 justify-around text-white  ':" hidden sm:block  h-full sm:w-1/6 "}>
            <Sidebar/>
          </div>


        <div className="w-full h-full ">
          {activeState==='dashboard' && <Dashboard/> }
          {activeState==='transections' && <Transections/>}
          {activeState==='challans' && <Challan/>}
          {activeState==='Search' && <SearchChallan/>}

         
        </div>
      </div>
    
<div className="w-full">

      <Footer/>
</div>
    </div>
  )
}

export default HomePage
