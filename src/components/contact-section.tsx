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
          recipient: "tejakarthik777@gmail.com", // Your email address
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
    <>
      <section className="max-w-7xl mx-auto px-4 py-12 md:py-24">
        <div className="space-y-4 mb-16">
        <div className="pb-2 flex justify-between items-center">
      <div className="ml-auto flex gap-4">
        <Button asChild>
        </Button>
        <Button className="text-white p-2 hover:bg-white/10 rounded-full transition-colors" aria-label="Close menu">
        <Link href="/">
                            <X className="w-6 h-6" />
                            </Link>
                        </Button>
      </div>
      </div>
            
          <h1 className="text-5xl md:text-6xl font-bold tracking-tight">Let's work together</h1>
          <p className="text-xl text-muted-foreground max-w-2xl">
            Whatever it is, I'm always up for brainstorming new ideas and diving into exciting projects—bonus points if
            there's coffee involved!
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-12 md:gap-24">
          <div className="space-y-12">
            <div>
              <h3 className="text-lg font-semibold mb-6">Where?</h3>
              <p className="text-muted-foreground mb-8">
                In-person meetings? Not my thing! But for legal reasons, here's where I live - just know, I do all my
                magic remotely, wherever my laptop and Wi-Fi take me!
              </p>
              <div className="grid grid-cols-2 gap-8">
                <div>
                  <h4 className="font-semibold mb-2">India</h4>
                  <p className="text-muted-foreground">Chennai</p>
                </div>
                <div>
                  <h4 className="font-semibold mb-2">malaysia</h4>
                  <p className="text-muted-foreground">kuala lumpur</p>
                </div>
              </div>
            </div>
            <div className="border-t pt-8" />
            <div>
              <h3 className="text-lg font-semibold mb-4">Email</h3>
              <div>
                <h4 className="text-sm text-muted-foreground mb-1">Personal</h4>
                <p>tejakarthikatwork@gmail.com</p>
              </div>
            </div>
            <div className="border-t pt-8" />
            <div>
              <h3 className="text-lg font-semibold mb-4">Follow me</h3>
              <div className="flex gap-6">
                <Link href="https://www.instagram.com/tejakarthik.gubbala/" className="text-muted-foreground hover:text-foreground">
                  <Instagram className="h-6 w-6" />
                </Link>
                <Link href="https://github.com/Imtejakarthik" className="text-muted-foreground hover:text-foreground">
                  <Github className="h-6 w-6" />
                </Link>
                <Link href="https://www.linkedin.com/in/teja-karthik-b87824259/" className="text-muted-foreground hover:text-foreground">
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
                  className="w-full px-4 py-3 rounded-lg border bg-background"
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
                  className="w-full px-4 py-3 rounded-lg border bg-background"
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
                  className="w-full px-4 py-3 rounded-lg border bg-background"
                  value={formData.company}
                  onChange={handleChange}
                />
              </div>
              <div>
                <input
                  type="tel"
                  name="phone"
                  placeholder="Phone"
                  className="w-full px-4 py-3 rounded-lg border bg-background"
                  value={formData.phone}
                  onChange={handleChange}
                />
              </div>
              <div>
                <textarea
                  name="message"
                  placeholder="Message"
                  rows={4}
                  className="w-full px-4 py-3 rounded-lg border bg-background"
                  value={formData.message}
                  onChange={handleChange}
                  required
                />
              </div>
              <button
                type="submit"
                className="bg-black text-white px-6 py-3 rounded-full hover:opacity-90 disabled:opacity-50"
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

      <footer className="border-t">
        <div className="max-w-7xl mx-auto px-4 py-16">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-16">
            <div>
              <h3 className="font-semibold mb-4">Information</h3>
              <ul className="space-y-3">
                <li>
                  <Link href="/about" className="text-muted-foreground hover:text-foreground">
                    About
                  </Link>
                </li>
                <li>
                  <Link href="/process" className="text-muted-foreground hover:text-foreground">
                    Process
                  </Link>
                </li>
                <li>
                  <Link href="/work" className="text-muted-foreground hover:text-foreground">
                    Work
                  </Link>
                </li>
              </ul>
            </div>
            <div>
              <h3 className="font-semibold mb-4">Connect</h3>
              <ul className="space-y-3">
                <li>
                  <Link href="https://www.instagram.com/tejakarthik.gubbala/" className="text-muted-foreground hover:text-foreground">
                    Instagram
                  </Link>
                </li>
                <li>
                  <Link href="https://github.com/Imtejakarthik" className="text-muted-foreground hover:text-foreground">
                    GitHub
                  </Link>
                </li>
                <li>
                  <Link href="https://www.linkedin.com/in/teja-karthik-b87824259/" className="text-muted-foreground hover:text-foreground">
                    LinkedIn
                  </Link>
                </li>
              </ul>
            </div>
            <div>
              <h3 className="font-semibold mb-4">Legal</h3>
              <ul className="space-y-3">
                <li>
                  <Link href="/legels" className="text-muted-foreground hover:text-foreground">
                    Terms & Conditions
                  </Link>
                </li>
                <li>
                  <Link href="/privacypolicy" className="text-muted-foreground hover:text-foreground">
                    Privacy Policy
                  </Link>
                </li>
              </ul>
            </div>
            <div>
              <h3 className="font-semibold mb-4">Got a project in mind?</h3>
              <p className="text-muted-foreground mb-4">
                Let's chat about how we can help you bring your ideas to life.
              </p>
              <Button variant="outline" className="border-white text-white hover:bg-white hover:text-black" asChild>
                <Link href="/contact">Connect</Link>
              </Button>
            </div>
          </div>
          <div className="flex flex-col md:flex-row justify-between items-center gap-4 pt-8 border-t">
            <div className="text-sm text-muted-foreground text-center md:text-left">
              Powered by{" "}
              <Link href="https://nextjs.org" className="hover:text-foreground">
                Next.js
              </Link>{" "}
              and{" "}
              <Link href="https://www.sanity.io" className="hover:text-foreground">
                Sanity
              </Link>
              . Styled with{" "}
              <Link href="https://tailwindcss.com" className="hover:text-foreground">
                Tailwind CSS
              </Link>{" "}
              and{" "}
              <Link href="https://www.framer.com/motion" className="hover:text-foreground">
                Framer Motion
              </Link>
            </div>
            <p className="text-sm text-gray-400 mt-4 md:mt-0">© Gubbala Teja Karthik. 2025</p>
          </div>
        </div>
      </footer>
    </>
  )
}
