import React, { useState, useEffect } from 'react'
import axios from 'axios';
import moment from 'moment';
import './adminpage.css';
import Select from 'react-select';
import Adminnavbar from './Adminnavbar';
function Adminpage() {
  const [entries, setEntries] = useState([]);
  const [selectedOption, setSelectedOption] = useState(null);
  const [selectBranch, setBranchOption] = useState();
  const [selectedBranch, setSelectedBranch] = useState();
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
    let branchOptions = [];
    if (selectedOption) {
      if (selectedOption.value === "Aslam Chicken") {
        branchOptions = [
          { value: "ChandniChowk", label: "Chandni Chowk" },
          { value: "BatlaHouse", label: "Batla House" }
        ];
      }
      else if (selectedOption.value === "Bukhara") {
        branchOptions = [
          { value: "ITCMaurya", label: "ITC Maurya" },
        ]
      }
      else if (selectedOption.value === "Gulati") {
        branchOptions = [
          { value: "PandaraRoad", label: "Pandara Road" }
        ]
      }
      else if (selectedOption.value === "Karim's") {
        branchOptions = [
          { value: "GreenPark", label: "Green Park" },
          { value: "Jasola", label: "Jasola" },
          { value: "Nizamuddin", label: "Nizamuddin" },
          { value: "DLFAvenue", label: "DLF Avenue,Saket" },
          { value: "Jama Masjid", label: "Jama Masjid" },
        ]
      }
      else if (selectedOption.value === "Rajender Da Dhaba") {
        branchOptions = [
          { value: "SafdarjungEnclave", label: "Safdarjung Enclave" },
        ]
      }
      else if (selectedOption.value === "Sagar Ratna") {
        branchOptions = [
          { value: "DefenceColony", label: "Defence Colony" },
          { value: "PreetVihar", label: "Preet Vihar" },
          { value: "MasjidMoth", label: "Masjid Moth" },
          { value: "NarainaVihar", label: "Naraina Vihar" },
          { value: "PaschimVihar", label: "Paschim Vihar" },
        ]
      }
      else if (selectedOption.value === "Sandoz") {
        branchOptions = [
          { value: "ConnaughtPlace", label: "Connaught Place" },
          { value: "KarolBagh", label: "Karol Bagh" },
          { value: "LajpatNagar", label: "Lajpat Nagar" },
          { value: "RajouriGarden", label: "Rajouri Garden" },
          { value: "Jasola", label: "Jasola" },
        ]
      }
      else if (selectedOption.value === "Varq") {
        branchOptions = [
          { value: "TajMahal", label: "Taj Mahal Hotel" },
        ]
      }
      else { branchOptions = []; }
    }
    setBranchOption(branchOptions);
    setSelectedBranch(null);
  };
  const handleBranchChange = (selectedBranch) => {
    setSelectedBranch(selectedBranch);
  };
  const filteredData = (selectedOption && selectedBranch)
    ? entries.filter(item =>
      item.Restraunt.toLowerCase().includes(selectedOption.value.toLowerCase()) &&
      item.BranchName.toLowerCase().includes(selectedBranch.value.toLowerCase())
    )
    : entries;
  return(

    <div>
      <Adminnavbar />
      <br />
      <h1 style={{ marginTop: 70, textAlign: 'center' }} >Order Details</h1>
      <div className='fliter'>
        <Select className='search-bar'
          value={selectedOption}
          onChange={handleSelectChange}
          options={[
            { value: "Aslam Chicken", label: "Aslam Chicken" },
            { value: "Bukhara", label: "Bukhara" },
            { value: "Gulati", label: "Gulati" },
            { value: "Karim's", label: "Karim's" },
            { value: "Rajender Da Dhaba", label: "Rajender Da Dhaba" },
            { value: "Sagar Ratna", label: "Sagar Ratna" },
            { value: "Sandoz", label: "Sandoz" },
            { value: "Varq", label: "Varq" }
          ]}
          placeholder="Search Restaurants..."
        />
        <Select className='search-bar'
          value={selectedBranch}
          onChange={handleBranchChange}
          options={selectBranch}
          placeholder="Search Branch..."
        />
      </div>
      <div>
        <ul class="order-recipt">
          {filteredData.map(item => (
            <li key={item.id} className="flex-item">
              <div className='order-cards'>
                <h2 className='restraunt-name'>{item.Restraunt}</h2>
                <p>Branch: {item.BranchName}</p>
                <div className='order-details'>
                  <h3>Order Summary</h3>
                  <p>OrderId: #{item.OrderId}</p>
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
      <hr />
      <h1 style={{ marginTop: 10, textAlign: 'center' }} >All Orders</h1>
      <div >
        <ul class="order-recipt">
          {entries.slice().reverse().map(entry => (
            <li key={entry.id} className="flex-item">
              <div className='order-cards'>
                <h2 className='restraunt-name'>{entry.Restraunt}</h2>
                <p>Branch: {entry.BranchName}</p>
                <div className='order-details'>
                  <h3>Order Summary</h3>
                  <p>OrderId: #{entry.OrderId}</p>
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