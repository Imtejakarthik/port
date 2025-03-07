// components/Header.tsx
"use client";

import Link from "next/link";
import Image from "next/image";
import { MenuIcon } from "lucide-react";
import { Button } from "@/components/ui/button";

interface HeaderProps {
  onMenuClick: () => void;
}

export default function Header({ onMenuClick }: HeaderProps) {
  return (
    <header className="p-8 flex justify-between items-center">
      <Link href="/">
        <Image src="/logo.png" alt="Logo" width={50} height={50} />
      </Link>
      <div className="flex items-center gap-4">
        <Button
          asChild
          className="bg-black text-white hover:bg-black/80 px-6 py-2 rounded-full text-sm transition-colors"
        >
          <Link href="/contact">Contact Me</Link>
        </Button>
        <button
          onClick={onMenuClick}
          className="p-2 text-black hover:bg-gray-100 rounded-full transition-colors"
          title="Menu"
        >
          <MenuIcon className="w-6 h-6" />
        </button>
      </div>
    </header>
  );
}