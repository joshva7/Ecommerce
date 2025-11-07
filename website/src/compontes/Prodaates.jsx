import { Link } from 'react-router-dom';
import { useEffect, useState } from 'react'
import { useProData } from '../Hook/Prodatehook';
import heart from '../assets/heart.svg'
const Prodaates = () => {
    const { handleProid } = useProData();
    const [pro, setPro] = useState([]);
    useEffect(() => {
        async function Handlefeaatch() {
            try {
                await fetch("https://api.escuelajs.co/api/v1/products")
                    .then((d) => d.json())
                    .then((d) => { setPro(d) })
                    .catch((e) => console.log(e))
            } catch (e) {
                console.log(e);
            }
        }
        Handlefeaatch();
    }, [])
    return (
        <div>
            <div className=' flex my-3 mx-5 justify-between md:mx-25'>
                <p className='font-bold text-2xl'>Prodates</p>
                <p className='font-bold text-2xl md:me-20'><Link to="/cataouse">More</Link></p>
            </div>
            <div className='grid grid-cols-2 mx-4 md:flex gap-2 md:gap-8 justify-around md:mx-25 '>
                {
                    pro.slice(0, 5).map((d) => {
                        return (
                            <div className='border-2 my-5 md:w-1/5 rounded-[5px] p-2' key={d.id}>
                                <img src={d.images} />
                                <p className='truncate'>{d.title}</p>
                                <div className=' flex justify-between group/item'>
                                    <p>Price ₹{d.price}</p>
                                    <div className='group/edit invisible  group-hover/item:visible'>
                                        <button ><img src={heart} width="30px" onClick={() => handleProid(d.id)} className=' hover:cursor-pointer' /></button>
                                    </div>
                                </div>
                                <div className=' flex justify-between w-full gap-2'>
                                    <Link to={`/prodate/${d.id}`} className='bg-amber-400  w-1/2 px-4 py-2  rounded-[5px]' >
                                        <span className='hover:cursor-pointer w-full px-4 py-2  rounded-[5px] text-center'>
                                            Click
                                        </span>
                                    </Link>

                                    <button className='w-1/2 bg-blue-500 px-4 py-2 rounded-[5px] '>Cart</button>

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