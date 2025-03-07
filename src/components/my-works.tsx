"use client";

import { useRef } from "react";
import Image from "next/image";
import Link from "next/link";
import { motion, useScroll, useTransform } from "framer-motion";
import { Button } from "@/components/ui/button";
import { X } from "lucide-react";

type Project = {
  title: string;
  description: string;
  image: string;
  tech: string;
  date: string;
};

const projects: Project[] = [

  {
    title: "UrbanPulse",
    description:
      "A real-time city analytics dashboard that tracks traffic, pollution, and public sentiment using IoT and social media data.",
    image: "https://images.unsplash.com/photo-1480714378408-67cf0d13bc1b",
    tech: "Vue.js, D3.js, Express, MongoDB, AWS Lambda",
    date: "December 2024",
  },
  {
    title: "FitSphere",
    description:
      "A fitness app with AR workouts, personalized nutrition plans, and social challenges to keep users motivated.",
    image: "https://images.unsplash.com/photo-1517836357463-d25dfeac3438",
    tech: "React Native, ARKit, GraphQL, PostgreSQL, TailwindCSS",
    date: "November 2024",
  },
  {
    title: "StoryWeaver",
    description:
      "An interactive storytelling platform where users collaborate with AI to write and illustrate dynamic narratives.",
    image: "https://images.unsplash.com/photo-1457369804613-52c61a468e7d",
    tech: "Next.js, Typescript, Stable Diffusion, Sanity, Vercel",
    date: "October 2024",
  },
  {
    title: "GreenGrid",
    description:
      "A renewable energy management tool that optimizes home solar and wind power usage with predictive analytics.",
    image: "https://images.unsplash.com/photo-1509395062183-67c5ad6faff9",
    tech: "Angular, Python, Flask, Redis, Google Cloud",
    date: "September 2024",
  },

  {
    title: "ShopSphere",
    description:
      "An e-commerce platform with virtual try-on features using AR and AI-powered product recommendations.",
    image: "https://images.unsplash.com/photo-1556741533-6e6a62bd8b49",
    tech: "Svelte, WebXR, Node.js, MongoDB, Stripe",
    date: "July 2024",
  },
  {
    title: "TravelTales",
    description:
      "A travel planning app with AI-curated itineraries, real-time local insights, and a photo-sharing community.",
    image: "https://images.unsplash.com/photo-1476514525535-07fb3b4ae5f1",
    tech: "React Native, Firebase, Google Maps API, NestJS",
    date: "June 2024",
  },
  {
    title: "CodeSphere",
    description:
      "A gamified coding platform with AI mentors, competitive challenges, and real-time code collaboration.",
    image: "https://images.unsplash.com/photo-1516259762381-22954d7d3ad2",
    tech: "Next.js, GraphQL, Prisma, Azure, TailwindCSS",
    date: "May 2024",
  },
  {
    title: "SoundScape",
    description:
      "A music creation tool powered by AI, allowing users to generate unique tracks and collaborate with artists.",
    image: "https://images.unsplash.com/photo-1510915361894-db8b60106cb1",
    tech: "React, Tone.js, Python, AWS S3, Supabase",
    date: "April 2024",
  },
];

function ProjectCard({ project, index }: { project: Project; index: number }) {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "center center"],
  });

  const translateZ = useTransform(scrollYProgress, [0, 1], ["-50px", "0px"]);
  const opacity = useTransform(scrollYProgress, [0, 1], [0.5, 1]);

  return (
    <motion.div
      ref={ref}
      style={{
        transform: `translateZ(${translateZ})`,
        opacity: opacity,
      }}
      className="item group mb-12"
    >
      <div className="bg-gray-900 rounded-lg overflow-hidden shadow-lg flex flex-col sm:flex-row hover:bg-gray-800 transition duration-300">
        <div className="p-6 sm:w-1/2 flex flex-col">
          <h3 className="text-2xl font-semibold mb-2">{project.title}</h3>
          <p className="text-gray-400 mb-4">{project.description}</p>
          <div className="flex flex-wrap gap-2 mt-auto">
            {project.tech.split(", ").map((tech, i) => (
              <span
                key={i}
                className="bg-gray-800 px-3 py-1 text-sm rounded-full text-gray-300"
              >
                {tech}
              </span>
            ))}
          </div>
          <p className="text-gray-500 mt-4">{project.date}</p>
        </div>
        <div className="sm:w-1/2">
          <Image
            src={project.image}
            alt={project.title}
            width={1130}
            height={635}
            quality={95}
            className="w-full h-full object-cover"
          />
        </div>
      </div>
    </motion.div>
  );
}

export default function ProjectShowcase() {
  return (
    <div className="flex flex-col min-h-screen bg-black text-white">
      {/* Header */}
      <header className="p-8 flex justify-between items-center">
        <Link href="/">
          <img src="/logo.png" alt="Logo" className="h-10 w-auto" />
        </Link>
        <div className="flex gap-4">
          <Button variant="outline" className="bg-white hover:bg-white/80 text-black px-6 py-2 rounded-full text-sm" asChild>
            <Link href="/contact">Connect</Link>
          </Button>
          <button onClick={() => {}} className="text-white p-2 hover:bg-white/10 rounded-full transition-colors" aria-label="Close menu">
            <Link href="/">
              <X className="w-6 h-6" />
            </Link>
            </button>
        </div>
      </header>

      <main className="flex-1">
        <section className="py-20 px-6 max-w-7xl mx-auto">
          <h2 className="text-3xl font-bold mb-8">Projects</h2>
          <div className="grid grid-cols-1 gap-8">
            {projects.map((project, index) => (
              <ProjectCard key={index} project={project} index={index} />
            ))}
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="border-t border-gray-800 py-20 px-4 md:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
            <div>
              <h3 className="text-lg font-medium mb-4">Information</h3>
              <div className="w-full h-px bg-gray-800 mb-4" />
              <ul className="space-y-2">
                <li>
                  <Link href="/aboutme" className="hover:opacity-80">About</Link>
                </li>
                <li>
                  <Link href="/process" className="hover:opacity-80">Process</Link>
                </li>
                <li>
                  <Link href="/myworks" className="hover:opacity-80">Work</Link>
                </li>
              </ul>
            </div>
            <div>
              <h3 className="text-lg font-medium mb-4">Connect</h3>
              <div className="w-full h-px bg-gray-800 mb-4" />
              <ul className="space-y-2">
                <li>
                  <Link href="https://www.instagram.com/tejakarthik.gubbala/" className="hover:opacity-80">Instagram</Link>
                </li>
                <li>
                  <Link href="https://github.com/Imtejakarthik" className="hover:opacity-80">GitHub</Link>
                </li>
                <li>
                  <Link href="https://www.linkedin.com/in/teja-karthik-b87824259/" className="hover:opacity-80">LinkedIn</Link>
                </li>
              </ul>
            </div>
            <div>
              <h3 className="text-lg font-medium mb-4">Legal</h3>
              <div className="w-full h-px bg-gray-800 mb-4" />
              <ul className="space-y-2">
                <li>
                  <Link href="/legels" className="hover:opacity-80">Terms & Conditions</Link>
                </li>
                <li>
                  <Link href="/privacypolicy" className="hover:opacity-80">Privacy Policy</Link>
                </li>
              </ul>
            </div>
            <div>
              <h3 className="text-lg font-medium mb-4">Got a project in mind?</h3>
              <div className="w-full h-px bg-gray-800 mb-4" />
              <p className="mb-4 text-gray-400">Let's chat about how we can help you bring your ideas to life.</p>
              <Button variant="outline" className="bg-transparent text-white border-white hover:bg-white hover:text-black">
                <Link href="/contact">Connect</Link>
              </Button>
            </div>
          </div>
          <div className="mt-20 pt-8 border-t border-gray-800 relative">
            <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-white to-transparent glow-effect" />
            <div className="flex flex-col md:flex-row justify-between items-center gap-4">
                <Link href="/">
                <img src="/logo.png" alt="Logo" className="h-8 w-auto" />
                </Link>
              <div className="text-sm text-gray-400">
                <span>Powered by </span>
                <Link href="#" className="hover:opacity-80">Next.js</Link>
                <span> and </span>
                <Link href="#" className="hover:opacity-80">Sanity</Link>
                <span>. Styled with </span>
                <Link href="#" className="hover:opacity-80">Tailwind CSS</Link>
                <span> and </span>
                <Link href="#" className="hover:opacity-80">Framer Motion</Link>
              </div>
              <div className="text-sm text-gray-400">© G.Teja Karthik 2025</div>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}