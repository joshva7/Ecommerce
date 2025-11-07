import { useEffect, useState } from "react"
import { FeatchHook } from "../Hook/FeatchHook"
import Navegationbar from "../compontes/Navegationbar"
import { Link } from "react-router-dom"
import flexicon from '../assets/flexicon.svg'
import gridicon from '../assets/gridicon.svg'
import emptybox from '../assets/nopro.jpg'
import { useCardsHook } from "../Hook/CartsHook"
const Cataousepage = () => {
    const { handleCart } = useCardsHook();
    const { data, featchdata } = FeatchHook();
    const [fliterdata, setFliterdata] = useState([]);
    const [show, setShow] = useState(10)
    const [rowss, setRowss] = useState(true)
    const filtervalue = (min, max) => {
        setFliterdata(() => data.filter((value) => value.price >= min && value.price <= max))
    }
    useEffect(() => {
        featchdata(`https://api.escuelajs.co/api/v1/products?offset=0&limit=${show}`)
    }, [show])
    const handleChange = (e) => {
        setShow(e.target.value)
    }
    useEffect(() => {
        setFliterdata(data);
    }, [data])
    console.log(!rowss);
    return (
        <div>
            <div>
                <Navegationbar />
            </div>
            <div className=" flex gap-4">
                <div className=" hidden md:block w-1/4 border-2 border-gray-300 p-4 md:ms-25 rounded-[5px] mt-5">
                    <p className=" font-semibold">Products Filter</p>
                    <div className=" font-medium">
                        <div className="flex gap-2 my-2">
                            <input type="checkbox" onClick={() => setFliterdata(data)} />
                            <p>All Prodate</p>
                        </div>
                        <div className="flex gap-2 my-2">
                            <input type="checkbox" onClick={() => filtervalue(0, 100)} />
                            <p>Free - 100</p>
                        </div>
                        <div className="flex gap-2 my-2">
                            <input type="checkbox" onClick={() => filtervalue(100, 200)} />
                            <p>100 - 200</p>
                        </div>
                        <div className="flex gap-2 my-2">
                            <input type="checkbox" onClick={() => filtervalue(200, 400)} />
                            <p>200 - 400</p>
                        </div>
                        <div className="flex gap-2 my-2">
                            <input type="checkbox" onClick={() => filtervalue(400, 600)} />
                            <p>400 - 600</p>
                        </div>
                        <div className="flex gap-2 my-2">
                            <input type="checkbox" onClick={() => filtervalue(600, 800)} />
                            <p>600 - 800</p>
                        </div>
                        <div className="flex gap-2 my-2">
                            <input type="checkbox" onClick={() => filtervalue(1000, 9999)} />
                            <p>Over 1000</p>
                        </div>
                    </div>
                </div>
                <div className=" w-11/12 border-2 mx-5 border-gray-300 me-10 p-4 rounded-[5px] mt-5">
                    <div className=" flex gap-5 justify-between mx-5">
                        <div className=" flex gap-5">
                            <p>Show</p>
                            <select onChange={handleChange} value={show}>
                                <option value={10}>10 More</option>
                                <option value={20}>20 More</option>
                                <option value={30}>30 More</option>
                                <option value={60}>60 More</option>
                            </select>
                        </div>
                        <div className=" flex w-1/2 justify-end gap-5">
                            <span className=" w-1/12 hover:cursor-pointer">
                                <img src={gridicon} onClick={() => setRowss(true)} width="20px" />
                            </span>
                            <span className=" w-1/12 hover:cursor-pointer">
                                <img src={flexicon} width="20px" onClick={() => setRowss(false)} />
                            </span>
                        </div>
                    </div>
                    {
                        rowss ? (
                            <div>
                                {
                                    fliterdata.length === 0 && (
                                        <div className=" flex flex-col items-center">
                                            <p className=" font-bold">SORRY <span className="text-red-600 font-black text-2xl">!</span></p>
                                            <p className="text-red-600 font-black text-2xl  w-fit">No Product <span className=" font-bold text-black">Found.</span></p>
                                            <div className=" w-1/4 my-5">
                                                <img src={emptybox} />
                                            </div>
                                        </div>)
                                }
                                <div className=" grid grid-cols-1 md:grid-cols-5 gap-5">
                                    {
                                        fliterdata.map((d) => {
                                            return (
                                                <div>
                                                    <div key={d.id} className="w-10/12 mx-auto md:w-full font-medium border-gray-400 border-2 p-2 mt-2 rounded-[5px]">
                                                        <Link to={`/prodate/${d.id}`}>
                                                            <img src={d.images} />
                                                            <div>
                                                            </div>
                                                            <p>{d.title.slice(0, 25)}...</p>
                                                            <div className=" flex ">
                                                                <p>Price ₹{d.price}</p>
                                                            </div>
                                                        </Link>
                                                        <button className=" bg-[#2c4370] 
                                                        text-white hover:bg-white hover:text-[#2c4370]
                                                         hover:border-2hover:border-[#2c4370] p-1  rounded-[5px]" onClick={()=>handleCart(d.id)}>Add to Cart</button>
                                                    </div>
                                                </div>
                                            )
                                        })
                                    }
                                </div>
                            </div>
                        ) : (
                            <div>
                                {
                                    fliterdata.length === 0 && (
                                        <div className=" flex flex-col items-center">
                                            <p className=" font-bold">SORRY <span className="text-red-600 font-black text-2xl">!</span></p>
                                            <p className="text-red-600 font-black text-2xl  w-fit">No Product <span className=" font-bold text-black">Found.</span></p>
                                            <div className=" w-1/4 my-5">
                                                <img src={emptybox} />
                                            </div>
                                        </div>)
                                }
                                {
                                    fliterdata.map((d) => {
                                        return (
                                            <div >
                                                <div key={d.id} className=" font-medium border-gray-400 border-2 p-2 mt-2 rounded-[5px]">
                                                    <Link to={`/prodate/${d.id}`}>
                                                        <div className="flex justify-between items-center">
                                                            <div className=" flex gap-5 w-1/2 items-center">
                                                                <div className="w-10/12 md:w-1/3">
                                                                    <img src={d.images} />
                                                                </div>
                                                                <div>
                                                                    <p>{d.title}</p>
                                                                    <p>Price ₹{d.price}</p>
                                                                </div>
                                                            </div>
                                                            <div >
                                                                <button className=" bg-[#2c4370] 
                                                                text-white hover:bg-white hover:text-[#2c4370] 
                                                                hover:border-2 hover:border-[#2c4370] px-2 py-1 
                                                                rounded-[5px]" onClick={()=>handleProid(d.id)}>Add to Cart</button>
                                                            </div>
                                                        </div>
                                                    </Link>
                                                </div>


                                            </div>
                                        )
                                    })
                                }
                            </div>
                        )
                    }

                </div>
            </div>
        </div>
    )
}

export default Cataousepage