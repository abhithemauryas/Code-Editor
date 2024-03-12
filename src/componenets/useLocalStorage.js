
import { useEffect } from 'react'
import { useState } from 'react'

const PREFIX='codepen-cloen'
const useLocalStorage = (key,initialvalue) => {
    const prefixedKey=PREFIX+key 

    const [value,setvalue]=useState(()=>{
        const jsonvalue=localStorage.getItem(prefixedKey);
        if(jsonvalue!=null){
            return JSON.parse(jsonvalue)
        } 
        if(typeof initialvalue==="function"){
            return initialvalue()
        }else{
            return initialvalue
        }
    })
    useEffect(()=>{
        localStorage.setItem(prefixedKey,JSON.stringify(value));
    },[prefixedKey,value])
  return [value,setvalue]
}

export default useLocalStorage
