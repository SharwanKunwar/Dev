import { AnimatedTestimonials } from "./AnimatedTestimonials";

export default function AnimatedTestimonialsDemo() {
  const testimonials = [
    {
      id: 1,
      quote:
        "A beginner-friendly guide to Git & GitHub — from cloning to commits, simplified for devs.",
      title: "Mastering Git & GitHub in Simple Steps",
      time: "Published on July 1, 2025",
      src: "/blogImg/gitGithub.webp",
    },
    {
      id: 2,
      quote:
        "Step-by-step tutorial on activating Windows & MS Office — no more watermarks or nags!",
      title: "How to Activate Windows & MS Office for Free",
      time: "Published on July 2, 2025",
      src: "/blogImg/activation.png",
    },
    {
      id: 3,
      quote:
        "Explore the fascinating journey of programming — from punch cards to AI-powered code.",
      title: "The History of Programming — A Fun Timeline",
      time: "Published on July 3, 2025",
      src: "/blogImg/programmingHistory.webp",
    },
  ];

  return <AnimatedTestimonials testimonials={testimonials} autoplay={true} />;
}
