import { useSearch } from '../Hook/Searchprovider'
import search from '../assets/search.svg'
export const Searchfiled = () => {
    const { searchbar, setSearchbar } = useSearch();
    return (
        <>
            <span className='relative'>
                <img src={search} width="25px" className=' top-3 left-3 md:top-0 mx-auto absolute' />
                <input type='text' name='searchfiled' value={searchbar} onChange={(e) => setSearchbar(e.target.value)} placeholder='Enter the product' className=' 
        container border-2 p-2 rounded-full w-full md:w-[400px] px-10' />
            </span >
        </>
    )
}
