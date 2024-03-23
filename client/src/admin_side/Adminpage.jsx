import React,{useState,useEffect} from 'react'
import axios from 'axios';
import moment from 'moment';
import './adminpage.css';
import Select from 'react-select';
import Adminnavbar from './Adminnavbar';
function Adminpage () {
  const [entries,setEntries] = useState([]);
  const [selectedOption, setSelectedOption] = useState(null);
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
    const interval = setInterval(() => {
      fetchAllResponses()
    }, 1000)
    return () => clearInterval(interval)
  }, [])
  const handleSelectChange = (selectedOption) => {
    setSelectedOption(selectedOption);
  };
  const filteredData = selectedOption
    ? entries.filter(item =>
        item.Restraunt.toLowerCase().includes(selectedOption.value.toLowerCase())
      )
    : [];
    const options = entries.map(item => ({ value: item.Restraunt, label: item.Restraunt }));
  return (
    <div>
      <Adminnavbar/>
      <br/>
      <h1 style={{marginTop:70,textAlign:'center'}} >Orders</h1>
      <div>
      <Select className='search-bar'
        value={selectedOption}
        onChange={handleSelectChange}
        options={options}
        placeholder="Search..."
      />
      <ul class="flex-container single-item">
        {filteredData.map(item => (
           <li key={item.id} class="flex-item">
           <div className='order-cards'>
           <h2 className='restraunt-name'>{item.Restraunt}</h2>
           <p>Branch: {item.BranchName}</p>
           <div className='order-details'>
           <h3>Order Summary</h3>
           <p>Seats: {item.Seat}</p>
           <p>Items: {item.item}</p>
           <p>Time: {item.time}</p>
           <p>Reservation Date: {item.date.substring(0, 16)}</p>
           <button className='order-done'>Done</button>
           </div>
           <div className='user-details'>
             <h4>User Details</h4>
           <h4>Email:  {item.UserEmail}</h4>
           <p className='order-time'>{moment(item.bookedOn).fromNow()}</p>
           <h4>Contact: {item.contact}</h4>
           </div>
           </div>
           </li>
        ))}
      </ul>
      </div>
      <hr/>
      <h1 style={{marginTop:10,textAlign:'center'}} >All Orders</h1>
      <div >
      <ul class="flex-container single-item">
          {entries.slice().reverse().map(entry => (
            <li key={entry.id} class="flex-item">
              <div className='order-cards'>
              <h2 className='restraunt-name'>{entry.Restraunt}</h2>
              <p>Branch: {entry.BranchName}</p>
              <div className='order-details'>
              <h3>Order Summary</h3>
              <p>Seats: {entry.Seat}</p>
              <p>Items: {entry.item}</p>
              <p>Time: {entry.time}</p>
              <p>Reservation Date: {entry.date.substring(0, 16)}</p>
              <button className='order-done'>Done</button>
              </div>
              <div className='user-details'>
                <h4>User Details</h4>
              <h4>Email:  {entry.UserEmail}</h4>
              <p className='order-time'>{moment(entry.bookedOn).fromNow()}</p>
              <h4>Contact: {entry.contact}</h4>
              </div>
              </div>
              </li>
          ))}
        </ul>
        </div>
    </div>
  )
}

export default Adminpage