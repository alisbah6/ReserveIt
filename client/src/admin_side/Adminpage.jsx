import React,{useState,useEffect} from 'react'
import axios from 'axios';
import moment from 'moment';
import './adminpage.css';
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
      <h1 style={{marginTop:70,textAlign:'center'}} >Orders</h1>
      <div className='order-cards'>
      <ul >
          {entries.slice().reverse().map(entry => (
            <li key={entry.id}>
              <h2 className='restraunt-name'>{entry.Restraunt}</h2>
              <p>Branch: {entry.BranchName}</p>
              <div className='order-details'>
              <h3>Order Summary</h3>
              <p>Seats: {entry.Seat}</p>
              <p>Items: {entry.item}</p>
              <p>Time: {entry.time}</p>
              <button className='order-done'>Done</button>
              <p>Reservation Date: {entry.date.substring(0, 16)}</p>
              </div>
              <div className='user-details'>
                <h4>User Details</h4>
              <h4>Email:  {entry.UserEmail}</h4>
              <p className='order-time'>{moment(entry.bookedOn).fromNow()}</p>
              <h4>Contact: {entry.contact}</h4>
              </div>
              </li>
          ))}
        </ul>
        </div>
    </div>
  )
}

export default Adminpage