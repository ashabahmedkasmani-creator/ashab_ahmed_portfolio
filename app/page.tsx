import Image from "next/image";
import Link from "next/link";
import {
  ArrowRight, ArrowUpRight, Briefcase, Code2, Database, Download, Github,
  GraduationCap, Layers3, Linkedin, Mail, MapPin, Phone, Rocket, Sparkles,
  Terminal, Wrench, CheckCircle2, ExternalLink
} from "lucide-react";
import Starfield from "@/components/Starfield";
import Reveal from "@/components/Reveal";
import ProjectCard from "@/components/ProjectCard";
import { certifications, experience, projects, site, skills } from "@/data/site";

const stack = [
  ["PHP","Backend"],["Laravel","Framework"],["React.js","Frontend"],["Python","Language"],
  ["Flask","Backend"],["FastAPI","API"],["WordPress","CMS"],["NumPy","Data"],["Pandas","Data"]
];

const skillGroups = [
  { title: "Frontend", icon: Code2, items: skills.frontend },
  { title: "Backend", icon: Database, items: skills.backend },
  { title: "Data & AI", icon: Sparkles, items: skills.data },
  { title: "CMS & Engineering", icon: Layers3, items: [...skills.cms, ...skills.engineering] },
];

const services = [
  ["01", "Web Development", "Responsive web applications with practical frontend and backend workflows."],
  ["02", "UI / UX Implementation", "Clean, modern interfaces with responsive layouts and polished interactions."],
  ["03", "API Integration", "REST API workflows, backend services and database-connected applications."],
  ["04", "Python & Data", "Flask, FastAPI, NumPy, Pandas, data analysis and ML experimentation."],
];

const education = [
  ["Intermediate Science General", "Aisha Bawany Government Boys College", "Board of Intermediate Education Karachi"],
  ["Matriculation Computer Science", "The Smart School — Jamshed Road Campus", "Computer Science"],
];

export default function Home() {
  return (
    <main className="portfolio-home">
      <section className="hero-reference relative min-h-[calc(100vh-74px)] overflow-hidden flex items-center pt-24 pb-24">
        <Starfield />
        <div className="hero-orb hero-orb-left" />
        <div className="hero-orb hero-orb-right" />
        <div className="container relative z-10">
          <div className="grid lg:grid-cols-[.92fr_1.08fr] gap-8 xl:gap-12 items-center">
            <Reveal>
              <div className="status-pill">
                <span className="status-dot" /> Available for Opportunities
              </div>
              <p className="hero-kicker mt-7">Junior Full Stack Developer</p>
              <h1 className="hero-title mt-3">
                Hi, I&apos;m<br /><span>ASHAB</span>
              </h1>
              <h2 className="hero-role">Full Stack Developer</h2>
              <p className="hero-copy">
                I build modern web applications with clean code, practical solutions
                and a passion for technology. Turning ideas into real, functional products.
              </p>
              <div className="hero-actions">
                <Link href="/projects" className="primary-btn">View My Projects <ArrowRight size={17}/></Link>
                <a href={site.cv} className="secondary-btn"><Download size={16}/> Download CV</a>
              </div>
              <div className="hero-socials">
                <a href={site.github} aria-label="GitHub"><Github size={17}/></a>
                <a href={site.linkedin} aria-label="LinkedIn"><Linkedin size={17}/></a>
                <a href={`mailto:${site.email}`} aria-label="Email"><Mail size={17}/></a>
                <a href={`tel:${site.phone.replace(/\s/g,"")}`} aria-label="Phone"><Phone size={17}/></a>
              </div>
            </Reveal>

            <Reveal delay={.12}>
              <div className="hero-photo-wrap">
                <div className="hero-ring" />
                <div className="hero-photo">
                  <Image
                    src="/images/ashab-profile.png"
                    alt="Ashab Ahmed Kasmani"
                    fill priority
                    sizes="(max-width: 1024px) 90vw, 650px"
                    className="object-cover object-[50%_8%]"
                  />
                  <div className="hero-photo-fade" />
                </div>
                <div className="hero-contact-card glass">
                  <div className="hero-contact-row"><MapPin size={16}/><span>Karachi, Pakistan</span></div>
                  <div className="hero-contact-row"><Phone size={16}/><span>{site.phone}</span></div>
                  <div className="hero-contact-row"><Mail size={16}/><span>{site.email}</span></div>
                </div>
                <div className="hero-note">Let&apos;s Build<br/>Something Great <ArrowUpRight size={24}/></div>
              </div>
            </Reveal>
          </div>
        </div>
        <div className="wave-divider"><span/><span/><span/></div>
      </section>

      <section className="section-dark py-24 md:py-28">
        <div className="container">
          <div className="grid lg:grid-cols-[.9fr_1.1fr] gap-14 items-center">
            <Reveal>
              <p className="section-label">About Me</p>
              <h2 className="section-title">Who I Am</h2>
              <p className="section-copy">
                I&apos;m a junior web developer with foundations in modern web development,
                database management, system architecture and analytical problem solving.
                I enjoy building practical, user-friendly applications and learning new technologies.
              </p>
              <Link href="/about" className="outline-btn mt-7 inline-flex">Learn More <ArrowRight size={16}/></Link>
              <div className="mini-stats">
                <div><b>2025</b><span>Experience Start</span></div>
                <div><b>06</b><span>Portfolio Projects</span></div>
                <div><b>15+</b><span>Core Technologies</span></div>
              </div>
            </Reveal>
            <Reveal delay={.1}>
              <div className="about-visual">
                <div className="about-code-card glass">
                  <div className="code-icon">&lt;/&gt;</div>
                  <div className="code-points">
                    <span><Sparkles size={13}/> Clean Code</span>
                    <span><Sparkles size={13}/> Problem Solving</span>
                    <span><Sparkles size={13}/> Continuous Learning</span>
                    <span><Sparkles size={13}/> Build for Impact</span>
                  </div>
                </div>
                <div className="floating-cube cube-one"/>
                <div className="floating-cube cube-two"/>
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      <section className="section-dark border-top py-20">
        <div className="container">
          <Reveal>
            <p className="section-label">Tech Stack</p>
            <h2 className="section-title">Technologies I Work With</h2>
            <p className="section-copy small">Tools and technologies I use across my web development and programming work.</p>
          </Reveal>
          <div className="stack-grid mt-10">
            {stack.map(([name,type]) => (
              <div key={name} className="stack-card glass">
                <div className="stack-mark">{name.slice(0,1)}</div>
                <b>{name}</b>
                <span>{type}</span>
              </div>
            ))}
          </div>
          <div className="mt-8 flex justify-center">
            <Link href="/skills" className="text-sm text-purple-300 hover:text-white transition">View complete tech stack <ArrowRight className="inline ml-1" size={15}/></Link>
          </div>
        </div>
      </section>

      <section className="section-dark py-24 md:py-28">
        <div className="container">
          <Reveal>
            <div className="section-head-row">
              <div>
                <p className="section-label">Featured Projects</p>
                <h2 className="section-title">My Latest Projects</h2>
                <p className="section-copy small">A collection of my development work across Laravel, WordPress, React, Core PHP, Python and Flask.</p>
              </div>
              <Link href="/projects" className="view-all">View All Projects <ArrowRight size={15}/></Link>
            </div>
          </Reveal>
          <div className="grid md:grid-cols-2 xl:grid-cols-3 gap-5 mt-10 project-reference-grid">
            {projects.map((p,i)=><ProjectCard key={p.slug} p={p} i={i}/>)}
          </div>
        </div>
      </section>

      <section className="section-dark py-24">
        <div className="container">
          <Reveal>
            <div className="services-head">
              <div><p className="section-label">What I Can Build</p><h2 className="section-title">My Services</h2><p className="section-copy small">Practical development capabilities based on my skills and projects.</p></div>
              <Link href="/contact" className="outline-btn">Let&apos;s Work Together <ArrowUpRight size={16}/></Link>
            </div>
          </Reveal>
          <div className="grid sm:grid-cols-2 xl:grid-cols-4 gap-4 mt-10">
            {services.map(([n,t,d]) => (
              <Reveal key={n}>
                <div className="service-card glass">
                  <div className="service-icon">{n}</div>
                  <h3>{t}</h3><p>{d}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="section-dark py-24">
        <div className="container grid lg:grid-cols-2 gap-5">
          <Reveal><div className="content-card glass h-full">
            <div className="card-label"><Briefcase size={17}/> Experience</div>
            {experience.map(e=><div key={e.period} className="timeline-item"><span>{e.period}</span><h3>{e.title}</h3><b>{e.company}</b><p>{e.description}</p></div>)}
            <Link href="/experience" className="text-purple-300 text-sm">Full Experience <ArrowRight className="inline ml-1" size={15}/></Link>
          </div></Reveal>
          <Reveal delay={.1}><div className="content-card glass h-full">
            <div className="card-label"><GraduationCap size={17}/> Education & Certifications</div>
            {education.map(([d,s,b],i)=><div key={d} className="education-item"><span>0{i+1}</span><div><h3>{d}</h3><p>{s}</p><small>{b}</small></div></div>)}
            <div className="credential-list">
              {certifications.map(c=><div key={c}><CheckCircle2 size={14}/>{c}</div>)}
            </div>
            <Link href="/certifications" className="text-purple-300 text-sm">View Credentials <ArrowRight className="inline ml-1" size={15}/></Link>
          </div></Reveal>
        </div>
      </section>

      <section className="section-dark py-24">
        <div className="container">
          <Reveal><div className="lab-banner glass">
            <div><div className="card-label"><Terminal size={17}/> Developer Lab</div><h2 className="section-title">Experiments, Learning & Ideas</h2><p className="section-copy small">Flask, FastAPI, NumPy, Pandas, data analysis, machine learning and prompt engineering experiments.</p><Link href="/lab" className="primary-btn mt-7 inline-flex">Enter Developer Lab <ArrowUpRight size={16}/></Link></div>
            <div className="lab-grid">{["Flask","FastAPI","NumPy","Pandas","Data Analysis","Machine Learning","Prompt Engineering","APIs"].map((x,i)=><div key={x}>{String(i+1).padStart(2,"0")} <b>{x}</b></div>)}</div>
          </div></Reveal>
        </div>
      </section>

      <section className="section-dark py-24">
        <div className="container">
          <Reveal><div className="final-cta glass">
            <Rocket size={30} className="text-purple-300 mx-auto"/>
            <p className="section-label mt-5">Let&apos;s Connect</p>
            <h2 className="cta-title">Let&apos;s Build Something <span>Great.</span></h2>
            <p>Have a project, idea or opportunity? Let&apos;s talk about what we can build together.</p>
            <div className="flex justify-center flex-wrap gap-3 mt-8"><Link href="/contact" className="primary-btn">Contact Me <ArrowRight size={16}/></Link><a href={`mailto:${site.email}`} className="secondary-btn"><Mail size={16}/> Email Me</a></div>
          </div></Reveal>
        </div>
      </section>

      <footer className="site-footer">
        <div className="container">
          <div className="footer-grid">
            <div className="footer-brand"><div className="footer-logo">✦ ASHAB<span>.DEV</span></div><p>Junior Full Stack Developer building practical web applications, APIs, backend systems and data-focused experiments.</p><div className="footer-socials"><a href={site.github}><Github size={17}/></a><a href={site.linkedin}><Linkedin size={17}/></a><a href={`mailto:${site.email}`}><Mail size={17}/></a></div></div>
            <div><h4>Quick Links</h4><div className="footer-links"><Link href="/about">About</Link><Link href="/skills">Skills</Link><Link href="/projects">Projects</Link><Link href="/experience">Experience</Link><Link href="/resume">Resume</Link></div></div>
            <div><h4>Explore</h4><div className="footer-links"><Link href="/certifications">Certifications</Link><Link href="/lab">Developer Lab</Link><Link href="/live">Live Websites</Link><Link href="/contact">Contact</Link></div></div>
            <div><h4>Contact</h4><div className="footer-contact"><span><MapPin size={15}/> Karachi, Pakistan</span><span><Phone size={15}/> {site.phone}</span><span><Mail size={15}/> {site.email}</span></div></div>
          </div>
          <div className="footer-bottom"><span>© {new Date().getFullYear()} {site.name}. All rights reserved.</span><span>Designed & developed by Ashab.</span></div>
        </div>
      </footer>
    </main>
  );
}
