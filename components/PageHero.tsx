import Starfield from "./Starfield";
export default function PageHero({eyebrow,title,children}:{eyebrow:string;title:string;children?:React.ReactNode}){
 return <section className="relative pt-36 pb-20 overflow-hidden">
  <Starfield/>
  <div className="absolute left-1/3 top-20 w-80 h-80 rounded-full bg-purple-700/15 blur-[110px]"/>
  <div className="container relative">
   <div className="text-[10px] uppercase tracking-[.35em] text-purple-400 mb-4">{eyebrow}</div>
   <h1 className="text-5xl md:text-7xl font-black tracking-tight gradient-text max-w-5xl">{title}</h1>
   {children&&<p className="mt-6 text-base md:text-lg text-[var(--muted)] max-w-3xl leading-8">{children}</p>}
  </div>
 </section>
}