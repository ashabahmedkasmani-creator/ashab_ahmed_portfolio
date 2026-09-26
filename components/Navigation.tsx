"use client";
import Link from "next/link";
import {usePathname} from "next/navigation";
import {Moon,Sun,Download} from "lucide-react";
import {useTheme} from "./ThemeProvider";

const links=[["/","Home"],["/about","About"],["/skills","Skills"],["/projects","Projects"],["/experience","Experience"],["/education","Education"],["/certifications","Certifications"],["/contact","Contact"]];

export function Navigation(){
 const path=usePathname(); const {light,toggle}=useTheme();
 return <header className="fixed top-0 left-0 right-0 z-50 px-3 sm:px-4 pt-3">
  <div className="container glass rounded-2xl px-4 py-3 flex items-center gap-4">
   <Link href="/" className="font-black tracking-[.18em] whitespace-nowrap"><span className="text-purple-400 mr-2">◢</span>ASHAB</Link>
   <nav className="hidden lg:flex ml-auto gap-0.5">
    {links.map(([href,label])=><Link key={href} href={href} className={`px-3 py-2 rounded-lg text-[11px] transition ${path===href?"text-purple-300 bg-purple-500/10":"opacity-70 hover:opacity-100 hover:bg-white/5"}`}>{label}</Link>)}
   </nav>
   <div className="ml-auto lg:ml-2 flex items-center gap-2">
    <button onClick={toggle} className="glass rounded-xl p-2 hover:scale-105 transition" aria-label="Toggle theme">{light?<Moon size={16}/>:<Sun size={16}/>}</button>
    <a href="/Ashab-Ahmed-Kasmani-CV.pdf" className="hidden sm:flex items-center gap-2 rounded-xl px-4 py-2 bg-gradient-to-r from-purple-600 to-fuchsia-500 font-bold text-[11px]"><Download size={14}/> Download CV</a>
   </div>
  </div>
 </header>
}