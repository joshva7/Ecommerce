import Navegationbar from "../compontes/Navegationbar"
import gp from '../assets/gp.png'
import paypal from '../assets/paypal.png'
import ap from '../assets/ap.png'
import { useEffect } from "react"
import { FeatchHook } from "../Hook/FeatchHook"
import { useParams, Link, useNavigate } from "react-router-dom"
import left from '../assets/left.svg'
import right from '../assets/right.svg'
import { useCardsHook } from "../Hook/CartsHook"
import { useRef, useState } from 'react'
const Purchase = () => {
    const { data, featchdata } = FeatchHook()
    const { id } = useParams()
    const { Cartpro, Cartqte } = useCardsHook();
    const [discount, Setdiscount] = useState(Cartqte);
    const coupenref = useRef();
    const handleCoupen = () => {
        if (coupenref.current.value === "Happycodebyjoshva") {
            let coupen = discount % 10;
            Setdiscount(discount - coupen)
        }
    }
    const idpro = id
    useEffect(() => {
        featchdata(`https://api.escuelajs.co/api/v1/products/${id}`)
    }, [])
    const navegation = useNavigate();
    const handlepaymentpage=()=>{
        navegation("/*")
    }
    return (
        <div>
            <Navegationbar />
            <div className="md:flex w-full gap-2 px-5">
                <div className=" border-2 border-gray-300 p-4 md:ms-25 rounded-[5px] mt-5">
                    <div className=" flex shrink-0 gap-2 items-baseline mb-3 justify-between ">
                        <span className="w-1/3 h-15  border-2 border-gray-400 rounded-[5px] py-1 px-5"><img src={gp} width="70px" /></span>
                        <span className="w-1/3 h-15  border-2 border-gray-400 rounded-[5px] py-1 px-5"><img src={paypal} width="70px" /></span>
                        <span className="w-1/3 h-15  border-2 border-gray-400 rounded-[5px] py-1 px-5"><img src={ap} width="70px" /></span>
                    </div>
                    <span className=" mx-35 md:mx-75">OR</span>
                    <p className=" text-center md:mx-60">Contact information</p>
                    <div>
                        <input  name="purchasefiled" type="text" placeholder="Email*" className="w-full border-2 border-gray-400 p-1 my-5 rounded-[5px]" />
                        <div className=" flex gap-2">
                            <input name="purchasefiled" type="checkbox"></input>
                            <p>
                                Keep me up to date on news and exclusive offers
                            </p>
                        </div>
                        <p className=" font-bold my-1">Shipping address</p>
                        <div>
                            <div className="flex gap-5 my-2">
                                <input  name="purchasefiled" type="text" placeholder="First name*" className=" w-1/2 border-2 border-gray-400 p-1  px-2 rounded-[5px]" />
                                <input  name="purchasefiled" type="text" placeholder="Last name*" className="w-1/2 border-2 border-gray-400 p-1  px-2 rounded-[5px]" />
                            </div>
                            <input type="text" placeholder="Address 1*"  name="purchasefiled" className=" w-full border-2 border-gray-400 p-1  px-2 my-2 rounded-[5px]" />
                            <input type="text" placeholder="Address 2*"  name="purchasefiled" className=" w-full border-2 border-gray-400 p-1  px-2 rounded-[5px] my-2" />
                            <div className="flex gap-5 my-2">
                                <select className=" w-1/2 border-2 border-gray-400 p-1 rounded-[5px]">
                                    <option>Section on option</option>
                                    <option>Prodate</option>
                                </select >
                                <input type="text" placeholder="City*"  name="purchasefiled" className="w-1/2 border-2 border-gray-400 p-1  px-2 rounded-[5px]" />
                            </div>
                            <input type="text" placeholder="PostCode/ZIP*"  name="purchasefiled" className="w-full border-2 border-gray-400 p-1  px-2 my-2 rounded-[5px]" />
                            <div className="flex gap-5 my-2">
                                <input type="text" placeholder="Company name*"  name="purchasefiled" className=" w-1/2 border-2 border-gray-400 p-1 rounded-[5px]  px-2" />
                                <input type="text" placeholder="Phone*"  name="purchasefiled" className="w-1/2 border-2 border-gray-400 p-1  rounded-[5px]  px-2" />
                            </div>
                            <textarea rows="4" cols="5" className="w-full border-2 border-gray-400 p-1 my-2 rounded-[5px] px-2" placeholder="Addtital information"></textarea>
                        </div>
                    </div>
                </div>
                <div className="md:w-1/2 border-2 border-gray-300 p-4 md:me-25 rounded-[5px] mt-5">
                    <p className="font-semibold">Your Order</p>
                    {
                        idpro !== undefined ? (
                            <>
                                <div className=" flex gap-2 justify-between  items-center font-medium border-gray-400 border-2 p-2 mt-2 rounded-[5px]">
                                    <div>
                                        <img src={data.images} width="100px" />
                                    </div>
                                    <p>{data.title}</p>
                                    <p>₹{data.price}</p>
                                </div>
                                <div className=" mt-5 flex justify-between">
                                    <input type="text" placeholder="Enter your coupon"  name="purchasefiled" className=" md:w-10/12 border-2 w-min mb-2 border-gray-400 p-1 rounded-[5px]" />
                                    <button className=" bg-[#2c4370] text-white h-fit hover:bg-white hover:text-[#2c4370] hover:border-2 hover:border-[#2c4370] p-1 px-2 rounded-[5px]">Apply</button>
                                </div>
                                <div className=" mt-5 font-bold text-[#3b5384]">
                                    <div className="flex justify-between px-5 pb-2">
                                        <span>Subtotal</span>
                                        <span>{data.price}</span>
                                    </div>
                                    <div className="flex justify-between px-5 pb-2 ">
                                        <span>Shipping</span>
                                        <span>-</span>
                                    </div>
                                    <div className="flex justify-between px-5 py-2 border-t-2 border-gray-400">
                                        <span>Total</span>
                                        <span>{data.price}</span>
                                    </div>
                                </div>
                            </>
                        ) : (
                            <>
                                <div>
                                    {
                                        Cartpro.map((d) => {
                                            return (
                                                <div key={d.id} className=" flex gap-2 items-center font-medium border-gray-400 border-2 p-2 mt-2 rounded-[5px]">
                                                    <div>
                                                        <img src={d.images} width="100px" />
                                                    </div>
                                                    <div className="flex items-center justify-between w-full">
                                                        <p className="truncate w-60">{d.title}</p>
                                                        <p>{d.quantity}</p>
                                                        <p>₹{d.price}</p>
                                                    </div>
                                                </div>
                                            )
                                        })
                                    }
                                </div>
                                <div className=" mt-5 ">
                                    <input type="text" ref={coupenref}  name="purchasefiled" placeholder="Enter your coupon" className=" md:w-10/12 border-2 w-min mb-2 border-gray-400 p-1 rounded-[5px]" />
                                    <button className=" bg-[#2c4370] text-white hover:bg-white hover:text-[#2c4370] hover:border-2 hover:border-[#2c4370] p-1 px-2 rounded-[5px]" value="Happycodebyjoshva" onClick={handleCoupen}>Apply</button>
                                </div>
                                <div className=" mt-5 font-bold text-[#3b5384]">
                                    <div className="flex justify-between px-5 pb-2">
                                        <span>Subtotal</span>
                                        <span>{discount}</span>
                                    </div>
                                    <div className="flex justify-between px-5 pb-2 ">
                                        <span>Shipping</span>
                                        <span>-</span>
                                    </div>
                                    <div className="flex justify-between px-5 py-2 border-t-2 border-gray-400">
                                        <span>Total</span>
                                        <span>{discount}</span>
                                    </div>
                                </div>
                            </>
                        )
                    }
                </div>
            </div>
            <div className="md:mx-25 flex my-5 mx-4 justify-between md:w-1/3 ">
                <Link to="/home">
                    <p className=" text-blue-500 flex gap-3"><img src={left} width="20px" /> Return to Cart</p>
                </Link>
                <button onClick={handlepaymentpage} className="flex bg-[#2c4370] text-white items-center gap-2 justify-end hover:bg-white hover:text-[#2c4370] hover:border-2 hover:border-[#2c4370] p-1 md:mx-4 px-4 rounded-[5px]">
                    Place in order  <img src={right} width="20px" /></button>
            </div>
        </div >
    )
}

export default Purchase