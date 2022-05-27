import React from 'react'
import  imgAlja from "./images/cairo1.jpg"
import lizaPng from './images/liza5.png'
import "./Aljabana.css"

function Aljabana() {
  return (
    <div className='container25'>
      
      <img className='imageAlja' src={imgAlja} alt="aljana Image"/>
      <img className='imageAlja1' src={lizaPng} alt="aljana Image"/>


        <h2 className='header1'>Vote of thanks to Microsoft team,Elewa and Windle Trust International.</h2>
        <article className='parra1'>
        I am writing to express my sincere gratitude to you for making the Italanta program a successful journey.<br/>  I was thrilled to learn programming skills because my ambition was to become a software engineer, and I am deeply appreciative of your support.<br/>
        My heartfelt thanks to Jante and Peter for the greatest sacrifice and support towards this academic journey. <br/>
        Am grateful to be among the beneficiaries of this program and I believe that , the knowledge of programming I have gained from this program is going to 
        help me in solving technological problems arising from my society .



        </article>
        <h2 className='header2'>By Aljabana Eizabeth Mubarak</h2>
    </div>
  )
}

export default Aljabana