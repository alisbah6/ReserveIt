import React from 'react'
import Navbar from './Navbar';
import Footer from './Footer';
import { data,tableset } from './Restraunts';
import './Hotelpage.css';
import Table from '../assets/Table1.png';
import { Link, useParams,useNavigate } from 'react-router-dom';

var person;
var totalseats=52;
var totalno;
function Karim() {
  const params = useParams();
  const id = params.id;
  const resturant = data.filter(res => res.id === id);
  const bname = params.bname;
  const branches = tableset.filter(branch => branch.bname === bname);
  const navigate=useNavigate();
  const seatno=()=>{
    alert ("How many seats do you want \n");
    person=prompt(" ");
    let result=window.confirm ("Do You Confirm "+person+" seats");
    if(result===true){
      navigate('/Menu');
      totalno=totalseats-person;
    }
    totalseats=totalno;
    if(totalseats>=0){
      navigate('/Menu');
    }
    else{
      alert("Sorry,Booking is Full \n SEE YOU NEXT BYE");
    }
  }
  return (
    <div>
      <Navbar />
      <br></br>
      {resturant.map((item, index) => {
        return (
          <div className='container' key={index}>
            <div className="branch-container">
              <div className='branch'>
                <p>Branches</p>
                <ul>
                  <Link to="/Karim/5/GreenPark"><li>{item.b1}</li></Link>
                  <Link to="/Karim/5/JasolaKarims"><li>{item.b2}</li></Link>
                  <Link to="/Karim/5/Nizamuddin"><li>{item.b3}</li></Link>
                  <Link to="/Karim/5/DLFAvenue"><li>{item.b4}</li></Link>
                  <Link to="/Karim/5/JamaMasjid"><li>{item.b5}</li></Link>
                </ul>
              </div>
            </div>
            <div className="details-container">
              <h2>{item.name}</h2>
              <div>
                <button className='tablesetting'>
                <img src={Table} className='tablesetting' onClick={seatno}/>
                </button>
                <p className='loc'> Total No. Of Seats Available {totalseats}</p>
              </div>
              {branches.map((item, index) => {
                return (
                  <div className='container-desc' key={index}>
                    <p className='loc'>
                    Location:{item.loc}
                    <br/>
                    Hours:{item.hr}
                    <br/>
                    Contact:{item.ph}
                    </p>
                  </div>
                )
              })}
            </div>
          </div>
        )
      })}
      <Footer />
    </div>
  );
}
export default Karim;