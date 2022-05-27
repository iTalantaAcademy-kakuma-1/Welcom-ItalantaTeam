import MahdiImage from "./image/Mahdi.j"
import './DessaiKibeho.css'
import { useNavigate } from 'react-router-dom'


 const DessaiKibeho=()=>{
    let navigate=useNavigate()
    return(
        <>
        <img className="imageKdk" src={dessaiImage} alt="loarding..." />
        <p>
            dessai Kibeho je sui lsnjsklaha
        </p>
        
        
        </>
    )
}
export default DessaiKibeho