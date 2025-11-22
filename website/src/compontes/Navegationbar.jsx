import heart from '../assets/heart.svg'
import person from '../assets/person.svg'
import cart from '../assets/cart.svg'
import { Link, useNavigate } from 'react-router-dom'
import { useLenHook } from '../Hook/LengthHook'
import { useState, useContext } from 'react'
import { Searchfiled } from './Searchfiled'
import { useSearch } from '../Hook/Searchprovider'
import { AuthContext } from '../Hook/AuthProvider'
const Navegationbar = () => {
    const { user, logout } = useContext(AuthContext)
    const navegation = useNavigate()
    const { lengthdata } = useLenHook();
    const { searchbar, filterdata } = useSearch()
    const [popupshow, setPopupshow] = useState(false);
    const [account, setAccount] = useState(false);
    const logoutfu = () => {
        setAccount(false)
        logout()
        navegation("/")
    }
    return (
        <>
            <div className=" flex justify-between px-10 py-5   bg-gray-50 border-b-2  w-full  sticky top-0 z-50">
                <div className=' flex items-baseline gap-10'>
                    <p className='font-bold text-2xl font-[RobotoBold]'>
                        <Link to={"/home"}>
                            Ecom
                        </Link>
                    </p>
                    <div className='hidden md:block font-[RobotoMedium]'>
                        <span onClick={() => setPopupshow(true)}>
                            <Searchfiled />
                        </span>
                        <span className=' mx-5 hover:cursor-pointer hover:text-yellow-500'>Flash Deals</span>
                        <span className=' mx-5 hover:cursor-pointer hover:text-yellow-500'>Top Sellers</span>
                        <span className=' mx-5 hover:cursor-pointer hover:text-yellow-500'>Special</span>
                    </div>
                </div>
                <div>
                    <ul className=" flex gap-5 mx-3">
                        <li onClick={() => setAccount(true)}>
                            {
                                user ? (
                                    <span className='w-20 h-20 '>
                                        <img src={user.avatar} className='w-8 h-8 rounded-full border-2 border-green-600 ' />
                                    </span>
                                ) : (
                                    <img src={person} width="30px" />
                                )
                            }
                        </li>
                        {
                            user && (<>
                                {
                                    account && (
                                        <div className=' fixed z-50 top-21 bg-white rounded-[5px] border-2 border-gray-400 px-6 py-5  '>
                                            <span className='block my-2' onClick={() => setAccount(false)}>
                                            <Link to={"/account"}>
                                                Myaccount
                                            </Link>
                                            </span>
                                            <span className='block my-2' onClick={logoutfu}>Logout</span>
                                            <span className='block my-2' onClick={() => setAccount(false)}>Close</span>
                                        </div>
                                    )
                                }
                            </>
                            )
                        }
                        <Link to={"/carts"}>
                            <li><img src={cart} width="30px" /></li>
                        </Link>
                        <Link to="/checkpro">
                            <li className=' relative'>
                                <img src={heart} width="30px" />
                                <span className=' absolute flex justify-center items-center top-4 rounded-2xl h-4 w-4 left-4 bg-amber-400 '>{lengthdata}</span>
                            </li>
                        </Link>
                    </ul>
                </div>
            </div>
            {
                popupshow && (
                    <div className=' hidden md:flex w-1/2 bg-gray-400  h-1/2 overflow-y-scroll fixed top-16 left-29 z-90 rounded-[5px]'>
                        <div className=' w-1/2'>
                            <p className='my-5 mx-10'>{searchbar}</p>
                            <button className='bg-white rounded-2xl px-2 py-2' onClick={() => setPopupshow(false)}>Close</button>
                        </div>
                        <div className='border-l-2 px-3 py-4 w-1/2'>
                            <p>Products for "{searchbar}"</p>
                            <div>
                                {
                                    filterdata.map((d) => {
                                        return (
                                            <>
                                                <div key={d.id} className='flex my-2 items-center gap-5 justify-between'>
                                                    <span className='w-1/5'><img src={d.images} className='rounded-[5px]' /></span>
                                                    <p className=' truncate'>
                                                        {d.title}
                                                    </p>
                                                    <Link to={`/prodate/${d.id}`}>
                                                        <span onClick={() => setPopupshow(false)} className='bg-white rounded-2xl px-2 py-2'>Click</span>
                                                    </Link>
                                                </div >
                                            </>
                                        )
                                    })

                                }
                            </div>
                        </div>
                    </div >
                )
            }
        </>
    )
}

export default Navegationbar