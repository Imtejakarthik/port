"use client"

import Link from "next/link"
import { MenuIcon } from "lucide-react"

interface HeaderProps {
  onMenuClick: () => void
}

export default function Header({ onMenuClick }: HeaderProps) {
  return (
    <header className="p-8 flex justify-between items-center">
      <Link href="/" className="text-2xl font-bold text-black">
        TK.
      </Link>
      <div className="flex items-center gap-4">
      <Link href="/contact" className="bg-black text-white px-6 py-2 rounded-full text-sm hover:bg-gray-800 transition-colors smooth-transition">
  Contact me
</Link>
        <button onClick={onMenuClick} className="p-2 hover:bg-gray-100 rounded-full transition-colors" title="Menu">
          <MenuIcon className="w-6 h-6 text-black" />
        </button>
      </div>
    </header>
  )
}
