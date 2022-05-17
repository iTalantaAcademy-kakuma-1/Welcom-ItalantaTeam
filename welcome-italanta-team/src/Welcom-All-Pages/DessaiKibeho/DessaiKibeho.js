import dessaiImage from "./image/dessai.jpeg"
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
        <button onClick={()=>{
          navigate("/shukri")
        }} > To Shukri</button>
        
        </>
    )
}
export default DessaiKibeho