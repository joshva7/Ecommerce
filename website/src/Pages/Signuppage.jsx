import glogo from '../assets/gicon.png'
import alogo from '../assets/alogo.png'
import flogo from '../assets/flogo.png'
import { Link, useNavigate } from "react-router-dom"
import { useState, useContext } from "react"
import { AuthContext } from "../Hook/AuthProvider"
const Signuppage = () => {
    const { signup } = useContext(AuthContext);
    const [username, setUsername] = useState("")
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")
    const [averthar, setAverthar] = useState("")
    const Navigate = useNavigate();
    const signupSumbit = async (e) => {
        e.preventDefault();
        if (!username || !email || !password || !averthar) {
            alert("Please fill all fields before submitting");
            return;
        }
        else {
            await signup(username, email, password, averthar);
            alert("Signup successful!")
            Navigate("/home");
        }
    }
    const handleOathu=()=>{
        Navigate("/signup")
    }
    return (
        <div>
            <div className="mx-3 my-10 md:mt-15 md:mx-25 md:my-2 text-gray-400">
                <p className=" text-2xl text-[#425a8b] font-medium">Create an account</p>
                <p className="">Access to all features. No credit card required.</p>
            </div>
            <div className=" flex flex-col md:flex-row mx-3">
                <form>
                    <div className=" flex flex-col md:mx-25 text-gray-600 font-medium md:w-1/2">
                        <span>Username*</span>
                        <input type="text" onChange={(e) => setUsername(e.target.value)} placeholder="Username*" className=" outline-none px-5 py-2 my-2 border-2 border-gray-300 rounded-[5px]" required />
                        <span>Email*</span>
                        <input type="text" placeholder="Email*" onChange={(e) => setEmail(e.target.value)} className="outline-none px-5 py-2 my-2 border-2 border-gray-300 rounded-[5px]" required />
                        <span>Password*</span>
                        <input type="text" placeholder="Password*" onChange={(e) => setPassword(e.target.value)} className="outline-none px-5 py-2 my-2 border-2 border-gray-300 rounded-[5px]" required />
                        <span>Averthar*</span>
                        <input type="text" placeholder="averthar*" onChange={(e) => setAverthar(e.target.value)} className="outline-none px-5 py-2 my-2 border-2 border-gray-300 rounded-[5px]" required />
                        <div>
                            <input type="checkbox" className="me-2" />
                            <span>By clicking Register button, you agree our terms and policy,</span>
                        </div>
                        <button className=" px-5 py-2 my-2  bg-[#425a8b] text-white rounded-[5px]" onClick={(e) => signupSumbit(e)}>
                            Sign up
                        </button>
                        <p>Already have an account?<Link to={"/"}><span className="text-blue-400">Sign In</span></Link></p>
                    </div>
                </form>

                <div className="mt-10 md:w-1/4">
                    <p className=" text-2xl text-[#425a8b] font-medium">Use Social Network Account</p>
                    <div className="font-medium my-5">
                        <div onClick={handleOathu} className="w-full px-5 py-2 my-4 border-2 border-gray-300 rounded-[5px] flex gap-1 justify-center items-end ">Sign up with<img src={glogo} width="50px" /></div>
                        <div onClick={handleOathu} className="w-full  px-5 py-2 my-4 border-2 border-gray-300 rounded-[5px] flex gap-1 justify-center items-end">Sign up with<img src={alogo} width="50px" /></div>
                        <div onClick={handleOathu} className="w-full  px-5 py-2 my-4 border-2 border-gray-300 rounded-[5px] flex gap-1 justify-center items-center">Sign up with<img src={flogo} width="50px" /></div>
                    </div>

                </div>
            </div>
        </div>
    )
}

export default Signuppage