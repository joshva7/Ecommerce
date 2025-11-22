import { Link, useNavigate } from 'react-router-dom';
import { useEffect, useState } from 'react'
import { useProData } from '../Hook/Prodatehook';
import heart from '../assets/heart.svg'
import { useCardsHook } from '../Hook/CartsHook';
import { FeatchHook } from '../Hook/FeatchHook';
const Prodaates = () => {
    const { handleProid } = useProData();
    const { handleCart } = useCardsHook()
    const navegation = useNavigate();
    const { data, featchdata } = FeatchHook()
    useEffect(() => {
            featchdata("https://api.escuelajs.co/api/v1/products")
    }, [])
    const handleProdatesumbit = (id) => {
        navegation(`/prodate/${id}`)
    }
    return (
        <div>
            <div className=' flex my-2 mx-5 justify-between md:mx-25'>
                <p className='font-[RobotoBold] text-2xl'>Product</p>
                <p className='font-[RobotoBold] text-2xl md:me-20'><Link to="/cataouse">More</Link></p>
            </div>
            <div className='grid grid-cols-2 mx-4 md:flex gap-3 md:gap-8 justify-around md:mx-25 '>
                {
                    data.slice(0, 5).map((d) => {
                        return (
                            <div className='border-2 mt-2 md:my-5 md:w-1/5 rounded-[5px] p-2' key={d.id}>
                                <img src={d.images} className='h-fit w-full' />
                                <p className='truncate'>{d.title}</p>
                                <div className=' flex  justify-between group/item'>
                                    <p>Price ₹{d.price}</p>
                                    <div className='group/edit md:invisible  md:group-hover/item:visible'>
                                        <button ><img src={heart} width="30px" onClick={() => handleProid(d.id)} className=' hover:cursor-pointer' /></button>
                                    </div>
                                </div>
                                <div className=' flex justify-between w-full gap-2'>
                                    <button className='hover:cursor-pointer  px-4 py-2 w-1/2 rounded-[5px] text-center bg-amber-400 '
                                        onClick={() => handleProdatesumbit(d.id)}>
                                        Click
                                    </button>
                                    <button className=' bg-blue-500 px-4 w-1/2 py-2 rounded-[5px]' onClick={() => handleCart(d.id)}>Cart</button>
                                </div>
                            </div>
                        )
                    })
                }
            </div>
        </div >
    )
}

export default Prodaates