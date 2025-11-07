import {useSearch} from '../Hook/Searchprovider'
export const Searchfiled = () => {
    const {searchbar, setSearchbar}=useSearch();
    return (
        <>
            <input type='text' value={searchbar} onChange={(e) => setSearchbar(e.target.value)} placeholder='Enter the prodate' className=' 
        container border-2 p-2 rounded-[5px] w-[400px]' />
        </>
    )
}
