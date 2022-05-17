import React from 'react'
import "./Home.css"
import LogoItalanta from "./image/My-project4.jpg"

function Home() {
  return (
    <div className='Title'>
      <img src={LogoItalanta}  alt="loading..." />
      <h1>Thank You!</h1>
      <a href='/dessaikibeho' style={{color:'blue', fontSize:'70px'}} className='Next'>-</a>


    </div>
  )
}

export default Home