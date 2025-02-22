"use client";
import ContactSection from "@/components/contact-section";
import { useRef } from "react";

export default function ContactPage() {
  const contactSectionRef = useRef<HTMLDivElement>(null);

  return (
    <main>
      <div ref={contactSectionRef}>
        <ContactSection />
      </div>
    </main>
  );
}
