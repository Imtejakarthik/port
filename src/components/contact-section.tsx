"use client"

import { useState } from "react"
import Link from "next/link"
import { Instagram, Github, Linkedin, X } from "lucide-react"
import { Button } from "@/components/ui/button"

export default function ContactSection() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    company: "",
    phone: "",
    message: "",
  })
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submitStatus, setSubmitStatus] = useState<"success" | "error" | null>(null)

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target
    setFormData((prevData) => ({ ...prevData, [name]: value }))
  }

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    setIsSubmitting(true)
    setSubmitStatus(null)

    const apiEndpoint = "https://api.web3forms.com/submit"

    try {
      const res = await fetch(apiEndpoint, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
        body: JSON.stringify({
          access_key: "c2574292-bf2c-4c2e-8b32-e68c333e8d57",
          ...formData,
          recipient: "tejakarthikatwork@gmail.com",
        }),
      })

      const data = await res.json()

      if (data.success) {
        setSubmitStatus("success")
        setFormData({ name: "", email: "", company: "", phone: "", message: "" })
      } else {
        setSubmitStatus("error")
      }
    } catch (error) {
      console.error("Error submitting form:", error)
      setSubmitStatus("error")
    } finally {
      setIsSubmitting(false)
    }
  }

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
        <section className="max-w-7xl mx-auto px-4 py-12 md:py-24">
          <div className="space-y-4 mb-16">
            <h1 className="text-5xl md:text-6xl font-bold tracking-tight">Let's work together</h1>
            <p className="text-xl text-gray-400 max-w-2xl">
              Whatever it is, I'm always up for brainstorming new ideas and diving into exciting projects—bonus points if there's coffee involved!
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-12 md:gap-24">
            <div className="space-y-12">
              <div>
                <h3 className="text-lg font-semibold mb-6">Where?</h3>
                <p className="text-gray-400 mb-8">
                  In-person meetings? Not my thing! But for legal reasons, here's where I live - just know, I do all my magic remotely, wherever my laptop and Wi-Fi take me!
                </p>
                <div className="grid grid-cols-2 gap-8">
                  <div>
                    <h4 className="font-semibold mb-2">India</h4>
                    <p className="text-gray-400">Chennai</p>
                  </div>
                  <div>
                    <h4 className="font-semibold mb-2">Malaysia</h4>
                    <p className="text-gray-400">Kuala Lumpur</p>
                  </div>
                </div>
              </div>
              <div className="border-t pt-8" />
              <div>
                <h3 className="text-lg font-semibold mb-4">Email</h3>
                <div>
                  <h4 className="text-sm text-gray-400 mb-1">Personal</h4>
                  <p>tejakarthikatwork@gmail.com</p>
                </div>
              </div>
              <div className="border-t pt-8" />
              <div>
                <h3 className="text-lg font-semibold mb-4">Follow me</h3>
                <div className="flex gap-6">
                  <Link href="https://www.instagram.com/tejakarthik.gubbala/" className="text-gray-400 hover:text-white">
                    <Instagram className="h-6 w-6" />
                  </Link>
                  <Link href="https://github.com/Imtejakarthik" className="text-gray-400 hover:text-white">
                    <Github className="h-6 w-6" />
                  </Link>
                  <Link href="https://www.linkedin.com/in/teja-karthik-b87824259/" className="text-gray-400 hover:text-white">
                    <Linkedin className="h-6 w-6" />
                  </Link>
                </div>
              </div>
            </div>

            <div>
              <h3 className="text-lg font-semibold mb-6">Work inquiries</h3>
              <form className="space-y-6" onSubmit={handleSubmit}>
                <div>
                  <input
                    type="text"
                    name="name"
                    placeholder="Name"
                    className="w-full px-4 py-3 rounded-lg border bg-black text-white border-gray-800"
                    value={formData.name}
                    onChange={handleChange}
                    required
                  />
                </div>
                <div>
                  <input
                    type="email"
                    name="email"
                    placeholder="Email"
                    className="w-full px-4 py-3 rounded-lg border bg-black text-white border-gray-800"
                    value={formData.email}
                    onChange={handleChange}
                    required
                  />
                </div>
                <div>
                  <input
                    type="text"
                    name="company"
                    placeholder="Company"
                    className="w-full px-4 py-3 rounded-lg border bg-black text-white border-gray-800"
                    value={formData.company}
                    onChange={handleChange}
                  />
                </div>
                <div>
                  <input
                    type="tel"
                    name="phone"
                    placeholder="Phone"
                    className="w-full px-4 py-3 rounded-lg border bg-black text-white border-gray-800"
                    value={formData.phone}
                    onChange={handleChange}
                  />
                </div>
                <div>
                  <textarea
                    name="message"
                    placeholder="Message"
                    rows={4}
                    className="w-full px-4 py-3 rounded-lg border bg-black text-white border-gray-800"
                    value={formData.message}
                    onChange={handleChange}
                    required
                  />
                </div>
                <button
                  type="submit"
                  className="bg-white text-black px-6 py-3 rounded-full hover:opacity-90 disabled:opacity-50"
                  disabled={isSubmitting}
                >
                  {isSubmitting ? "Sending..." : "Let's work together"}
                </button>
                {submitStatus === "success" && (
                  <p className="text-green-600">Thank you for your message! We'll get back to you soon.</p>
                )}
                {submitStatus === "error" && (
                  <p className="text-red-600">There was an error submitting your message. Please try again.</p>
                )}
              </form>
            </div>
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
  )
}