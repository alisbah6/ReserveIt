import React,{useState,useEffect} from 'react'
import axios from 'axios';
import Adminnavbar from './Adminnavbar';
function Adminpage () {
  const [entries,setEntries] = useState([]);
  useEffect(() => {
    const fetchAllResponses = async () => {
      try {
        const response = await axios.get("http://localhost:3500/user/Allrecords");
        if (response.status === 200) {
          // Return the array of feedback responses
          setEntries(response.data);
          localStorage.setItem('AllResponses', JSON.stringify(response.data));
        }
      } catch (error) {
        console.error("Error fetching All responses:", error);
      }
    };
    const cachedRecords = localStorage.getItem('AllResponses');
    if (cachedRecords) {
      // If cached records exist, parse and set them into state
      setEntries(JSON.parse(cachedRecords));
    } else {
      // If no cached records, fetch them
      fetchAllResponses();
    }
    // const interval = setInterval(() => {
    //   fetchAllResponses()
    // }, 100)
    // return () => clearInterval(interval)
  }, [])
  console.log(entries);
  return (
    <div>
      <Adminnavbar/>
      <br/>
    </div>
  )
}

export default Adminpage