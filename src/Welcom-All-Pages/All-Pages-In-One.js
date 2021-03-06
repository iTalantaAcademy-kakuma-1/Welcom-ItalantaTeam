import React from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import DessaiKibeho from './DessaiKibeho/DessaiKibeho'
import Shukri from './Shukri/Shukri'
import Home from './HomePage/Home'
import Footer from './Footer/Footer'
import Aljabana from "./Aljabana-Elizabeth/Aljabana"

function AllPagesInOne() {
  return (
      <Router>
          <Routes>
              <Route path='/' element={<Home/>}/>
              <Route path='/DessaiKibeho' element={<DessaiKibeho/>} />
              <Route path='/Aljabana' element={<Aljabana/>} />
             

          </Routes>
      </Router>

   
        

   
)
}

export default AllPagesInOne