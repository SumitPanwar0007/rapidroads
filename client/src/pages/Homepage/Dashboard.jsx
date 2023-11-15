import React from 'react'
import newimg from '../../images/new.svg';
import panding from '../../images/panding.svg'
import completed from '../../images/completed.svg';
import total from '../../images/total.svg';

const Dashboard = () => {
  return (<> 
   <div className="bg-[#F4F5F6] h-full flex  items-start py-8 px-4">
    <div className=' grid sm:grid-cols-2 gap-4 w-full '>
    
      <div className="flex justify-between rounded-lg bg-white shadow-md shadow-slate-500  mx-2 ">
        <div className="w-8 sm:w-14 border-2-r border-red-500 py-4 ">
          <img src={newimg} alt="" />
        </div>
        <div className="sm:text-xl font-bold py-6">
          New Challan
        </div>
        <div className="text-sm sm:text-lg text-end underline pt-4 sm:pt-14  pr-2 sm:pr-4">
          View all
        </div>
      </div>

      <div className="flex  justify-between  bg-white shadow-md shadow-slate-500  rounded-lg  mx-2 ">
        <div className="w-8 sm:w-14 border-2-r border-red-500 py-4 ">
          <img src={panding} alt="" />
        </div>
        <div className="sm:text-xl text-center font-bold py-4 ">
          Pandding Challan
        </div>
        <div className="text-sm sm:text-lg text-end underline pt-4 sm:pt-14  pr-2 sm:pr-4">
          View all
        </div>
      </div>


      <div className="flex justify-between rounded-lg bg-white shadow-md shadow-slate-500   mx-2 ">
        <div className="w-10 sm:w-14 border-2-r border-red-500 py-4 ">
          <img src={completed} alt="" />
        </div>
        <div className="sm:text-xl text-center font-bold py-2 sm:py-4 ">
          Completed Challan
        </div>
        <div className="text-sm sm:text-lg text-end underline pt-4 sm:pt-14  pr-2 sm:pr-4">
          View all
        </div>
      </div>



      <div className="flex justify-between rounded-lg   bg-white shadow-md shadow-slate-500  mx-2">
        <div className="w-8 sm:w-14 border-2-r border-red-500 py-4 ">
          <img src={total} alt="" />
        </div>
        <div className="sm:text-xl text-center font-bold py-4 ">
          Total Challan
        </div>
        <div className="text-sm sm:text-lg text-end underline pt-4 sm:pt-14  pr-2 sm:pr-4">
          View all
        </div>
      </div>

      </div>
    </div>
  </>
  )
}

export default Dashboard
