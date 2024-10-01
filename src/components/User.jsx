import {createContext , useState } from "react";

export const userContext = createContext();

const userContextProvider = ({children})=>{

const [userName , setuserName] =useState("soso");
return <userContext.Provider value={userName}> 
{children}</userContext.Provider>

}


export default userContextProvider();