// import {useState} from 'react';

// import { Button } from 'globalStyles/style';
// import http from 'services/httpService';
// import { checkExpiredUserToken } from 'utils';
// import { Redirect } from 'react-router-dom';




// const Scan = () => {
//   const appdetails = JSON.parse(sessionStorage.getItem('response')); 
//   // console.log(appdetails,'store')
//   const [scan, setScan] = useState(false);
//   const [scanObject, setScanObject] = useState({
//     file_name:appdetails.data.file_name,
//     project_name:appdetails.data.project,
//     hash:appdetails.data.hash,
//     scan_type:appdetails.data.scan_type
//   })

//   const ScanFile = async e => {
//     checkExpiredUserToken()

//     console.log(scanObject, 'scanobj')
//     try {
//       const scan_request = await http.post('https://aquiladev.herokuapp.com/api/scan/', scanObject)

//       sessionStorage.setItem('scan_request', JSON.stringify(scan_request));
//       setScan(true)
//       console.log(scan_request, 'scan request')
      
//     }catch (error){
//       console.log(error)
//     }
//   }
//   if(scan){
//     return <Redirect to="/dashboard/scan/result"/>
//   }

//    return (
//     <div style={{display:'flex', flexDirection:'column', margin:'40px'}}>
//       <h3>App Details: </h3>
//     <p>User: {appdetails.data.user}</p>
//     <p>Analyzer: {appdetails.data.analyzer}</p>
//     <p>Filename: {appdetails.data.file_name}</p>
//     <p>Project Name: {appdetails.data.project}</p>
//     <p>Scan Type: {appdetails.data.scan_type}</p>
//     <p>Status: {appdetails.data.status}</p>
//     <p>Hash:  {appdetails.data.hash}</p>
//     <div >
//       <Button  
//         mt='20px'
//         w='200px'
//         p='10px'
//         bc='#5B5B5B'
//         color='#EDEFF5'
//         fs='18px'
//         br='3px'
//         mr='90px'
//         type='submit'
//         onClick={ScanFile}
//       >
//         Proceed to Scan
//       </Button>
//       <Button 
//         border='1px solid #5B5B5B'
//         p='10px'
//         color='#000'
//         fs='18px'
//         w='200px'
//         >Cancel</Button>
//     </div>
//     </div>
//    )
// }



// export default Scan;

import React from 'react';

const Scan = () => {
  return <div>
    <h2>Scan</h2>
  </div>;
}



export default Scan;