import { useContext,createContext,useState } from "react"
const Lengthdata=createContext()
export const LengthHook = ({children}) => {
    const [lengthdata,setLengthdata]=useState(0);
    const Lengthmethod=(val)=>{
        setLengthdata(val);
    }
  return (
    <Lengthdata.Provider value={{lengthdata,Lengthmethod}}>
        {children}
    </Lengthdata.Provider>
)
}
export const useLenHook =()=>useContext(Lengthdata)