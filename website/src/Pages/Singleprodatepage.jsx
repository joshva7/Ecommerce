import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Navegationbar from "../compontes/Navegationbar";
import customer from '../assets/customer.svg'
import refund from '../assets/refund.svg'
import delivery from '../assets/delivery.svg'
import securepayment from '../assets/securepayment.svg'
import { Link } from "react-router-dom";
import { FeatchHook } from "../Hook/FeatchHook";
const Singleprodatepage = () => {
    const icons = [{ img: customer, para: "Support 24/7", para2: "Shop with an expert" },
    { img: refund, para: "Free Delivery", para2: "From all orders over $10" },
    { img: delivery, para: "Return & Refund ", para2: "Free return over $200" },
    { img: securepayment, para: "Secure payment", para2: "100% Protected" }]
    const { id } = useParams();
    const [count, setCount] = useState(1);
    const {data,featchdata}=FeatchHook()
    useEffect(() => {
        featchdata(`https://api.escuelajs.co/api/v1/products/${id}`)
    }, [id])    
    function decrement() {
        if (count > 1) {
            setCount(count - 1);
        }
    }
    function increment() {
        setCount(count + 1)
    }
    return (
        <div>
            <Navegationbar />
            <p className=" font-medium mx-5 md:text-2xl my-5 md:mx-25">{data.title}</p>
            <div className=" flex flex-col md:flex-row gap-5 md:mx-25 ">
                <div className=" md:w-1/4 mx-4 border-2 p-1 rounded-[5px]">
                    <img src={data.images} />
                </div>
                <div className=" md:w-1/2 mx-4">
                    <p className=" font-medium text-2xl">Price ₹{data.price}</p>
                    <p>Quantity</p>
                    <div className=" flex gap-5 items-baseline my-4">
                        <div className=" flex gap-5 border-b-4 border-gray-300">
                            <button className="px-2" onClick={() => decrement()}>-</button>
                            <p className=" text-2xl">{count}</p>
                            <button className="px-2" onClick={increment}>+</button>
                        </div>
                        <Link to={`/purchase/${id}`} className="w-full bg-gray-500 text-white font-bold py-2 rounded-[5px] hover:bg-white hover:text-gray-500 hover:border-gray-500 hover:border-2">
                            <button className="w-full">
                                Buy Now
                            </button>
                        </Link>
                    </div>
                    <div className=" bg-gray-300 p-2 rounded-[5px] md:hidden ">
                        {
                            icons.map((d, i) => {
                                return (
                                    <div key={i} className="flex gap-5 mb-5 ">
                                        <div>
                                            <img src={d.img} width="40px" />
                                        </div>
                                        <div>
                                            <p className=" font-bold">{d.para}</p>
                                            <p>{d.para2}</p>
                                        </div>
                                    </div>
                                )
                            })
                        }

                    </div>
                    <p className=" font-medium">{data.description}</p>
                </div>
                <div className=" bg-gray-300 p-4 rounded-[5px] w-fit hidden md:block ">
                    {
                        icons.map((d, i) => {
                            return (
                                <div key={i} className="flex gap-5 mb-5 ">
                                    <div>
                                        <img src={d.img} width="40px" />
                                    </div>
                                    <div>
                                        <p className=" font-bold">{d.para}</p>
                                        <p>{d.para2}</p>
                                    </div>
                                </div>
                            )
                        })
                    }

                </div>
            </div>
        </div>
    )
}

export default Singleprodatepage