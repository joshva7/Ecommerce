import Navegationbar from '../compontes/Navegationbar'
import bin from '../assets/bin.svg'
import bag from '../assets/bag.svg'
import emcart from '../assets/emcart.png'
import { useCardsHook } from '../Hook/CartsHook'
import { useEffect, useState } from 'react'
import { FeatchHook } from '../Hook/FeatchHook'
import { Link } from 'react-router-dom'
import Loading from '../compontes/Loading'
const Carts = () => {
    const { Cartid, handleRemovecart, handleCartpro, handleCartqte } = useCardsHook();
    const { data, featchdata, } = FeatchHook();
    const [carts, setCarts] = useState([]);
    const total = carts.reduce((sum, v) => sum + v.price * v.quantity, 0)
    useEffect(() => {
        featchdata("https://api.escuelajs.co/api/v1/products")
    }, [])
    useEffect(() => {
        if (data && data.length > 0) {
            const newlist = Array.isArray(Cartid)
                ? data.filter((d) => Cartid.includes(d.id))
                : data.filter((d) => d.id === Cartid)
            setCarts(newlist);
            const listWithQty = newlist.map(item => ({
                ...item,
                quantity: item.quantity || 1
            }))
            setCarts(listWithQty)
            handleCartpro(newlist)
        }

    }, [data, Cartid])
    handleCartqte(total)
    function decrement(id) {
        setCarts(prev =>
            prev.map(item =>
                item.id === id && item.quantity > 1
                    ? { ...item, quantity: item.quantity - 1 }
                    : item
            )
        )
    }
    function increment(id) {
        setCarts(prev =>
            prev.map(item =>
                item.id === id
                    ? { ...item, quantity: item.quantity + 1 }
                    : item
            )
        )
    }
    return (
        <div>
            <div>
                {
                    data.length == 0 ? (
                        <Loading />
                    ) : (
                        <>
                            <Navegationbar />
                            <div className='md:flex items-baseline'>
                                <div className=' md:w-10/12'>
                                    <div className='gap-5 h-fit font-medium text-2xl flex justify-between mt-5 mx-5 md:mx-25 bg-gray-300 py-2 px-4 rounded-[5px]'>
                                        <p>Product</p>
                                        <div className="hidden md:flex md:gap-12">
                                            <p>Unit Price</p>
                                            <p>Quantity</p>
                                            <p>Subtotal</p>
                                            <p>Remove</p>
                                        </div>
                                    </div>
                                    <div className='mx-5 md:mx-25'>
                                        <div className="">
                                            {carts.length !== 0 ?
                                                (<>{
                                                    carts.map((d) => {
                                                        return (
                                                            <div key={d.id} className=' md:flex justify-between mx-auto md:w-full font-medium border-gray-400 border-2 p-2 mt-2 rounded-[5px]'>
                                                                <div className='flex gap-2 w-80 '>
                                                                    <img src={d.images} width="70px" />
                                                                    <div>
                                                                        <p className=' truncate text-wrap md:text-nowrap'>{d.title}</p>
                                                                        <div className='flex md:hidden items-center gap-2'>
                                                                            <div>
                                                                                <p>${d.price}</p>
                                                                            </div>
                                                                            <div className=' flex gap-2 border-b-2 border-gray-500'>
                                                                                <button className="px-2" onClick={() => decrement(d.id)}>-</button>
                                                                                <p className=" text-2xl">{d.quantity}</p>
                                                                                <button className="px-2" onClick={() => increment(d.id)}>+</button>
                                                                            </div>
                                                                            <div>
                                                                                <p>${d.price * d.quantity}</p>
                                                                            </div>
                                                                            <button className=" " onClick={() => handleRemovecart(d.id)}><img src={bin} width="20px" /></button>
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                                <div className='hidden md:flex justify-between space-x-5 items-center me-4'>
                                                                    <div>
                                                                        <p>${d.price}</p>
                                                                    </div>
                                                                    <div className=' flex gap-2 md:gap-5 md:border-b-4 border-b-2 border-gray-500'>
                                                                        <button className="px-2" onClick={() => decrement(d.id)}>-</button>
                                                                        <p className=" text-2xl">{d.quantity}</p>
                                                                        <button className="px-2" onClick={() => increment(d.id)}>+</button>
                                                                    </div>
                                                                    <div>
                                                                        <p>${d.price * d.quantity}</p>
                                                                    </div>
                                                                    <div>
                                                                    <button className=" w-6" onClick={() => handleRemovecart(d.id)}><img src={bin} width="40px" /></button>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        )
                                                    })}

                                                </>
                                                )
                                                : (
                                                    <div className=" flex flex-col items-center">
                                                        <img src={emcart} width="350px" />
                                                        <p className="text-2xl flex md:text-4xl md:mx-25 my-5 font-bold gap-2">Your Cart is <span className=" text-red-600"> Empty!</span></p>
                                                        <p className=''>Must add items on the cart befoure you proceed to check out.</p>
                                                        <Link to="/home">
                                                            <button className=" gap-2 px-4 py-2 bg-red-600 font-bold text-white rounded-4xl my-5 flex"><img src={bag} width="20px" /> Return to Shop</button>
                                                        </Link>
                                                    </div>
                                                )
                                            }
                                        </div>

                                    </div>
                                </div>
                                <div className='mt-5 md:w-1/4 flex flex-col gap-2 font-medium border-2 border-gray-300 md:me-15 mx-5 md:mx-0 py-2 px-4 rounded-[5px] '>
                                    <div className=" border-b-2 pb-2 flex justify-between border-gray-300">
                                        <span>Subtotal</span>
                                        <span>price</span>
                                    </div >
                                    <div className=" border-b-2 pb-2 flex justify-between border-gray-300">
                                        <span>Shipping</span>
                                        <span>Free</span>
                                    </div>
                                    <div className=" border-b-2 pb-2 flex justify-between border-gray-300">
                                        <span>Estimate for</span>
                                        <span>India</span>
                                    </div>
                                    <div className=" border-b-2 pb-2 flex justify-between border-gray-300">
                                        <span>Total</span>
                                        <span>{total}</span>
                                    </div>
                                    <Link to={"/purchase"}>
                                        <button className='bg-[#2c4370] rounded-[5px] py-1 px-4 my-2 text-white'>Proceed to CheckOut</button>
                                    </Link>
                                </div>
                            </div>
                        </>

                    )
                }
            </div>

        </div>
    )
}

export default Carts