import React from 'react'
import "./Home.css"
import LogoItalanta from "./image/My-project 5.jpg"
import{Link} from "react-router-dom"

function Home() {
  return (
    <div className='Title'>
      <img src={LogoItalanta}  alt="loading..." />
      <h1>Thank You!</h1>
      <Link to='/dessaikibeho' style={{color:'blue', fontSize:'70px'}} className='Next'>-</Link>


    </div>
  )
}

export default Home