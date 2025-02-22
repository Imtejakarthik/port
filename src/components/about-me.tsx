import { Button } from "@/components/ui/button"
import Link from "next/link"
import { MenuIcon, X } from "lucide-react";
import { Card } from "./ui/card";

interface AboutMeProps {
  onClose: () => void;
}

export function AboutMe({ }: AboutMeProps) {
  return (
    <div className="flex lg:px-20 overflow-hidden min-h-screen flex-col bg-black text-white">
      {/* Header */}
      <div className="p-8 flex justify-between items-center">
      <div className="ml-auto flex gap-4">
        <Button asChild>
        <Button variant="outline" className="bg-white hover:bg-white/80 text-black px-6 py-2 rounded-full text-sm" asChild>
          <Link href="/contact">Connect</Link>
              </Button>
        </Button>
        <Button className="text-white p-2 hover:bg-white/10 rounded-full transition-colors" aria-label="Close menu">
        <Link href="/">
                            <X className="w-6 h-6" />
                            </Link>
                        </Button>
      </div>
      </div>
      <main className="flex-1">
        <section className="w-full py-12 px-20 md:py-24 lg:py-32">
          <div className="container px-4 md:px-6">
            <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">About Me</h1>
            <div className="mt-8 space-y-12">
              <div>
                <h2 className="text-4xl font-bold tracking-tighter text-justify sm:text-5xl md:text-6xl lg:text-7xl">
                  My superpower is turning ideas into reality with the best design.
                </h2>
                <p className="mt-4 text-gray-400 text-justify  md:text-xl">
                  I believe that my strength lies in my creative approach, which places your ideas at the heart of
                  everything I do.
                </p>
              </div>
              <div className="space-y-4 text-gray-400 text-justify  md:text-xl">
                <p>
                  I started out as a self-taught designer, frustrated with the cookie-cutter solutions I saw around me.
                  My goal? To create something different, something that truly stands out. No shortcuts, just hard work
                  and a lot of caffeine.
                </p>
                <p>
                  I&apos;m not just a developer—I&apos;m a problem-solver, always thinking of new ways to make your
                  vision come to life. I&apos;m a freelancer working remotely, so while my office might be anywhere, my
                  commitment to quality stays the same. Let&apos;s collaborate and make something amazing together!
                </p>
              </div>
              <div className="grid gap-8 sm:grid-cols-3">
                <div>
                  <h3 className="text-3xl font-bold">15+</h3>
                  <p className="text-gray-400">Projects</p>
                </div>
                <div>
                  <h3 className="text-3xl font-bold">5+</h3>
                  <p className="text-gray-400">Clients</p>
                </div>
                <div>
                  <h3 className="text-3xl font-bold">∞</h3>
                  <p className="text-gray-400">Coffee consumed</p>
                </div>
              </div>
            </div>
          </div>
        </section>
        <Card className="w-full border-gray-800 lg:px-20 rounded-2xl bg-gray-900 text-white py-12 md:py-24 lg:py-32">
          <div className="container px-10 md:px-6">
            <h2 className="text-2xl font-bold tracking-tighter">My values</h2>
            <div className="mt-8">
              <h3 className="text-4xl font-bold tracking-tighter sm:text-5xl">
                Balance your passion
                <br />
                with your passion for life.
              </h3>
              <p className="mt-4 text-gray-400 md:text-xl">
                I&apos;m all about finding the perfect mix between creativity and living life to the fullest.
              </p>
            </div>
            <div className="mt-12 grid gap-8 sm:grid-cols-3">
              <div>
                <h4 className="font-bold">Curiosity.</h4>
                <p className="mt-2 text-gray-400">
                  I&apos;ve been self-taught because I&apos;m always eager to learn something new—whether it&apos;s
                  design or a random trivia fact.
                </p>
              </div>
              <div>
                <h4 className="font-bold">Flexibility.</h4>
                <p className="mt-2 text-gray-400">
                  I work when inspiration strikes, but I&apos;m always dedicated to delivering top-notch results, no
                  matter the time.
                </p>
              </div>
              <div>
                <h4 className="font-bold">Empathy.</h4>
                <p className="mt-2 text-gray-400">
                  I believe every project tells a story, and I make it a point to truly understand my clients&apos;
                  needs—without prying too deep.
                </p>
              </div>
            </div>
          </div>
        </Card>
      </main>
      {/* Footer */}
      <footer className="border-t border-gray-800 py-20 px-4 md:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
            {/* Information */}
            <div>
              <h3 className="text-lg font-medium mb-4">Information</h3>
              <div className="w-full h-px bg-gray-800 mb-4" />
              <ul className="space-y-2">
                <li>
                  <Link href="/aboutme" className="hover:opacity-80">
                    About
                  </Link>
                </li>
                <li>
                  <Link href="/process" className="hover:opacity-80">
                    Process
                  </Link>
                </li>
                <li>
                  <Link href="/myworks" className="hover:opacity-80">
                    Work
                  </Link>
                </li>
              </ul>
            </div>

            {/* Connect */}
            <div>
              <h3 className="text-lg font-medium mb-4">Connect</h3>
              <div className="w-full h-px bg-gray-800 mb-4" />
              <ul className="space-y-2">
                <li>
                  <Link
                    href="https://www.instagram.com/tejakarthik.gubbala/"
                    className="hover:opacity-80"
                  >
                    Instagram
                  </Link>
                </li>
                <li>
                  <Link
                    href="https://github.com/Imtejakarthik"
                    className="hover:opacity-80"
                  >
                    GitHub
                  </Link>
                </li>
                <li>
                  <Link
                    href="https://www.linkedin.com/in/teja-karthik-b87824259/"
                    className="hover:opacity-80"
                  >
                    LinkedIn
                  </Link>
                </li>
              </ul>
            </div>

            {/* Legal */}
            <div>
              <h3 className="text-lg font-medium mb-4">Legal</h3>
              <div className="w-full h-px bg-gray-800 mb-4" />
              <ul className="space-y-2">
                <li>
                  <Link href="/legels" className="hover:opacity-80">
                    Terms & Conditions
                  </Link>
                </li>
                <li>
                  <Link href="/privacypolicy" className="hover:opacity-80">
                    Privacy Policy
                  </Link>
                </li>
              </ul>
            </div>

            {/* Project CTA */}
            <div>
              <h3 className="text-lg font-medium mb-4">
                Got a project in mind?
              </h3>
              <div className="w-full h-px bg-gray-800 mb-4" />
              <p className="mb-4 text-gray-400">
                Let&apos;s chat about how we can help you bring your ideas to
                life.
              </p>
              <Button
                variant="outline"
                className="bg-transparent text-white border-white hover:bg-white hover:text-black"
              >
                <Link href="/contact">Connect</Link>
              </Button>
            </div>
          </div>

          {/* Footer Bottom */}
          <div className="mt-20 pt-8 border-t border-gray-800 flex flex-col md:flex-row justify-between items-center gap-4">
            <Link href="/" className="text-2xl font-bold hover:opacity-80">
              TK.
            </Link>
            <div className="text-sm text-gray-400">
              <span>Powered by </span>
              <Link href="#" className="hover:opacity-80">
                Next.js
              </Link>
              <span> and </span>
              <Link href="#" className="hover:opacity-80">
                Sanity
              </Link>
              <span>. Styled with </span>
              <Link href="#" className="hover:opacity-80">
                Tailwind CSS
              </Link>
              <span> and </span>
              <Link href="#" className="hover:opacity-80">
                Framer Motion
              </Link>
            </div>
            <div className="text-sm text-gray-400">
              © G.Teja Karthik 2025
            </div>
          </div>
        </div>
      </footer>
    </div>
  )
}
