imp
import Mahdi from "./image/Mahdi.jpeg"
import './Mahdi.css'
import { useNavigate } from 'react-router-dom'


 const Mahdi=()=>{
    let navigate=useNavigate()
    return(
        <>
        <img className="Mahdi" src={Mahdi} alt="Opening_soon..." />
        <p>
           Mahdi Adam Yahya, Thanks to our visitors. 
        </p>
        
        
        </>
    )
}
export default Mahdi