import { useState, useEffect, useContext, createContext } from "react";
import { FeatchHook } from "./FeatchHook";
const Seartcontext = createContext();
export const Searchprovider = ({ children }) => {
    const { data, featchdata } = FeatchHook()
    useEffect(() => {
        featchdata("https://api.escuelajs.co/api/v1/products")
    }, [])
    const [searchbar, setSearchbar] = useState("");
    const [filterdata, setFilterdata] = useState([]);
    useEffect(() => {
        if (searchbar.trim() !== "") {
            const filter = data.filter((d) => d.title.toLowerCase().includes(searchbar.toLowerCase()))
            setFilterdata(filter)
        }
        else{
            setFilterdata([])
        }
    }, [data, searchbar])
    console.log(filterdata, "Searchpro");
    return (
        <Seartcontext.Provider value={{ searchbar, setSearchbar, filterdata }}>{children}</Seartcontext.Provider>
    )
}
export const useSearch = () => useContext(Seartcontext)