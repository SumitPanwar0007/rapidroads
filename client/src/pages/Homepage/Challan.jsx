  import React,{ useEffect, useState } from 'react'
  // import traffic from '../../images/traffic.JPG'
  // import helmet from '../../images/helmet1.jpeg'
  // import car from '../../images/carroad.png'
  import axios from 'axios';
  import ChallanModal from './ChallanModal'; // Import the modal component


  const Challan = () => {
    const [challans, setChallans] = useState([]);
    const [files, setFiles] = useState([]);


    const [selectedChallan, setSelectedChallan] = useState(null); // State to track selected challan
  const [modalVisible, setModalVisible] = useState(false); // State to control modal visibility

  // Function to handle the click event of the "View" button
  const handleViewDetails = (challan) => {
    setSelectedChallan(challan);
    
    setModalVisible(true);
  
  };
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
          
          setChallans(response.data);
        } catch (error) {
          console.error('Error fetching data-------: ', error);
        }
      };

      fetchChallans();
    }, []);


    


    return (
      <div>
      {/* Your existing code for displaying challans */}
      <div className='grid grid-cols-4 gap-4 mt-4 mx-4'>
        {challans.map((challan, index) => (
          <div key={challan._id} className='flex flex-col gap-2 border-2 rounded-md'>
            {/* Assuming the image field contains a complete data URL */}
            <img src={challan.image} alt={`Challan ${index}`} className="max-h-full min-h-fit max-w-full mx-auto"/>
            <div className='flex flex-col gap-2 p-2'>
              <p className='text-sm'>Challan No. {challan.challanNo}</p>
              <p className='text-sm'>Amount: {challan.amount}</p>
              <p className='text-sm'>vehicle number: {challan.vehicle_number}</p>

              {/* Handle click event to show modal */}
              <input type='button' value='View' onClick={() => handleViewDetails(challan)} className='bg-yellow-500 h-10 px-4 text-black border rounded-md shadow-md hover:bg-yellow-600 focus:outline-none focus:ring-2 focus:ring-red-500 focus:ring-opacity-50'/>
            </div>
          </div>
        ))}
      </div>

      {/* Modal component */}
      {modalVisible && (
        <ChallanModal
          challan={selectedChallan}
          closeModal={() => setModalVisible(false)} // Function to close the modal
        />
      )}
    </div>
  );
};



//   <div>
//       <div className='flex flex-col items-center my-4'>
//         <h1 className='text-3xl font-bold text-center'>Welcome to the Challan page!</h1>
//         <p className='text-lg mt-4'>Here, you can view detailed information about a specific traffic challan.</p>
//       </div>

//       <div className='grid grid-cols-4 gap-4'>
//         {challans.map((challan, index) => (
//           <div key={challan._id} className='flex flex-col gap-2 border-2 rounded-md'>
//             {/* Assuming the image field contains a complete data URL */}
//             <img src={challan.image} alt={`Challan ${index}`} className="max-h-full min-h-fit max-w-full mx-auto"/>
//             <div className='flex flex-col gap-2 p-2'>
//               <p className='text-sm'>Challan No. {challan.challanNo}</p>
//               <p className='text-sm'>Amount: {challan.amount}</p>

//               <input type='button' value='View' className='bg-yellow-500 h-10 px-4 text-black border rounded-md shadow-md hover:bg-yellow-600 focus:outline-none focus:ring-2 focus:ring-red-500 focus:ring-opacity-50'/>
//             </div>
//           </div>
//         ))}
//       </div>
//     </div>


// // <div>
// //       <h1>File List</h1>
// //       <div>
// //         {files.map(file => (
// //           <div key={file._id}>
// //             <h2>{file.filename}</h2>
// //             <a href={`http://localhost:8081/api/file/${file._id}`} target="_blank" rel="noopener noreferrer">Download</a>
// //           </div>
// //         ))}
// //       </div>
// //     </div>

//     )
//   }

  export default Challan
