import React from 'react'
import Header from '../../components/Layout/Header'
import Footer from '../../components/Layout/Footer'
import Sidebar from '../../components/Layout/Sidebar'
import Dashboard from './Dashboard'
import { useAppContext } from '../../components/AppContext'
import Transections from './Transections'
import Challan from './Challan'
import SearchChallan from './SearchChallan'
import Home from './Home'

const HomePage = () => {
  const{activeState,setActiveState,menu}=useAppContext();
  // console.log(menu)
  return (
    <div className='h-screen flex flex-col '>
      <div className="w-full fixed z-50">
        <Header />
        <div className={ menu
                        ? 'absolute right-1 z-50 bg-slate-800 sm:w-[25vw] md:w-[18vw] h-[86vh] flex flex-col gap-4 px-2 justify-around text-white m-1 rounded-lg '
                        :  " hidden sm:visible bg-stone-200 h-full w-10   "}>
            <Sidebar/>
          </div>
      </div>
      
      <div className={menu?"flex flex-col w-full blur-sm border mt-16 " :"flex flex-col w-full  border mt-16 "}>

         


        <div className="w-full h-full ">
          {activeState==='home' && <Home/>}
          {activeState==='dashboard' && <Dashboard/> }
          {activeState==='transections' && <Transections/>}
          {activeState==='challans' && <Challan/>}
          {activeState==='Search' && <SearchChallan/>}

         
        </div>

<div className="w-full">

      <Footer/>
</div>
        
      </div>
    
    </div>
  )
}

export default HomePage
