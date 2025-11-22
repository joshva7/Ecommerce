import heart from '../assets/heart.svg'
import person from '../assets/person.svg'
import cart from '../assets/cart.svg'
const Errornavbar = () => {
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
                                            <span className='block my-2' onClick={() => setAccount(false)}><Link to={"/account"}>
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
        </>
    )
}

export default Errornavbar