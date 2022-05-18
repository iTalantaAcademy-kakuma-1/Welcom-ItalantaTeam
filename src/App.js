

import"./Welcom-All-Pages/Welcom.css"
import DessaiKibeho from "./Welcom-All-Pages/DessaiKibeho/DessaiKibeho"
import WelcomePage from './Welcom-All-Pages/WelcomePage';
import AllPagesInOne from './Welcom-All-Pages/All-Pages-In-One';
import Footer from "./Welcom-All-Pages/Footer/Footer"
import {useEffect} from "react"






function App() {


  return(
    <div className='App'  >
      <div>
      <WelcomePage/>
      </div>
      <div>
      <AllPagesInOne/>
      </div>
      <div>
      <Footer/>
      </div>
      
    </div>
  )
    
    }


export default App;
