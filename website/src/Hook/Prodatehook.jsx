import { useContext, createContext, useState } from "react"
const ProContext = createContext();
export const Prodatehook = ({children }) => {
    const [proid, setProid] = useState([]);
    const handleProid = (id) => {
        setProid((prev)=>{
            if(prev.includes(id)){
                return prev;
            }
            return[...prev,id]
        });
    }
    const removepro=(id)=>{
        setProid((prev)=>prev.filter((items)=>items!==id))
    }
    console.log(proid);
    return (
        <ProContext.Provider value={{ proid, handleProid,removepro }}>
            {children}
        </ProContext.Provider>
    )
}
export const useProData = () => useContext(ProContext);

