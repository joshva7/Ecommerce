import Navegationbar from "../compontes/Navegationbar"
import slid1 from '../assets/slid1.png'
import slid2 from '../assets/slid2.png'
import slid3 from '../assets/slid3.png'
import logo1 from '../assets/logo1.png'
import logo2 from '../assets/logo2.png'
import logo3 from '../assets/logo3.png'
import logo4 from '../assets/logo4.png'
import logo5 from '../assets/logo5.png'
import logo6 from '../assets/logo6.png'
import logo7 from '../assets/logo7.png'
import logo8 from '../assets/logo8.png'
import logo9 from '../assets/logo9.png'
import logo10 from '../assets/logo10.png'
import logo11 from '../assets/logo11.png'
import logo12 from '../assets/logo12.png'
import logo13 from '../assets/logo13.png'
import logo14 from '../assets/logo14.png'
import Prodaates from "../compontes/Prodaates"
import Catageory from "../compontes/Catageory"
import Slider from "react-slick";
import Loading from '../compontes/Loading'
import { useEffect, useState } from "react"
import { useSearch } from "../Hook/Searchprovider"
import { Link, useNavigate } from "react-router-dom"
const Homepage = () => {
    const { searchbar, setSearchbar, filterdata } = useSearch();
    const logo = [logo1, logo2, logo3, logo4, logo5, logo6, logo7, logo8, logo9, logo10, logo11, logo12, logo13, logo14,]
    const configer = {
        dots: true,
        infinite: true,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
        speed: 1000,
        autoplaySpeed: 2000,
        cssEase: "linear"
    }
    const [popupshow, setPopupshow] = useState(false);
    const [loading, setLoading] = useState(true)
    useEffect(() => {
        const time = setTimeout(() => {
            setLoading(false)
        }, 1000)
        return () => clearTimeout(time);
    }, [])
    const navegation=useNavigate();
    const handleShow=(id)=>{
        navegation(`/prodate/${id}`)
    }
    return (
        <>
            {
                loading ? (
                    <div>
                        <Loading />
                    </div>
                ) : (
                    <>
                        <div>
                            <Navegationbar />
                            <div className=" visible md:invisible mt-4 px-5" onClick={() => {setPopupshow(true),navegation("/searchmobile")}}>
                                <input name="prodatesearch" type="text" onChange={(e) => setSearchbar(e.target.value)} placeholder="Enter the product..." className="container border-2 p-2 rounded-[5px]" />
                            </div>
                            <div>
                                {
                                    popupshow && (
                                        <div className='flex w-full  bg-gray-400  h-1/2 overflow-y-scroll fixed top-34  z-90 rounded-[5px]'>
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
                                                                    <div key={d.id} className='flex my-2 items-center gap-5 justify-between' onClick={()=>handleShow(d.id)}>
                                                                        <span className=' w-1/2'><img src={d.images} className='rounded-[5px]' /></span>
                                                                        <p className=' truncate'>
                                                                            {d.title}
                                                                        </p>
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
                            </div>
                            <div className="md:flex-row container w-10/12 md:w-1/2 px-3 mt-4  mx-auto">
                                <div className=" container ">
                                    <Slider {...configer} >
                                        <div>
                                            <img src={slid1} className=" rounded-[10px] " />
                                        </div>
                                        <div>
                                            <img src={slid2} className=" rounded-[10px] " />
                                        </div>
                                        <div>
                                            <img src={slid3} className=" rounded-[10px] " />
                                        </div>
                                    </Slider>
                                </div>
                            </div>
                            <div className=" mt-5">
                                <Catageory />
                                <Prodaates />
                            </div>
                        </div>
                    </>
                )
            }
        </>

    )
}
export default Homepage