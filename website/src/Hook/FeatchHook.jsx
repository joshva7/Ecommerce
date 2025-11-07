import { useEffect, useState } from "react"
export const FeatchHook = () => {
    const [data,setData]=useState([])
        const featchdata=async(url)=>{
            try{
               await fetch(url)
                .then((d)=>d.json())
                .then((d)=>setData(d))
                .catch((err)=>console.log(err))
            }
            catch(e){
                console.log(e)
            }
        }
    return {data,featchdata};
}
