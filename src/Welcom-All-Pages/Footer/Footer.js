import React from 'react'
import ElewaLogo from "./images/elewa.png"
import WindleLogo from "./images/wikLogo.jpg"
import microsoft from "./images/My-project3.jpg"
import "./Footer.css"


function Footer() {
  return (
    <footer className="text-center text-white">
    
    <div className="container p-4">
    
      <section className="">
        <div className="row">
          <div className="col-lg-2 col-md-12 mb-4 mb-md-0">
            <div
              className="bg-image hover-overlay ripple shadow-1-strong rounded"
              data-ripple-color="light"
            >
            <a href='#Footer'></a>
              <img
                src={ElewaLogo}
                className="w-100"
              />
              <a href="https://www.elewa.education/">
                <div
                  className="mask"
                 
                >Elewa Education</div>
              </a>
            </div>
          </div>
          <div className="col-lg-2 col-md-12 mb-4 mb-md-0">
            <div
              className="bg-image hover-overlay ripple shadow-1-strong rounded"
              data-ripple-color="light"
            >
              <img
                src={WindleLogo}
                className="w-100"
              />
              <a href="https://windle.org/">
                <div
                  className="mask"
               
                > Windle Kenya</div>
              </a>
            </div>
          </div>
          <div className="col-lg-2 col-md-12 mb-4 mb-md-0">
            <div
              className="bg-image hover-overlay ripple shadow-1-strong rounded"
              data-ripple-color="light"
            >
              <img
                src={microsoft}
                className="w-100"
              />
              <a href="https://news.microsoft.com/en-xm/features/furthering-our-investment-in-africa-microsoft-opens-first-africa-development-centre-in-kenya-and-nigeria/">
                <div
                  className="mask"
                
                > Microsoft ADV</div>
              </a>
            </div>
          </div>
          
          </div>
      </section>
      
    </div>

  

    <div className="text-center p-3" >
      © 2022 Copyright:
      <a className="text-black" href="https://github.com/iTalantaAcademy-kakuma-1"> Welcome-ITalantaTeam GitHUb</a>
    </div>
    Welcome ITalantaTeam
  </footer>
  )
}

export default Footer