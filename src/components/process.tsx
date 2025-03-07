"use client";

import Link from "next/link"
import { Button } from "@/components/ui/button"
import { X } from "lucide-react"

export default function Process() {
  const phases = [
    {
      number: "01",
      title: "Discover",
      image: "https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?q=80&w=2940&auto=format&fit=crop",
      description: [
        "We work closely with our clients to understand their needs and goals, diving deep into their ideas and operations to uncover what makes their vision tick.",
        "Our process is a bit less dramatic than sending investigators or digging through trash, but it does involve a lot of sticky notes, late-night brainstorming sessions, and the occasional team debate over font sizes. From sketches to solid plans, we make sure every detail is just right.",
        "Once we've put it all together, we present a comprehensive plan, complete with solutions that fit your goals—and leave room in your budget for coffee refills.",
      ],
      included: [
        "Intense brainstorming sessions",
        "Feasibility checks that make sense",
        "Design mockups (approved after team debates)",
        "Employee-friendly surveys",
        "Proofs-of-concept that actually work",
        "A game plan to bring it all together",
      ],
    },
    {
      number: "02",
      title: "Build",
      image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?q=80&w=2426&auto=format&fit=crop",
      description: [
        "Based on the discovery phase, we create a comprehensive roadmap for each project and dive into the build phase. Our roadmaps are carefully planned chaos, sprinkled with just enough technical jargon to make us look brilliant and keep the process exciting.",
        'Each client gets a dedicated account manager to keep communication flowing and act as a friendly buffer between your "just one small change" requests and our developers, who are hard at work tweaking code and occasionally Googling solutions.',
        "Our account managers are pros at replying to emails late at night, just in time to make it seem like we're burning the midnight oil (we're not, but it's nice to have a mystique). This ensures you stay impressed and slightly hesitant to add more to our to-do list.",
      ],
    },
    {
      number: "03",
      title: "Deliver",
      image: "https://images.unsplash.com/photo-1522071820081-009f0129c71c?q=80&w=2940&auto=format&fit=crop",
      description: [
        'Around halfway through the build phase, we strategically "discover" a change in requirements, which adds six extra weeks to the timeline. This provides us with a great opportunity to adjust the budget one last time before launch. It\'s all about flexibility (and profit margins)!',
        "While we may use pre-built components, the real magic happens in the final 24 hours before launch, fueled by caffeine and sheer panic. Most of the earlier time is spent crafting viral social media demos that have nothing to do with your project but make us look like visionaries.",
        "At launch, we guarantee the main pages of your site are fully functional. Auxiliary pages? Those are lorem ipsum placeholders—ready to be updated as part of our premium maintenance package.",
      ],
      included: {
        Testing: "Every project has 100% test coverage. Sure, the tests might be a little loose, but hey, it's the thought that counts.",
        Infrastructure: 'For top-tier reliability, we rely on DigitalOcean droplets that scream "value" at $4 a month.',
        Support: "With all critical API keys safely in our hands, you'll enjoy lifelong support—and a lifetime of invoices from us.",
      },
    },
  ]

  const values = [
    {
      title: "Meticulous",
      description: "Step one: slap your logo onto one of our go-to templates. Step two: make it match your brand colors... or something close enough.",
    },
    {
      title: "Efficient",
      description: "Deadlines? Never an issue. Most of the work was done years ago, and we just keep recycling it.",
    },
    {
      title: "Adaptable",
      description: "Your business is unique, and our biggest skill is convincing you that what we already built fits you perfectly.",
    },
    {
      title: "Honest",
      description: "We're transparent about everything we do, fully confident that you'll never read past the second bullet point.",
    },
    {
      title: "Loyal",
      description: "Our commitment doesn't end at delivery – mostly because we keep invoicing you for updates forever.",
    },
    {
      title: "Innovative",
      description: "The tech world moves fast, and so do we. We're always ready to adapt... by cloning the newest open-source project.",
    },
  ]

  const onClose = () => {
    console.log("Close button clicked");
  };

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
          <Link href="/" passHref>
              <button type="button" onClick={onClose} className="text-white p-2 hover:bg-white/10 rounded-full transition-colors" aria-label="Close menu">
              <X className="w-6 h-6" />
              </button>
            </Link>
        </div>
      </header>

      {/* Main Content */}
      <main className="flex-1">
        <section className="py-20 px-4 md:px-6 lg:px-8 max-w-7xl mx-auto">
          <h2 className="text-lg mb-4 font-light">Our process</h2>
          <div className="w-full h-px bg-gray-800 my-6" />
          <h1 className="text-4xl md:text-5xl lg:text-7xl font-display mb-6">How we work</h1>
          <p className="text-lg text-gray-400 max-w-3xl">
            We believe in efficiency and maximizing our resources to provide the best value to our clients. The primary way we do that is by re-using the same five projects we've been developing for the past few years.
          </p>
        </section>

        <section className="py-20 px-4 md:px-6 lg:px-8 max-w-7xl mx-auto">
          <div className="space-y-32">
            {phases.map((phase, index) => (
              <div key={index} className="space-y-8">
                <div
                  className={`grid md:grid-cols-2 gap-12 items-center ${index % 2 === 1 ? "md:flex-row-reverse" : ""}`}
                >
                  <div className={`space-y-6 ${index % 2 === 1 ? "md:order-2" : ""}`}>
                    <div className="flex items-center gap-4">
                      <span className="text-gray-600 font-light">/ {phase.number}</span>
                      <h2 className="text-3xl font-display">{phase.title}</h2>
                    </div>
                    <div className="space-y-6">
                      {phase.description.map((para, i) => (
                        <p key={i} className="text-gray-400">{para}</p>
                      ))}
                    </div>
                    {phase.included && (
                      <div className="space-y-8 mt-12">
                        <h3 className="text-xl font-display">Included in this phase</h3>
                        <div className="space-y-8">
                          {Array.isArray(phase.included) ? (
                            <div className="flex flex-wrap gap-4">
                              {phase.included.map((item, i) => (
                                <span key={i} className="bg-gray-900 px-4 py-2 rounded-full text-sm">{item}</span>
                              ))}
                            </div>
                          ) : (
                            Object.entries(phase.included).map(([title, description], i) => (
                              <div key={i} className="space-y-2">
                                <h4 className="font-medium">{title}.</h4>
                                <p className="text-gray-400">{description as string}</p>
                                <div className="w-full h-px bg-gray-800 mt-8" />
                              </div>
                            ))
                          )}
                        </div>
                      </div>
                    )}
                  </div>
                  <div className={`relative aspect-[4/3] ${index % 2 === 1 ? "md:order-1" : ""}`}>
                    <div className="absolute inset-0 bg-gray-900 rounded-lg overflow-hidden">
                      <img
                        src={phase.image || "/placeholder.svg"}
                        alt={`${phase.title} phase illustration`}
                        className="w-full h-full object-cover opacity-80 hover:opacity-100 transition-opacity duration-300"
                      />
                    </div>
                  </div>
                </div>
                {index < phases.length - 1 && <div className="w-full h-px bg-gray-800 mt-32" />}
              </div>
            ))}
          </div>
        </section>

        <section className="py-20 px-4 md:px-6 lg:px-8 max-w-7xl mx-auto">
          <h2 className="text-lg mb-4 font-light">Our values</h2>
          <div className="w-full h-px bg-gray-800 my-6" />
          <h2 className="text-4xl md:text-5xl lg:text-7xl font-display mb-6">Balancing ambition and comfort</h2>
          <p className="text-lg text-gray-400 max-w-3xl mb-16">
            We're all about keeping up with the latest trends and technologies—until we aren't. Why chase the cutting edge when that trusty old Rails project still works like a charm? Our core values help us sleep at night after making that call.
          </p>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-12">
            {values.map((value, index) => (
              <div key={index} className="space-y-4">
                <h3 className="text-xl font-medium">{value.title}.</h3>
                <p className="text-gray-400">{value.description}</p>
              </div>
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
  )
}