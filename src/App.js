import React, {useEffect, useState, useRef} from 'react'
import {BrowserRouter, Route, Routes} from 'react-router'

function App() {
  const [userData, setUserData] = useState([])
  const divdisplay = useRef(0)
  const [loading, setLoading] = useState(true)
  const [showDetails, setShowDetails] = useState(false)
  const fetchData = async() =>{
    const response = await fetch('https://interviewtst.herokuapp.com/get-all-users');
    const data = await response.json();
    setUserData(data)
    setLoading(false)
  }
  useEffect(()=>{
    fetchData()
  }, [])
  console.log(userData)
  if(loading){
    return <h1>Loading</h1>
  }
  const showUserDetails = (id) =>{
    setShowDetails(!showDetails)
  }
  return (
    <div className="App">
      <h1>Hello</h1>
      {userData.User_Details.map((data) =>{
        return <div className='person' key={data.id} >
          <h3><a href='#' onClick={showUserDetails}>{data.firstname}</a></h3>
          <p>{data.email}</p>{ 
          showDetails &&
             <div className='more' ref={divdisplay}>
             <p>{data.firstname}</p><span>{data.lastname}</span>
             <p>{data.email}</p>
             <p>{data.job_area}</p>
             <p>{data.job_title}</p>
             <p>{data.phone_no}</p>
             </div>
          }
        </div>
        
      })}
    </div>
  );
}

export default App;
