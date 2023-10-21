import React from 'react'
import Navbar from './Navbar';
import Footer from './Footer';
import { data,tableset } from './Restraunts';
import './Hotelpage.css';
import { Link, useParams } from 'react-router-dom';

function Bukhara() {
  const params = useParams();
  const id = params.id;
  const resturant = data.filter(res => res.id === id);
  const bname = params.bname;
  const branches = tableset.filter(branch => branch.bname === bname);
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
                  <Link to="/Bukhara/3/ITCMaurya"><li>{item.b1}</li></Link>
                </ul>
              </div>
            </div>
            <div className="details-container">
              <h2>{item.name}</h2>
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
export default Bukhara;