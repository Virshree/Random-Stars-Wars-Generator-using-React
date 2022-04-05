
import './App.css';
import React, { useEffect, useState } from 'react';
import axios from 'axios';

function App() {
  useEffect(()=>{
    fetchdetails()
  // eslint-disable-next-line react-hooks/exhaustive-deps
  },[])
  const [details,setdetails]=useState([]);

  const random=(Math.floor(Math.random()*88))
  const fetchdetails=async()=>{
    const users=await axios.get(`https://akabab.github.io/starwars-api/api/id/${random}.json`)
      setdetails(users.data)
      //console.log(details)
  }


 

  return (
    <div className="app">
        <h2 className='title'>Random Star Wars Generator</h2>
        <button  className="btn-click"onClick={fetchdetails}>Click here.</button>

        <div className='stars'>
         <h2 className='box'>Id:{details?.id}</h2>
          <h2 className='box'>Name:{details?.name}</h2>
          <h2 className='box'>Height:{details?.height}</h2>
           <h2 className='box'> Species:{details?.species}</h2>
           <h2 className='box'>HomeWorld:{details?.homeworld}</h2>
            <h2 className='box'>
            <img src={details.image} className="img" alt="logo" width="150" height="150"/></h2>
            <h2 className='box'> EyeColor:{details?.eyeColor}</h2>
            <h2 className='box'> SkinColor:{details?.skinColor}</h2>
            </div>
    </div>
  );
}

export default App;
