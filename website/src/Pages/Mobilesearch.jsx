import { Searchfiled } from "../compontes/Searchfiled"
import left from '../assets/left.svg'
import { useSearch } from "../Hook/Searchprovider"
import { useNavigate } from "react-router-dom"
const Mobilesearch = () => {
    const { setSearchbar, filterdata } = useSearch()
    const navgation = useNavigate()
    const handleNav = (id) => {
        navgation(`/prodate/${id}`)
        setSearchbar("")
    }
    return (
        <div>
            <div className="flex justify-baseline my-5 gap-6 items-center mx-4">
                <span className="w-8" onClick={() => { navgation("/Home"), setSearchbar("") }}><img src={left} /></span>
                <Searchfiled />
            </div>
            <div>
                <div>
                    {
                        filterdata.map((d) => {
                            return (
                                <div key={d.id} className='flex my-3 px-2 items-center justify-baseline gap-5 font-[RobotoMedium]'>
                                    <span className='w-1/5' onClick={() => handleNav(d.id)}><img src={d.images} className='rounded-[5px]' /></span>
                                    <p className=' truncate' onClick={() => handleNav(d.id)}>
                                        {d.title}
                                    </p>
                                </div>
                            )
                        })
                    }
                </div>
            </div>
        </div>
    )
}

export default Mobilesearch