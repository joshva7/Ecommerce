import Navegationbar from "../compontes/Navegationbar"
import errorimg from '../assets/error.png'
import { useNavigate } from "react-router-dom"
const Errorpage = () => {
    const navegation = useNavigate()
    const HandleBackpage=()=>{
        navegation("/home")
    }
  return (
    <div>
        <Navegationbar />
        <div className="flex my-25 flex-col gap-2 items-center ">
            <div>
                <img src={errorimg} />
            </div>
            <div>
                <p className=" font-bold md:text-2xl text-[#425a8b]">This page is currently not avaiable</p>
                <button className="bg-[#425a8b] px-5 py-2 mx-15 md:mx-28 rounded-[5px] text-white font-medium mt-4" onClick={HandleBackpage}>Back to home</button>
            </div>
        </div>
    </div>
  )
}

export default Errorpage