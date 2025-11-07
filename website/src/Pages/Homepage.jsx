import Navegationbar from "../compontes/Navegationbar"
import banner from '../assets/banner2.png'
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
const Homepage = () => {
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
    return (
        <div>
            <Navegationbar />
            <div className="flex flex-col md:flex-row px-2 mt-10 gap-5">
                <div className="px-5 md:w-1/2 md:ms-25 ">
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
                <div className=" hidden md:block md:w-1/2 mx-auto">
                    <img src={banner} width="350px" className=" rounded-[10px]" />
                </div>
            </div>
            <div className=" mt-5">
                <Catageory />
                <Prodaates />
            </div>
        </div>
    )
}
export default Homepage