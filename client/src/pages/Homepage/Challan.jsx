  import React,{ useEffect, useState } from 'react'
  // import traffic from '../../images/traffic.JPG'
  // import helmet from '../../images/helmet1.jpeg'
  // import car from '../../images/carroad.png'
  import axios from 'axios';

  const Challan = () => {
    const [challans, setChallans] = useState([]);
    const [files, setFiles] = useState([]);

  // useEffect(() => {
  //   const fetchFiles = async () => {
  //     try {
  //       const response = await axios.get('http://localhost:8081/api/files');
  //       console.log("Files fetched", response.data);
  //       setFiles(response.data);
  //     } catch (error) {
  //       console.error('Error fetching files:', error);
  //     }
  //   };
  //   fetchFiles();
  // }, []);

    useEffect(() => {
      const fetchChallans = async () => {
        try {
          const response = await axios.get('http://localhost:8081/api/challan');
          console.log("fetched")
          setChallans(response.data);
        } catch (error) {
          console.error('Error fetching data-------: ', error);
        }
      };

      fetchChallans();
    }, []);


    


    return (
 


  <div>
      <div className='flex flex-col items-center my-4'>
        <h1 className='text-3xl font-bold text-center'>Welcome to the Challan page!</h1>
        <p className='text-lg mt-4'>Here, you can view detailed information about a specific traffic challan.</p>
      </div>

      <div className='grid grid-cols-4 gap-4'>
        {challans.map((challan, index) => (
          <div key={challan._id} className='flex flex-col gap-2 border-2 rounded-md'>
            {/* Assuming the image field contains a complete data URL */}
            <img src={challan.image} alt={`Challan ${index}`} className="max-h-full min-h-fit max-w-full mx-auto"/>
            <div className='flex flex-col gap-2 p-2'>
              <p className='text-sm'>Challan No. {challan.challanNo}</p>
              <input type='button' value='View' className='bg-yellow-500 h-10 px-4 text-black border rounded-md shadow-md hover:bg-yellow-600 focus:outline-none focus:ring-2 focus:ring-red-500 focus:ring-opacity-50'/>
            </div>
          </div>
        ))}
      </div>
    </div>


// <div>
//       <h1>File List</h1>
//       <div>
//         {files.map(file => (
//           <div key={file._id}>
//             <h2>{file.filename}</h2>
//             <a href={`http://localhost:8081/api/file/${file._id}`} target="_blank" rel="noopener noreferrer">Download</a>
//           </div>
//         ))}
//       </div>
//     </div>

    )
  }

  export default Challan
