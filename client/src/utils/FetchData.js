// import {REACT_APP_CHALLAN_API} from '../../src';
export const Challansoptions = {
    method: 'POST',
    headers: {
      'content-type': 'application/json',
      'X-RapidAPI-Key':'a252df7973mshc8d70fa29ad59c5p16ddcejsnd51aeadb0f70',
      'X-RapidAPI-Host': 'rto-challan-information-verification-india.p.rapidapi.com'
    },
    body:JSON.stringify({
      regn_no: 'dl5sch0211',
      consent: 'yes',
      consent_text: 'I hear by declare my consent agreement for fetching my information via AITAN Labs API'
    })
  };
  
export const FetchData= async(url,options)=>{
  try{
    const response= await fetch(url,options);
    const data= await response.json();
    console.log("one");
console.log(data);
    return data;
  }
  catch(error){
    console.log("this is the error",error);
  }
   
}