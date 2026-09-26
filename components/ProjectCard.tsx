"use client";
import Link from "next/link";
import {ArrowUpRight, ExternalLink} from "lucide-react";
import Reveal from "./Reveal";
import {Project} from "@/types";

export default function ProjectCard({p,i=0}:{p:Project;i?:number}){
 return <Reveal delay={i*.06}>
  <Link href={`/projects/${p.slug}`} className="group block glass rounded-2xl p-5 min-h-[275px] transition duration-500 hover:-translate-y-2 hover:border-purple-400/45 hover:shadow-2xl hover:shadow-purple-950/30">
   <div className="h-28 rounded-xl bg-gradient-to-br from-purple-900/40 via-[#100821] to-fuchsia-950/20 border border-white/5 relative overflow-hidden">
    <div className="absolute inset-0 opacity-30 bg-[radial-gradient(circle_at_70%_35%,rgba(168,85,247,.65),transparent_22%)]"/>
    <div className="absolute left-4 top-4 text-[9px] tracking-[.2em] text-purple-300">PROJECT / {String(i+1).padStart(2,"0")}</div>
    <div className="absolute right-4 bottom-4 text-purple-300"><ExternalLink size={16}/></div>
   </div>
   <div className="flex justify-between mt-5"><span className="text-[10px] uppercase tracking-widest text-purple-300">{p.category}</span><ArrowUpRight size={16} className="opacity-40 group-hover:opacity-100 group-hover:rotate-12 transition"/></div>
   <h3 className="mt-3 text-xl font-bold">{p.title}</h3>
   <p className="mt-2 text-xs leading-6 text-[var(--muted)]">{p.description}</p>
   <div className="mt-4 flex flex-wrap gap-2">{p.tech.map(t=><span key={t} className="px-2.5 py-1 rounded-full bg-purple-500/10 border border-purple-400/10 text-[9px] text-purple-200">{t}</span>)}</div>
  </Link>
 </Reveal>
}