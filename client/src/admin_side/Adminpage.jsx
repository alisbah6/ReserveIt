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

  let orderdetails = document.querySelector('.order-details');
  const hideshow = () => {
    orderdetails.style.display = 'none';
  }
  return (

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
                <div className='order-details' id='target'>
                  <h2 className='restraunt-name'>{item.Restraunt}</h2>
                  <h3 className='orderS'>Order Summary</h3>
                  <hr />
                  <p className='order-info'>Branch: {item.BranchName}</p>
                  <p className='order-info'>OrderId: #{item.OrderId}</p>
                  <p className='order-info'>Seats: {item.Seat}</p>
                  <p className='order-info'>Items: {item.item}</p>
                  <p className='order-info'>Time: {item.time}</p>
                  <p className='order-info'>Reservation Date: {item.date.substring(0, 16)}</p>
                  <hr />
                </div>
                <div className='user-details'>
                  <h2>Customer Details</h2>
                  <div className='d-row'>
                    <div>
                      <p className='order-info'>Email:  {item.UserEmail}</p>
                      <p className='order-info'>Contact: {item.contact}</p>
                    </div>
                    <button className='order-done' onClick={hideshow}>Done</button>
                  </div>
                  <p className='order-time'>{moment(item.bookedOn).fromNow()}</p>
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
              <div className='order-cards' id='target'>
                <div className='order-details'>
                  <h2 className='restraunt-name'>{entry.Restraunt}</h2>
                  <h3 className='orderS'>Order Summary</h3>
                  <hr />
                  <p className='order-info'>Branch: {entry.BranchName}</p>
                  <p className='order-info'>OrderId: #{entry.OrderId}</p>
                  <p className='order-info'>Seats: {entry.Seat}</p>
                  <p className='order-info'>Items: {entry.item}</p>
                  <p className='order-info'>Time: {entry.time}</p>
                  <p className='order-info'>Reservation Date: {entry.date.substring(0, 16)}</p>
                  <hr />
                </div>
                <div className='user-details'>
                  <h2>Customer Details</h2>
                  <div className='d-row'>
                    <div>
                      <p className='order-info'>Email:  {entry.UserEmail}</p>
                      <p className='order-info'>Contact: {entry.contact}</p>
                    </div>
                    <button className='order-done' onClick={hideshow}>Done</button>
                  </div>
                  <p className='order-time' id='hide'>{moment(entry.bookedOn).fromNow()}</p>
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