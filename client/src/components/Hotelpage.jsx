import React from 'react'
import Navbar from './Navbar';
import Footer from './Footer';
import { data, tableset } from './Restraunts';
import './Hotelpage.css';
import { Link, useParams } from 'react-router-dom';

function Hotelpage() {
  const params = useParams();
  const id = params.id;
  const resturant = data.filter(res => res.id === id);
  return (
    <div>
        <Navbar/>
        <br></br>
        {resturant.map((item,index)=>
        {
          return(
            <div className='container'key={index}>
            <div className="branch-container">
              <div className='branch'>
                <p>Branches</p>
              <ul>
                <Link><li>{item.b1}</li></Link>
                <Link><li>{item.b2}</li></Link>
                <Link><li>{item.b3}</li></Link>
                <Link><li>{item.b4}</li></Link>
                <Link><li>{item.b5}</li></Link>
              </ul>
              </div>
            </div>
            <div className="details-container">
              <h2>{item.name}</h2>
            {tableset.map((item,index)=>{
              return(
                <div>
                  {item.bname}
                </div>
              )
            }
            )
            }
            </div>
        </div>
          )
        })}
        <Footer/>
    </div>
  );
}
export default Hotelpage;