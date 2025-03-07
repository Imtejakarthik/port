import Link from "next/link"

export function Logo() {
  return (
    <Link href="/" className="flex items-center gap-2 hover:opacity-90 transition-opacity">
      <img src="/logo.png" alt="Logo" className="h-6 w-6" />
     </Link>
  )
}

