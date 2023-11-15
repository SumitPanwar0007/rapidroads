import React, { useEffect, useState } from 'react'
import { Challansoptions,FetchData } from '../../utils/FetchData'
const SearchChallan = () => {
  const [data,setData]=useState('');

    const handleSearch= async()=>{
      console.log("four")
      try{ 
        console.log("five")
          const challandata= await FetchData('https://rto-challan-information-verification-india.p.rapidapi.com/api/rc/challaninfo',Challansoptions);
          console.log(challandata);
          setData(challandata);
          console.log("two")
        
      }
      catch(error){
        console.log("seven")
        console.log("Error fetching data:",error);
      }
     
    };
    useEffect(()=>{
      handleSearch();
      // console.log(data);
    },[data]);

  return (
    <div>
      <h1 className="bg-red-500 w-full">
        Search Challenge here

        {data}
      </h1>
      <div className="bg-purple-400 text-black text-lg"></div>
    </div>
  )
}

export default SearchChallan
