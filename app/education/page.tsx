import PageHero from "@/components/PageHero";
import Reveal from "@/components/Reveal";
import {GraduationCap} from "lucide-react";

const education=[
 ["Intermediate Science General","Aisha Bawany Government Boys College","Board of Intermediate Education Karachi"],
 ["Matriculation Computer Science","The Smart School — Jamshed Road Campus","Computer Science"]
];

export default function Education(){
 return <main>
  <PageHero eyebrow="06 / Education" title="Education & learning foundation.">
   Academic background and the foundation behind my development journey.
  </PageHero>
  <section className="pb-24"><div className="container grid md:grid-cols-2 gap-5">
   {education.map(([degree,school,board],i)=><Reveal key={degree} delay={i*.08}>
    <div className="glass rounded-3xl p-8">
     <GraduationCap className="text-purple-400" size={26}/>
     <div className="mt-7 text-[10px] uppercase tracking-[.3em] text-purple-400">Education 0{i+1}</div>
     <h2 className="mt-3 text-2xl font-bold">{degree}</h2>
     <p className="mt-3">{school}</p>
     <p className="mt-2 text-sm text-[var(--muted)]">{board}</p>
    </div>
   </Reveal>)}
  </div></section>
 </main>
}