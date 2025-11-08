import { useEffect } from "react";
import { FeatchHook } from "../Hook/FeatchHook"
import { Link } from "react-router-dom";
const Catageory = () => {
    const { data, featchdata } = FeatchHook();
    useEffect(() => {
        featchdata("https://api.escuelajs.co/api/v1/categories");
    }, [])
    return (
        <div>
            <span className="mx-5 md:mx-28 text-2xl font-medium">categories</span>
                <div className=' grid grid-cols-2 mx-4 md:flex gap-4 mt-3 md:gap-8 justify-around md:mx-25'>
                    {
                        data.slice(0, 5).map((d) => {
                            return (
                                <div className='border-2 md:my-5 md:w-1/5 rounded-[5px] p-2' key={d.id}>
                                    <img src={d.image} />
                                    <p className='truncate'>{d.name}</p>
                                    <Link to={`/catageory/${d.id}`} className=' '>
                                    <button className='hover:cursor-pointer bg-amber-400 px-4 py-2 w-full my-2 rounded-[5px]'>Click</button></Link>
                                </div>
                            )
                        })
                    }
                </div>
        </div>
    )
}

export default Catageory