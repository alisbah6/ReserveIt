import React, { useEffect, useState } from 'react'

export const Avatar = () => {
  const[data,setData]=useState([]);
  useEffect(()=>{
    fetch("http://localhost:3500/user/avatar",{method:"GET"})
    .then((res)=>res.json()).then((data)=>{console.log(data,"userData");
    setData(data.data);
  });
  },[]);
  return (
    <div>
      {data.map((item, index)=>{return(
        <p key={index}>{item.name}</p>
      )})}
    </div>
  )
}
