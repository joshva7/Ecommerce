import Navegationbar from '../compontes/Navegationbar'
import { useEffect, useState } from 'react';
import { FeatchHook } from '../Hook/FeatchHook';
import { useParams } from 'react-router-dom';
import Loading from '../compontes/Loading'
import { useCardsHook } from '../Hook/CartsHook';
import { Link } from 'react-router-dom';
import heart from '../assets/heart.svg'
const Prodatepage = () => {
    const { handleCart } = useCardsHook()
    const { data, featchdata } = FeatchHook()
    useEffect(() => {
        featchdata("https://api.escuelajs.co/api/v1/products")
    }, [])
    const { id } = useParams();
    const carid = Number(id);
    const [catageory, setCatageory] = useState([]);
    useEffect(() => {
        {
            if (data && data.length > 0) {
                const values = data.filter((d) => d.category?.id === carid);
                setCatageory(values)
            }
        }
    }, [data, carid])
    return (
        <div>
            {
                data.length === 0 ? (
                    <>
                        <Loading />
                    </>
                ) : (
                    <>
                        <Navegationbar />
                        <div className='mx-5 md:mx-25 mt-5'>
                            <span className='text-2xl font-bold'>Catageory</span>
                            <span className='block text-2xl font-bold'>{catageory[carid]?.category?.name}</span>
                        </div>
                        <div className='grid grid-cols-2 px-2 md:grid-cols-5 md:mx-25 mt-5 gap-5'>
                            {
                                catageory.map((d) => {
                                    return (
                                        <div className='container border-2 md:w-50 rounded-[5px] p-2' key={d.id}>
                                            <img src={d.images} />
                                            <p className=' truncate'>{d.title}</p>
                                            <div className='group/item'>
                                                <p>Price {d.price}</p>
                                                <div className='group/edit invisible  group-hover/item:visible'>
                                                    <button ><img src={heart} width="30px" onClick={() => handleProid(d.id)} className=' hover:cursor-pointer' /></button>
                                                </div>
                                            </div>
                                            <div className='flex gap-2 mt-5'>
                                                <button className=' bg-blue-400 px-2 py-2 w-1/2 rounded-[5px]' onClick={() => handleCart(d.id)}>Cart</button>
                                                <Link to={`/purchase/${d.id}`} className=' bg-amber-400 px-2 w-1/2 rounded-[5px]'>
                                                    <button className=' bg-amber-400 px-2 w-full py-2 rounded-[5px]'>Buy</button>
                                                </Link>
                                            </div>
                                        </div>
                                    )
                                })
                            }
                        </div>
                    </>
                )
            }

        </div>
    )
}

export default Prodatepage