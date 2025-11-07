import { useContext, createContext, useState } from "react"
const Carthook = createContext()
export const CartsHook = ({ children }) => {
    const [Cartid, setCartid] = useState([]);
    const [Cartpro,setCartpro]=useState([]);
    const [Cartqte,setCartqte]=useState([]);
    const handleCartpro=(value)=>{
            setCartpro(value)
    }
    const handleCartqte=(value)=>{
            setCartqte(value)
    }
    const handleCart = (id) => {
        setCartid((prev) => {
            if (prev.includes(id)) {
                return prev;
            }
            return [...prev, id]
        })
    }
    const handleRemovecart = (id) => {
        setCartid((prev)=>prev.filter((items)=>items!==id))
    }
    return (
        <Carthook.Provider value={{ Cartid,Cartpro, Cartqte,handleCart, handleRemovecart,handleCartpro,handleCartqte }}>{children}</Carthook.Provider>
    )
}
export const useCardsHook = () => useContext(Carthook)