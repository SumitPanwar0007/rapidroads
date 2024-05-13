import React, { useState, useEffect } from 'react';
import axios from 'axios';

const SearchChallan = () => {
  const [regnNo, setRegnNo] = useState('');
  const [challanInfo, setChallanInfo] = useState(null);
  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {
    setRegnNo(e.target.value);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    const options = {
      method: 'POST',
      url: 'https://rto-challan-information-verification-india.p.rapidapi.com/api/rc/challaninfo',
      headers: {
        'content-type': 'application/json',
        'X-RapidAPI-Key': 'a252df7973mshc8d70fa29ad59c5p16ddcejsnd51aeadb0f70',
        'X-RapidAPI-Host': 'rto-challan-information-verification-india.p.rapidapi.com'
      },
      data: {
        regn_no: regnNo,
        consent: 'yes',
        consent_text: 'I hear by declare my consent agreement for fetching my information via AITAN Labs API'
      }
    };

    try {
      const response = await axios.request(options);
      setChallanInfo(response.data);
      setLoading(false);
    } catch (error) {
      console.error(error);
      setLoading(false);
    }
  };
  return (
    <div className='flex flex-col gap-4 mt-10'>
      <form onSubmit={handleSubmit} className="flex flex-col gap-4">
        <label className="flex flex-col gap-4 mx-8" >
        <span className="block text-gray-900 text-2xl font-bold gap-4">   Registration Number:</span>
       
          <input type="text" value={regnNo} onChange={handleChange} className="border border-slate-300 p-2 rounded-lg text-xl w-full" />
        </label>
        <button type="submit" className='p-2 px-4 bg-[#FFCF01] mx-auto rounded-lg text-lg font-semibold w-1/5 shadow-lg'>Fetch Challan Info</button>
      </form>
      {loading ? (
        <p>Loading...</p>
      ) : ( challanInfo && (
          <div className="mt-4 p-4 items-center sm:mx-8">
            <h2 className="text-2xl font-bold text-center  ">CHALLAN INFORMATION</h2>
            <div className='grid grid-cols-1 sm:grid-cols-2 col-span-2 gap-8 mt-4 '>
            {challanInfo.response.results.map((challan, index) => (
              <div key={index} className="border border-gray-300 rounded-lg p-4 my-4 px-10 w-full shadow-md bg-slate-200 text-lg transition-transform duration-300 hover:scale-105">
                <p className="text-lg font-bold text-center" >Challan {index + 1}</p>
                <p >Owner Name: {challan.owner_name}</p>
                <p>Challan No: {challan.challan_no}</p>
                <p>Challan Date: {challan.challan_dt}</p>
                <p>Challan Time: {challan.challan_tm}</p>
                <p>Challan Type: {challan.challan_type}</p>
                <p>Vehicle Registration No: {challan.regn_no}</p>
                {/* <p>Challan Image: <a href={challan.challan_img} target="_blank" rel="noreferrer">Click here</a></p> */}
                
                <p className="text-lg font-bold text-red-500">Amount: {challan.amount}</p>
                <p>Status:<span className="text-red-500"> {challan.status} </span></p>
                <p>State Code: {challan.state_cd}</p>
                {/* <p>Vehicle Impound: {challan.vehicle_impound}</p> */}
                <h4 className="text-lg font-bold text-yellow-600">Offences:</h4>
                <ul>
                  {challan.offences.map((offence, index) => (
                    <li key={index}>
                      <p>Name: {offence.offence_name}</p>
                      <p>Penalty: {offence.penalty}</p>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
            </div>
          </div>
        )
      )}
    </div>
  );
};

export default SearchChallan;






























// import React, { useEffect, useState } from 'react'
// import { Challansoptions,FetchData } from '../../utils/FetchData'
// const SearchChallan = () => {
//   const [data,setData]=useState('');

//     const handleSearch= async()=>{
//       console.log("four")
//       try{ 
//         console.log("five")
//           const challandata= await FetchData('https://rto-challan-information-verification-india.p.rapidapi.com/api/rc/challaninfo',Challansoptions);
//           console.log(challandata);
//           setData(challandata);
//           console.log("two")
        
//       }
//       catch(error){
//         console.log("seven")
//         console.log("Error fetching data:",error);
//       }
     
//     };
//     useEffect(()=>{
//       handleSearch();
//       // console.log(data);
//     },[data]);

//   return (
//     <div>
//       <h1 className="bg-red-500 w-full">
//         Search Challenge here

//         {data}
//       </h1>
//       <div className="bg-purple-400 text-black text-lg"></div>
//     </div>
//   )
// }

// export default SearchChallan








// import React, { useState } from 'react';
// import axios from 'axios';

// function SearchChallan() {
//     const [phoneNumber, setPhoneNumber] = useState('');
//     const [textMessage, setTextMessage] = useState('');
//     const [responseMessage, setResponseMessage] = useState('');

//     const sendSMS = async () => {
//         const options = {
//             method: 'POST',
//             url: 'https://send-sms18.p.rapidapi.com/',
//             headers: {
//                 'content-type': 'application/json',
//                 'X-RapidAPI-Key': 'f0113ce685mshcc6a043f343cb0ep108f41jsn633b3024b885',
//                 'X-RapidAPI-Host': 'send-sms18.p.rapidapi.com'
//             },
//             data: {
//                 phone_number: phoneNumber,
//                 text: textMessage
//             }
//         };

//         try {
//             const response = await axios.request(options);
//             setResponseMessage('SMS sent successfully!');
//             console.log("this is the data-----------------------------------",response.data);
//         } catch (error) {
//             setResponseMessage('Failed to send SMS.');
//             console.error("this is error---------------",error);
//         }
//     };

//     return (
//         <div className="bg-white p-4 max-w-md mx-auto">
//             <div className="mb-4">
//                 <label htmlFor="phone" className="block text-sm font-medium text-gray-700">Phone Number</label>
//                 <input
//                     type="text"
//                     id="phone"
//                     value={phoneNumber}
//                     onChange={(e) => setPhoneNumber(e.target.value)}
//                     className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-yellow-500 focus:border-yellow-500"
//                 />
//             </div>
//             <div className="mb-4">
//                 <label htmlFor="message" className="block text-sm font-medium text-gray-700">Message</label>
//                 <textarea
//                     id="message"
//                     value={textMessage}
//                     onChange={(e) => setTextMessage(e.target.value)}
//                     className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-yellow-500 focus:border-yellow-500"
//                 />
//             </div>
//             <button
//                 onClick={sendSMS}
//                 className="w-full bg-yellow-500 hover:bg-yellow-600 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
//             >
//                 Send SMS
//             </button>
//             {responseMessage && <p className="mt-4 text-center">{responseMessage}</p>}
//         </div>
//     );
// }


//  export default SearchChallan
