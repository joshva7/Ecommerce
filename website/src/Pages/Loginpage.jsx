import loginimg from '../assets/login.svg'
import { Link, useNavigate } from "react-router-dom"
import React, { useContext, useEffect, useState } from "react";
import { AuthContext } from "../Hook/AuthProvider";
import { FeatchHook } from "../Hook/FeatchHook";
const Loginpage = () => {
    const navegation = useNavigate();
    const { axiosInstance, user, login } = useContext(AuthContext);
    const [profile, setProfile] = useState(user)
    const { data, featchdata } = FeatchHook()
    useEffect(() => {
        if (!axiosInstance) return;
        axiosInstance
            .get("https://api.escuelajs.co/api/v1/auth/profile")
            .then(r => setProfile(r.data))
            .catch(e => console.error("Profile error:", e));
    }, [axiosInstance]);

    fetch("https://api.escuelajs.co/api/v1/auth/profile", {
        headers: {
            Authorization: `Bearer ${localStorage.getItem("accessToken")}`
        }
    }).then(r => r.json());
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    useEffect(() => {
        featchdata("https://api.escuelajs.co/api/v1/users");
    }, [])
    const loginsumbit = async () => {
        const user = data.find((d) => d.email === email && d.password === password)
        if (!user) {
            alert("Incorrect email or password");
            return;
        }
        if (!email || !password) {
            alert("Please fill all fields before submitting")
            return
        }
        await login(email, password)
        alert("Login successfully")
        navegation("/home")

    }
    return (
        <div className='md:grid grid-cols-2 w-full items-center'>
            <div className="text-gray-500 mx-5 md:mx-25 mt-15 md:w-full">
                <span className=" text-3xl text-[#425a8b] font-bold">Member  Login</span>
                <span className="block mb-4">Welcome back {profile?.name} !</span>
                <p className="font-medium mt-2">Email*</p>
                <input name='emailfiled' placeholder="Joshva@gmail.com*" onChange={(e) => setEmail(e.target.value)} type="text" className="w-full px-5 py-2 my-2 border-2 focus:border-[#425a8b] transition duration-500 outline-none border-gray-300 rounded-[5px] md:w-1/2  text-black" />
                <span className="font-medium block mt-2">Password</span>
                <input name="password" placeholder="*******************" type="text" onChange={(e) => setPassword(e.target.value)} className="w-full px-5 py-2 my-2 border-2 focus:border-[#425a8b]
                 text-black transition duration-500 outline-none border-gray-300 rounded-[5px] md:w-1/2" />
                <div className=" block my-2">
                    <input type="checkbox" name='checkbox' className=" peer-[1]: me-2" />
                    <span className=" inline">Remember me</span>
                </div>
                <button className="w-full block px-5 py-2 my-4 hover:text-[#425a8b] hover:bg-white hover:border-2 outline-0 duration-500 
                hover:border-[#425a8b] bg-[#425a8b] text-white rounded-[5px] md:w-1/2 font-bold" onClick={loginsumbit}>Sign In</button>
                <p>Have not an account?<Link to={"/signup"}><span className="text-[#425a8b]"> Sign Up</span></Link></p>
            </div>
            <div className='mt-20 hidden md:block'>
                <img src={loginimg} />
            </div>
        </div>
    )
}

export default Loginpage