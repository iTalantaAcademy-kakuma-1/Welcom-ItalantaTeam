import Mahdi from "./image/Mahdi.jpeg"
import './Mahdi.css'
import { useNavigate } from 'react-router-dom'


 const Mahdi=()=>{
    let navigate=useNavigate()
    return(
        <>
        <img className="M" src={dessaiImage} alt="loarding..." />
        <p>
            dessai Kibeho je sui lsnjsklaha
        </p>
        
        
        </>
    )
}
export default DessaiKibeho