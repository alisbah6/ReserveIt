import React from 'react'
import AdminNavbar from './adminnavbar'

const adminpage = () => {
  // useEffect(() => {
  //   const fetchAllRecords = async () => {
  //     try {
  //       const response = await axios.get("http://localhost:3500/user/Allrecords");
  //       if (response.status === 200) {
  //         // Return the array of feedback responses
  //         setRecords(response.data);
  //         localStorage.setItem('Allrecords', JSON.stringify(response.data));
  //       }
  //     } catch (error) {
  //       console.error("Error fetching feedback responses:", error);
  //     }
  //   };
  //   const cachedRecords = localStorage.getItem('Allrecords');
  //   if (cachedRecords) {
  //     // If cached records exist, parse and set them into state
  //     setRecords(JSON.parse(cachedRecords));
  //   } else {
  //     // If no cached records, fetch them
  //     fetchAllRecords();
  //   }
  //   const interval = setInterval(() => {
  //     fetchAllRecords()
  //   }, 100)
  //   return () => clearInterval(interval)
  // }, [])
  return (
    <div>
      <AdminNavbar/>

    </div>
  )
}

export default adminpage