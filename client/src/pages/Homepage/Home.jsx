import React from 'react'
import wallpaper from '../../images/wallpaper.jpg'
import wall2 from '../../images/wall2.jpg'
import car from '../../images/car.gif'

import rules from '../../images/rules.jpg'
import lane from '../../images/carlane.jpg'
import helmet from '../../images/helmet.jpg'


const Home = () => {
  return (
    <div className="w-full flex flex-col">

      <div className="sm:w-full h-1/2 relative mb-52 sm:mb-5 text-center ">
        <img src={wallpaper} alt="" className="h-5/6 md:h-2/3 opacity-80" />
        <div className="absolute top-14 left-20 font-bold text-3xl text-white">
          <p className="mb-4 text-4xl font-extrabold tracking-tight leading-none text-white md:text-5xl lg:text-6xl">
            Traffic Control</p>
            <p className="mb-8 text-sm sm:text-lg font-normal text-gray-300 lg:text-xl sm:px-12 lg:px-28">Following traffic rules is crucial for ensuring road safety and preventing accidents. By wearing a helmet and driving in the right lane, we can protect ourselves and others on the road. Let's make a commitment to prioritize safety and follow traffic rule.</p>
           
            <div className="flex flex-col space-y-4  sm:flex-row justify-center sm:space-y-0">


          <a className="inline-flex justify-center items-center py-3 px-5  text-sm sm:text-base font-medium text-center text-white rounded-lg bg-yellow-500 hover:bg-yellow-600 focus:ring-4 focus:ring-blue-300 dark:focus:ring-blue-900">
            Get started <svg className="w-3.5 h-3.5 ms-2 rtl:rotate-180" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 10">
                    <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M1 5h12m0 0L9 1m4 4L9 9"/>
                </svg>
          </a>
          <a href="#" className="inline-flex justify-center hover:text-gray-900 items-center py-3 px-5 sm:ms-4 text-base font-medium text-center text-yellow-500 sm:text-white rounded-lg border border-yellow-500 sm:border-white hover:bg-gray-100 focus:ring-4 focus:ring-gray-400">
                Learn more
            </a>
          </div>
        </div>
      </div>

        <div className="w-full flex-col gap-4">
            <p className="mt-4 text-center text-4xl font-extrabold tracking-tight leading-none text-black md:text-4xl lg:text-5xl">Common Traffice Rules</p>
      {/* first */}
            <div className="flex flex-col sm:flex-row w-full justify-between  items-center">
                <div className="w-1/2 text-center  flex flex-col gap-4 py-4">
                        <p className="text-4xl font-semibold">Wearing a Helmet  </p>
                        <p className="text-2xl text-justify px-4">Wearing a helmet while riding a motorcycle or bicycle is essential for protecting your head in case of an accident. It significantly reduces the risk of head injuries.  </p>
                </div>
                <div className="w-1/2">
                    <img src={helmet} className='w-2/3' alt="" />
                </div>
            </div>
{/* second */}

        <div className="flex flex-col sm:flex-row w-full justify-between  items-center">
                <div className="w-1/2">
                    <img src={lane} className='w-2/3 ml-6 rounded-xl' alt="" />
                </div>
                <div className="w-1/2 text-center  flex flex-col gap-4 py-4">
                        <p className="text-4xl font-semibold"> Driving in the Right Lane</p>
                        <p className="text-2xl text-justify px-6">Driving in the right lane allows for smoother traffic flow and reduces the risk of collisions. It is important to stay in your designated lane and only switch lanes when necessary. </p>
                </div>
                
            </div>

            {/* third */}
            <div className="flex  flex-col sm:flex-row w-full justify-between  items-center">
       
                <div className="w-1/2 text-center  flex flex-col gap-4 py-4">
                        <p className="text-4xl font-semibold">Obeying Traffic Signals and Signs</p>
                        <p className="text-2xl text-justify px-4">Following traffic signals and signs is crucial for maintaining order and preventing accidents. Stop at red lights, yield to pedestrians, and adhere to speed limits.</p>
                </div>
                <div className="w-1/2  ml-11">
                    <img src={rules} className='w-2/3  ml-4 my-4 rounded-xl' alt="" />
                </div>
                
            </div>

            
        </div>
        

      <div className="w-full flex px-2 py-24 bg-bg" style={{ backgroundImage: `url(${wall2})` }} >
        <div className=" rounded-lg py-4 w-1/2 bg-stone-300 flex flex-col justify-center items-center text-center">
          <h1 className="text-base sm:text-6xl mb-10 font-semibold">Get in Touch</h1>

          <form className=" w-5/6">
             
          <div className=" md:gap-1">
          <div className="relative z-0 w-full mb-5 group">
                <input
                  type="text"
                  name="floating_first_name"
                  id="floating_first_name"
                  className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
                  placeholder=" "
                  required
                />
                <label
                 htmlFor="floating_first_name"
                  className="peer-focus:font-medium text-center absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/2 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
                >
                  Full Name
                </label>
              </div>

              
            <div className="relative z-0 w-full mb-5 group">
              <input
                type="email"
                name="floating_email"
                id="floating_email"
                className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
                placeholder=" "
                required
              />
              <label
                htmlFor="floating_email"
                className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
              >
                Email address
              </label>
            </div>
          
            <div className="relative z-0 w-full mb-5 group">
                <input
                  type="tel"
                  pattern="[0-9]{3}-[0-9]{3}-[0-9]{4}"
                  name="floating_phone"
                  id="floating_phone"
                  className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
                  placeholder=" "
                  required
                />
                <label
                  htmlFor="floating_phone"
                  className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
                >
                  Phone number
                </label>
              </div>
         
            
              <div className="relative z-0 w-full mb-5 group">
                <input
                  type="text"
                  name="floating_company"
                  id="floating_company"
                  className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
                  placeholder=" "
                  required
                />
                <label
                  htmlFor="floating_company"
                  className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 peer-focus:text-yellow-600 peer-focus:dark:text-yellow-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
                >
                 Reason to Contacting Us
                </label>
              </div>
            </div>
            <button
              type="submit"
              className="text-white bg-yellow-500 hover:bg-yellow-600 focus:ring-4 focus:outline-none focus:ring-yellow-500 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-yellow-600 dark:hover:bg-yellow-700 dark:focus:ring-yellow-800"
            >
              Submit
            </button>
          </form>
        </div>
        <div className="w-1/2  flex flex-col text-center sm:ml-14 justify-center gap-8 text-yellow-500">

            <p className="text-base sm:text-4xl font-semibold">
                Available
            </p>

            <p className="text-lg sm:text-3xl lg:text-8xl font-bold">
                24/7.
            </p>
            <p className="text-base sm:text-3xl"> Toll Free</p>
            <p className="text-base sm:text-5xl"> 25844444.</p>

        </div>
      </div>


     
    </div>
  );
}

export default Home
