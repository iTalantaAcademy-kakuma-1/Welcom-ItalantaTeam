import React from 'react'
import "./Home.css"
import LogoItalanta from "./image/home2.jpg"
import{Link} from "react-router-dom"
import welcome from'./image/welcome.gif'
import Esther from "./image/esther3.png"
import Peter from "./image/peter1.png"
import Review from './Review'
import ThankAll from"./image/thankAll.jpg"



function Home() {
  return (
    <section className='container1'>
    <div className='Title'>
      <img src={LogoItalanta}  alt="loading..." />
      <h3 className='welc'>Welcome to Kakuma</h3>
      <div className='container11'>
           
          <img src={Peter} alt='loading'/>
          <h1>
  
  <div className="message">
    <div className="word1">Peter</div>
    <div className="word2">Esther</div>
    <div className="word3">Welcome</div>
  </div>
</h1>
          <img src={Esther} alt='loading'/>
          

        </div>
      </div>
      
      <div className='container2'>
        
        <h2>Our Thanks To You</h2>
      
      <img src={ThankAll}  alt="loading..." />
      <Review/>
    </div>
    </section>
  )
}

export default Home