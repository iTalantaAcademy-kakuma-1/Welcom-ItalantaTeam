import Mahdi from "./image/Mahdi.jpeg"
import './Mahdi.css'
import { useNavigate } from 'react-router-dom'


 const Mahdi=()=>{
    let navigate=useNavigate()
    return(
        <>
        <img className="Mahdi" src={Mahdi} alt="Opening_soon..." />
        <p>
            dessai Kibeho je sui lsnjsklaha
        </p>
        
        
        </>
    )
}
export default Mahdi