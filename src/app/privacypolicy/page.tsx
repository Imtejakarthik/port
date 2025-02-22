import Link from "next/link"
import { Button } from "@/components/ui/button"

export default function Home() {
  return (
    <div className="min-h-screen bg-black text-white">
      {/* Header */}
      <header className="flex justify-between items-center p-6">
        <Link href="/" className="flex items-center">
          <svg
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
            className="text-white"
          >
            <path d="M5 12h14" />
            <path d="M12 5l7 7-7 7" />
          </svg>
        </Link>
        <Button variant="outline" className="text-white border-white hover:bg-white hover:text-black">
          Contact me
        </Button>
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
              <a href="mailto:surendarpd007@gmail.com" className="text-blue-400 hover:text-blue-300 underline">
                surendarpd007@gmail.com
              </a>
            </p>
          </section>
        </div>
      </main>

      {/* Footer */}
      <footer className="border-t border-gray-800 mt-24">
        <div className="max-w-7xl mx-auto px-6 py-12">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div>
              <h3 className="font-semibold mb-4 text-white">Information</h3>
              <ul className="space-y-2">
                <li>
                  <Link href="/about" className="text-gray-400 hover:text-white transition-colors">
                    About
                  </Link>
                </li>
                <li>
                  <Link href="/process" className="text-gray-400 hover:text-white transition-colors">
                    Process
                  </Link>
                </li>
                <li>
                  <Link href="/work" className="text-gray-400 hover:text-white transition-colors">
                    Work
                  </Link>
                </li>
              </ul>
            </div>

            <div>
              <h3 className="font-semibold mb-4 text-white">Connect</h3>
              <ul className="space-y-2">
                <li>
                  <a href="#" className="text-gray-400 hover:text-white transition-colors">
                    Instagram
                  </a>
                </li>
                <li>
                  <a href="#" className="text-gray-400 hover:text-white transition-colors">
                    GitHub
                  </a>
                </li>
                <li>
                  <a href="#" className="text-gray-400 hover:text-white transition-colors">
                    LinkedIn
                  </a>
                </li>
              </ul>
            </div>

            <div>
              <h3 className="font-semibold mb-4 text-white">Legal</h3>
              <ul className="space-y-2">
                <li>
                  <Link href="/terms" className="text-gray-400 hover:text-white transition-colors">
                    Terms & Conditions
                  </Link>
                </li>
                <li>
                  <Link href="/privacy" className="text-gray-400 hover:text-white transition-colors">
                    Privacy Policy
                  </Link>
                </li>
              </ul>
            </div>

            <div>
              <h3 className="font-semibold mb-4 text-white">Got a project in mind?</h3>
              <p className="text-gray-300 mb-4">Let's chat about how we can help you bring your ideas to life.</p>
              <Button variant="outline" className="text-white border-white hover:bg-white hover:text-black">
                Connect
              </Button>
            </div>
          </div>

          <div className="flex flex-col md:flex-row justify-between items-center mt-12 pt-8 border-t border-gray-800">
            <Link href="/" className="mb-4 md:mb-0">
              <svg
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="text-white"
              >
                <path d="M5 12h14" />
                <path d="M12 5l7 7-7 7" />
              </svg>
            </Link>
            <p className="text-sm text-gray-400 text-center md:text-left">
              Powered by Next.js and Sanity. Styled with Tailwind CSS and Framer Motion
            </p>
            <p className="text-sm text-gray-400">© Surendar PD. 2025</p>
          </div>
        </div>
      </footer>
    </div>
  )
}

