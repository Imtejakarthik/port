"use client";

import { Button } from "@/components/ui/button"
import { X } from "lucide-react"
import Link from "next/link"

const CloseButton = ({ onClose }: { onClose: () => void }) => (
  <button onClick={onClose} className="text-white">
    <X />
  </button>
);

export default function Legels() {
  const onClose = () => {
    // Add your close logic here
  };
  return (
    <div className="flex min-h-screen flex-col bg-black text-white">
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

      <div className="container mx-auto px-4 py-8 max-w-6xl">
        <div className="mb-12">
          <p className="text-gray-400 pt-24 mb-4">Last Updated January 2025</p>
          <h1 className="text-5xl font-bold mb-8 font-[ClashDisplay-Variable]">Terms & Conditions</h1>
          <p className="text-gray-400 mb-8">
            The owner of this personal portfolio website ("Website" or "Website Owner" or "I" or "me" or "my") provides
            the information contained on this website or any of the pages comprising the website ("website") to visitors
            ("visitors") (collectively referred to as "you" or "your" hereinafter) subject to the terms and conditions
            outlined in these website terms and conditions, the privacy policy, and any other relevant terms, policies,
            and notices applicable to specific sections or features of this website.
          </p>

          <div className="space-y-8">
            <section>
              <h2 className="text-2xl font-semibold mb-4 font-[ClashDisplay-Variable]">1. Acceptance of Terms</h2>
              <p className="text-gray-400">
                By accessing or using this website, you agree to comply with and be bound by these Terms and Conditions.
                If you do not agree to these terms, please refrain from using the website.
              </p>
            </section>
            <section>
              <h2 className="text-2xl font-semibold mb-4 font-[ClashDisplay-Variable]">2. Services</h2>
              <p className="text-gray-400">
                We specialize in providing web development services. However, we reserve the right to decline any
                project that we deem unsuitable for our team.
              </p>
            </section>
            <section>
              <h2 className="text-2xl font-semibold mb-4 font-[ClashDisplay-Variable]">3. Pricing</h2>
              <p className="text-gray-400">
                Our pricing structure is based on the scope and requirements of each project. Pricing details will be
                discussed and mutually agreed upon with the client before commencing any work.
              </p>
            </section>
            <section>
              <h2 className="text-2xl font-semibold mb-4 font-[ClashDisplay-Variable]">4. Payment</h2>
              <p className="text-gray-400">
                A deposit of 50% of the project cost is required prior to the initiation of work. The remaining balance
                is payable upon project completion, before the website is launched.
              </p>
            </section>
            <section>
              <h2 className="text-2xl font-semibold mb-4 font-[ClashDisplay-Variable]">5. Refunds</h2>
              <p className="text-gray-400">
                We are committed to delivering high-quality services. In the event that a client is dissatisfied with
                our work, they may request a refund within seven (7) days of project completion. Refunds will be
                prorated based on the amount of work completed.
              </p>
            </section>
            <section>
              <h2 className="text-2xl font-semibold mb-4 font-[ClashDisplay-Variable]">6. Project Completion</h2>
              <p className="text-gray-400">
                We will provide an estimated timeline for the completion of each project. While we strive to adhere to
                the estimated schedule, we cannot guarantee a specific completion date.
              </p>
            </section>
            <section>
              <h2 className="text-2xl font-semibold mb-4 font-[ClashDisplay-Variable]">7. Confidentiality</h2>
              <p className="text-gray-400">
                All client-provided confidential information will be treated with strict confidentiality and will not be
                disclosed to any third party without prior consent.
              </p>
            </section>
            <section>
              <h2 className="text-2xl font-semibold mb-4 font-[ClashDisplay-Variable]">8. Intellectual Property</h2>
              <p className="text-gray-400">
                Any intellectual property provided by the client will be used solely for the purpose of completing the
                project and will not be used for any other purpose.
              </p>
            </section>
            <section>
              <h2 className="text-2xl font-semibold mb-4 font-[ClashDisplay-Variable]">9. Third-Party Services</h2>
              <p className="text-gray-400">
                We may utilize third-party services to fulfill certain aspects of a project. We are not responsible for
                any changes or disruptions caused by these third-party services.
              </p>
            </section>
            <section>
              <h2 className="text-2xl font-semibold mb-4 font-[ClashDisplay-Variable]">10. Use of Content</h2>
              <p className="text-gray-400">
                We reserve the right to feature completed projects in our portfolio and marketing materials unless
                otherwise agreed upon with the client.
              </p>
            </section>
            <section>
              <h2 className="text-2xl font-semibold mb-4 font-[ClashDisplay-Variable]">11. Disclaimer</h2>
              <p className="text-gray-400">
                The content and information on this website are provided on an "as-is" basis. We make no representations
                or warranties, express or implied, regarding the operation of the website or the accuracy of its
                content, materials, or products.
              </p>
            </section>
            <section>
              <h2 className="text-2xl font-semibold mb-4 font-[ClashDisplay-Variable]">12. Limitation of Liability</h2>
              <p className="text-gray-400">
                We will not be held liable for any damages arising from the use of this website or its content. This
                includes, but is not limited to, direct, indirect, incidental, punitive, or consequential damages.
              </p>
            </section>
            <section>
              <h2 className="text-2xl font-semibold mb-4 font-[ClashDisplay-Variable]">
                13. Changes to Terms and Conditions
              </h2>
              <p className="text-gray-400">
                We reserve the right to update or revise these Terms and Conditions at any time. The latest version will
                always be available on our website. Continued use of our website or services indicates acceptance of the
                current Terms and Conditions.
              </p>
            </section>
            <section>
              <h2 className="text-2xl font-semibold mb-4 font-[ClashDisplay-Variable]">14. Contact Us</h2>
              <p className="text-gray-400">
                For any questions or inquiries about these Terms and Conditions, please reach out to us at{" "}
                <a href="mailto:tejakarthikatwork@gmail.com" className="text-white underline">
                  tejakarthikatwork@gmail.com
                </a>
              </p>
            </section>
          </div>
        </div>

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
                    <img src="/logo.png" alt="Logo" className="h-10 w-auto" />
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
    </div>
  )
}