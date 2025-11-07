import Navegationbar from "../compontes/Navegationbar"
import bin from '../assets/bin.svg'
import { useProData } from "../Hook/Prodatehook"
import { FeatchHook } from "../Hook/FeatchHook"
import { useEffect, useState } from "react"
import { useLenHook } from '../Hook/LengthHook'
import cart from '../assets/cart.png'
import bag from '../assets/bag.svg'
import { Link } from "react-router-dom"
import Loading from "../compontes/Loading"
import { useCardsHook } from "../Hook/CartsHook"
const Likepage = () => {
    const { handleCart } = useCardsHook()
    const { Lengthmethod } = useLenHook()
    const { proid, removepro } = useProData();
    const { data, featchdata } = FeatchHook();
    const [items, setItems] = useState([]);
    useEffect(() => {
        featchdata("https://api.escuelajs.co/api/v1/products")
    }, [])
    useEffect(() => {
        if (data && data.length > 0) {
            const newlist = Array.isArray(proid)
                ? data.filter((item) => proid.includes(item.id))
                : data.filter((item) => item.id === proid);
            setItems(newlist)
        }
    }, [data, proid])
    const handleDlt = (id) => {
        removepro(id);
    }
    Lengthmethod(items.length);
    return (
        <div>
            {
                data.length == 0 ? (
                    <Loading />
                ) : (
                    <>
                        <Navegationbar />
                        <div className=" font-medium text-2xl md:w-10/12 flex justify-between mt-5 mx-5 md:mx-25 bg-gray-300 py-2 px-4 rounded-[5px]">
                            <p>Product</p>
                            <div className="hidden md:flex gap-12">
                                <p>Price</p>
                                <p>Action</p>
                                <p>Remove</p>
                            </div>
                        </div>
                        {
                            items.length == 0 ? (
                                <div className=" flex flex-col items-center">
                                    <img src={cart} width="350px" />
                                    <p className="text-2xl md:text-4xl mx-25 my-5 font-bold">Your favorite items is <span className=" text-red-600">Empty!</span></p>
                                    <p>Must add items on the cart befoure you proceed to check out.</p>
                                    <Link to="/home">
                                        <button className=" gap-2 px-4 py-2 bg-red-600 font-bold text-white rounded-4xl my-5 flex"><img src={bag} width="20px" /> Return to Shop</button>
                                    </Link>
                                </div>
                            ) : (
                                <div className=" w-full">
                                    {
                                        items.map((d) => {
                                            return (
                                                <>
                                                    <div className="mx-5 flex md:flex md:w-10/12 justify-between md:mx-25 font-medium border-gray-400 border-2 p-2 mt-2 rounded-[5px]" key={d.id}>
                                                        <img src={d.images} width="90px" className="md:hidden" />
                                                        <div className="hidden md:flex gap-2 w-1/2 md:gap-5 items-center" key={d.id}>
                                                            <img src={d.images} width="90px" />
                                                            <p className=" text-nowrap">{d.title}</p>
                                                        </div>
                                                        <div className="w-full mx-5">
                                                            <p className="md:hidden text-nowrap">{d.title}</p>
                                                            <div className="flex md:w-full
                                                             md:justify-end md:gap-18 gap-4 items-center mt-4 md:mt-5">
                                                                <span className="my-auto">₹{d.price}</span>
                                                                <button className=" border-2 border-gray-400 py-1 hover:bg-gray-700 
                                                            hover:text-white px-1 rounded-[5px] h-10" onClick={() => handleCart(d.id)}>Add to cart</button>
                                                                <img src={bin} width="25px" onClick={() => handleDlt(d.id)} />
                                                            </div>
                                                        </div>
                                                    </div>
                                                </>
                                            )
                                        })
                                    }
                                </div>
                            )
                        }
                    </>
                )
            }

        </div>
    )
}

export default Likepage