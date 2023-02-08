import { createContext, useContext, useEffect } from "react";
import axios from 'axios';
const AppContext = createContext();

const API  = "./event.json"

const AppProvider = ({children})=>{

    const getEvents  =async (url)=>{
const res = await axios.get(url);
const events = await res.data;
console.log(events)
    }
    useEffect(()=>{
getEvents(API);
    },[])

return <AppContext.Provider value="Aryan">
    {children}
</AppContext.Provider>

}

//custom hook --

const useProductContext  =()=>{ 
    
    return useContext(AppContext)
};

export {AppProvider,useProductContext};