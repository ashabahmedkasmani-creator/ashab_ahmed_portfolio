 "use client";
import {createContext,useContext,useEffect,useState} from "react";
const C=createContext({light:false,toggle:()=>{}});
export function ThemeProvider({children}:{children:React.ReactNode}){
 const [light,setLight]=useState(false);
 useEffect(()=>{const saved=localStorage.getItem("theme"); if(saved==="light"){setLight(true);document.documentElement.classList.add("light")}},[]);
 const toggle=()=>{setLight(v=>{const n=!v;document.documentElement.classList.toggle("light",n);localStorage.setItem("theme",n?"light":"dark");return n})};
 return <C.Provider value={{light,toggle}}>{children}</C.Provider>
}
export const useTheme=()=>useContext(C);