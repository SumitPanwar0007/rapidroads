import React from 'react'
import traffic from '../../images/traffic.JPG'
import helmet from '../../images/helmet1.jpeg'
import car from '../../images/carroad.png'


const Challan = () => {
  

  const imageUrls = [
    traffic,helmet,car,traffic,helmet,car
  
  ];
  return (
    <div>
    <div className='flex flex-col items-center my-4 '>
    <h1 className='text-3xl font-bold text-center'>
      Welcome to the Challan page!
      </h1>
    
<p className='text-lg mt-4'>Here, you can view detailed information about a specific traffic challan.</p>
<p className='text-lg'>From violation details to fine amounts, everything related to the challan is displayed here.</p>

    </div>
      
      <div className='grid grid-cols-4 gap-4 '>
        {imageUrls.map((image,index)=>(
          <div key={index} className='flex flex-col gap-2 border-2 rounded-md  '>

            <img src={image} alt={`Image${index}`} className="max-h-full min-h-fit   max-w-full mx-auto"/>
           
            <div className='flex flex-col gap-2 p-2'>
            <p className=' text-sm'>Camera no.{index}</p>
              <input type='button' value='view ' className='bg-yellow-500 h-10 px-4 text-black border  rounded-md shadow-md hover:bg-yellow-600 focus:outline-none focus:ring-2 focus:ring-red-500 focus:ring-opacity-50'/>
            </div>
          </div>
        ))}
      </div>


      
    </div>
  )
}

export default Challan
