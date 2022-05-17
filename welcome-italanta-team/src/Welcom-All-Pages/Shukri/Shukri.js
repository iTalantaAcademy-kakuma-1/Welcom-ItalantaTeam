import React from 'react'
import shukri from "./image/shukri.jpg"
import "./shukri.css"
import { useNavigate } from 'react-router-dom'

export default function Shukri() {
  let navigate=useNavigate()
  return (
    

    <div>
        <img className='shukri' src={shukri}/>
        
        <h1> Shukri</h1>
        <button onClick={()=>{
          navigate("/dessaikibeho")
        }} > To Dessai Kibeho</button>
        </div>
  )
}
