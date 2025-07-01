import { Inter } from "next/font/google";
import { Container } from "./components/Container";
import Projects from "./components/Projects";


export default function Home() {
  return (
    <div className="min-h-screen flex items-start justify-start">
      <Container className="min-h-[200vh] p-4 md:p-10 md:pt-0">
      <div  className=" h-[50px] "></div>
        <h1 className="text-2xl md:text-4xl font-bold tracking-tight text-neutral-800 dark:text-neutral-100">Sharwan Jung Kunwar</h1>
        <p className="text-neutral-400 dark:text-neutral-100 pt-3 md:text-sm text-sm max-w-2xl">a software developer who writes code like a chef cooks gourmet meals: with precision, creativity, and a few spices of sarcasm.</p>
        <p className="text-neutral-400 dark:text-neutral-100 pt-3 md:text-sm text-sm max-w-2xl">I specialize in building scalable, efficient systems and crafting digital experiences that don’t just work  they wow. I’m currently building my own path (yes, solo dev life ✌️), working on projects that combine logic, aesthetics, and a whole lot of coffee.</p>
        <p className="text-neutral-400 dark:text-neutral-100 pt-3 md:text-sm text-sm max-w-2xl">I speak fluent Java, C, JavaScript, and sarcasm, and I have a not-so-secret obsession with optimizing everything — from backend performance to how my terminal looks.</p>
        <p id='projects' className="text-neutral-400 dark:text-neutral-100 pt-3 md:text-sm text-sm max-w-2xl">Whether it's building a full-stack app, architecting clean APIs, or animating a “404 page not found” to dance — I’m here for it.</p>
        <Projects/>
      </Container>
    </div>
  );
}
