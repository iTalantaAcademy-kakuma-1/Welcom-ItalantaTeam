import React from 'react'
import "./Home.css"
import LogoItalanta from "./image/My-project 5.jpg"
import{Link} from "react-router-dom"
import welcome from'./image/welcome.gif'
import Esther from "./image/esther2.png"


function Home() {
  return (
    <div className='Title'>
      <img src={LogoItalanta}  alt="loading..." />
      <img className='welcome' src="https://www.animatedimages.org/data/media/707/animated-welcome-image-0291.gif"  alt="loading..." />
      <img className='esther' src={Esther}  alt="loading..." />
      

      <h1>Thank You!</h1>
      <Link to='/dessaikibeho' style={{color:'blue', fontSize:'70px'}} className='Next'>-</Link>


    </div>
  )
}

export default Home