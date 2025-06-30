import { Inter } from "next/font/google";
import { Container } from "./components/Container";
import Projects from "./components/Projects";

const inter = Inter({weight:["400","500","600","700","800","900"]})

export default function Home() {
  return (
    <div className="min-h-screen flex items-start justify-start">
      <Container className="min-h-[200vh] p-4 md:p-10 md:pt-10">
        <h1 className="text-2xl md:text-4xl font-bold tracking-tight text-neutral-800 dark:text-neutral-100">UnpredictableCoders</h1>
        <p className="text-neutral-400 dark:text-neutral-100 pt-3 md:text-sm text-sm max-w-2xl">I'm Software developer with a passion for building scalable and efficient systems. I'm currently working for my own.</p>
        <Projects/>
      </Container>
    </div>
  );
}
