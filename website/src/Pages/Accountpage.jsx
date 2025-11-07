import Navegationbar from "../compontes/Navegationbar"
import { useContext, useState } from "react"
import { AuthContext } from '../Hook/AuthProvider'
const Accountpage = () => {
    const { user,update } = useContext(AuthContext);
    console.log(user);
    const [accountpg, setAccountpg] = useState(true)
    const [updatepg, setupdatepg] = useState(false)
    const [name,setName]=useState('')
    const [email,setEmail]=useState('')
    const [password,setPassword]=useState('')
    const handleupdate=(id)=>{
        if(!email||!password||!name){
            alert("enter the all filed")
            return;
        }
        update(name,email,password,id)
    }
    return (
        <>
            {!user ? (<p>loading..</p>): (
                <div>
                <Navegationbar />
            <div className=" mt-10 mx-5 md:ms-5 md:flex">
                {user && (
                    <div>
                        <div className="mx-auto text-center w-50">
                            <img src={user.avatar} className="w-50 h-50 rounded-full" />
                            <span className="pt-2  text-2xl">{user.name}</span>
                        </div>
                        <div className="flex flex-col gap-4 mt-2 bg-gray-500  md:w-50 px-5 py-5 rounded-[5px] font-medium">
                            <span onClick={() => { setAccountpg(true), setupdatepg(false) }}>Account</span>
                            <span onClick={() => { setupdatepg(true), setAccountpg(false) }}>Update</span>
                            <span>Delete Account</span>
                        </div>
                    </div>
                )}
                {
                    accountpg && (
                        <div className="flex flex-col gap-4 md:mx-25 my-5">
                            <span className="text-2xl font-bold">Account</span>
                            <span className="font-bold">Username:</span>
                            <span>{user.name}</span>
                            <span className="font-bold">Email:</span>
                            <span>{user.email}</span>
                            <span className="font-bold">Password</span>
                            <span>{user.password}</span>
                        </div>
                    )
                }
                {
                    updatepg && (
                        <div className="flex flex-col gap-4 md:mx-25 my-5 w-full">
                            <span className="text-2xl font-bold">Update</span>
                            <span className="font-bold">Username:</span>
                            <input placeholder="Update username" onChange={(e)=>setName(e.target.value)} type="text" className="outline-none px-5 py-2 border-2 border-gray-300 rounded-[5px]" />
                            <span className="font-bold">Email:</span>
                            <input placeholder="Update Email" onChange={(e)=>setEmail(e.target.value)}  type="text" className="outline-none px-5 py-2 border-2 border-gray-300 rounded-[5px]" />
                            <span className="font-bold">Password</span>
                            <input placeholder="Update Password" onChange={(e)=>setPassword(e.target.value)} type="text" className="outline-none px-5 py-2 border-2 border-gray-300 rounded-[5px]" />
                            <button className=" px-5 py-2 my-2  bg-[#425a8b] text-white rounded-[5px]" onClick={()=>handleupdate(user.id)}>Update</button>
                        </div>
                    )
                }
            </div>
        </div >
        )}
           
        </>
    )
}

export default Accountpage