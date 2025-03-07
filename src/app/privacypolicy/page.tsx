"use client";
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { X } from "lucide-react"

export default function Home() {
  const onClose = () => {
    console.log("Close button clicked");
  };
  return (
    <div className="min-h-screen bg-black text-white">
      {/* Header */}
      <header className="p-8 flex justify-between items-center">
        <Link href="/">
          <img src="/logo.png" alt="Logo" className="h-10 w-auto" />
        </Link>
        <div className="flex gap-4">
          <Button variant="outline" className="bg-white hover:bg-white/80 text-black px-6 py-2 rounded-full text-sm" asChild>
            <Link href="/contact">Connect</Link>
          </Button>
            <button onClick={onClose} className="text-white p-2 hover:bg-white/10 rounded-full transition-colors" aria-label="Close menu">
            <Link href="/">
              <X className="w-6 h-6" />
            </Link>
            </button>
        </div>
      </header>

      {/* Main Content */}
      <main className="max-w-4xl mx-auto px-6 py-12">
        <div className="space-y-8">
          <p className="text-gray-400">Last Updated January 2025</p>

          <h1 className="text-5xl font-bold tracking-tight text-white">Privacy Policy</h1>

          <p className="text-gray-300 leading-relaxed">
            This statement is a legal document that details the methods by which a website gathers, uses, discloses, and
            manages user data. The content of a privacy statement may vary depending on applicable laws and might need
            to meet the requirements of multiple countries or jurisdictions. While there is no universal standard for
            the content of privacy statements, various organizations offer example templates and guidelines.
          </p>

          <section className="space-y-6">
            <h2 className="text-2xl font-semibold text-white">1. Introduction</h2>
            <p className="text-gray-300 leading-relaxed">
              This Privacy Policy outlines how personal information is collected, used, and shared when visitors access
              or interact with this website.
            </p>
          </section>

          <section className="space-y-6">
            <h2 className="text-2xl font-semibold text-white">2. Information Collection and Use</h2>
            <p className="text-gray-300 leading-relaxed">
              We collect personal information such as names, email addresses, and any other details visitors provide
              when they contact us or subscribe to updates. This information is used to respond to inquiries, send
              updates, and enhance the website's functionality.
            </p>
          </section>

          <section className="space-y-6">
            <h2 className="text-2xl font-semibold text-white">3. Information Sharing</h2>
            <p className="text-gray-300 leading-relaxed">
              We may share personal information with third parties only to fulfill the services requested by visitors.
              For instance, email addresses may be shared with third-party email service providers to send updates or
              communications.
            </p>
          </section>

          <section className="space-y-6">
            <h2 className="text-2xl font-semibold text-white">4. Data Security</h2>
            <p className="text-gray-300 leading-relaxed">
              We implement appropriate measures to safeguard personal information against unauthorized access,
              alteration, disclosure, or destruction.
            </p>
          </section>

          <section className="space-y-6">
            <h2 className="text-2xl font-semibold text-white">5. Changes to this Policy</h2>
            <p className="text-gray-300 leading-relaxed">
              This Privacy Policy may be revised periodically to reflect changes in our practices or to ensure
              compliance with legal requirements. Any updates will be posted on this website, and visitors are
              encouraged to review the policy regularly.
            </p>
          </section>

          <section className="space-y-6">
            <h2 className="text-2xl font-semibold text-white">6. Contact Us</h2>
            <p className="text-gray-300 leading-relaxed">
              For any questions, concerns, or feedback regarding this Privacy Policy or our services, please contact us
              at{" "}
              <a href="mailto:tejakarthikatwork@gmail.com" className="text-blue-400 hover:text-blue-300 underline">
                tejakarthikatwork@gmail.com
              </a>
            </p>
          </section>
        </div>
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
              <img src="/logo.png" alt="Logo" className="h-10 w-auto hover:opacity-80" />
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