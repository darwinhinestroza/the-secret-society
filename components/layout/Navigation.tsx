"use client";
import Link from "next/link";
import { useState } from "react";

const cities = [
  { label: "Miami", href: "/miami" },
  { label: "New York", href: "/new-york" },
  { label: "Mykonos", href: "/mykonos" },
  { label: "Ibiza", href: "/ibiza" },
  { label: "Paris", href: "/paris" },
  { label: "Las Vegas", href: "/las-vegas" },
  { label: "The Globe", href: "/the-globe" },
];

export default function Navigation() {
  const [open, setOpen] = useState(false);
  return (
    <nav className="fixed top-0 left-0 right-0 z-50 h-[80px] bg-[#050505] border-b border-[#C9A84C]/15 flex items-center justify-between px-10">
      <Link href="/" className="text-[#C9A84C] font-bold tracking-[3px] text-sm uppercase">The Secret Society</Link>
      <div className="hidden lg:flex items-center gap-6">
        {cities.map((c) => (
          <Link key={c.href} href={c.href} className="text-white/70 hover:text-[#C9A84C] text-xs tracking-widest uppercase transition-colors">{c.label}</Link>
        ))}
        <div className="w-px h-4 bg-[#C9A84C]/20 mx-2" />
        <Link href="/about" className="text-white/70 hover:text-[#C9A84C] text-xs tracking-widest uppercase transition-colors">About</Link>
        <Link href="/membership" className="text-[#C9A84C] border border-[#C9A84C]/40 hover:bg-[#C9A84C]/10 text-xs tracking-widest uppercase px-4 py-2 transition-all">Membership</Link>
      </div>
      <button className="lg:hidden flex flex-col gap-1.5" onClick={() => setOpen(!open)}>
        <span className={`block w-6 h-px bg-white transition-all ${open ? "rotate-45 translate-y-2" : ""}`} />
        <span className={`block w-6 h-px bg-white transition-all ${open ? "opacity-0" : ""}`} />
        <span className={`block w-6 h-px bg-white transition-all ${open ? "-rotate-45 -translate-y-2" : ""}`} />
      </button>
      {open && (
        <div className="absolute top-[80px] left-0 right-0 bg-[#050505] border-t border-[#C9A84C]/15 flex flex-col p-8 gap-6 lg:hidden">
          {cities.map((c) => (
            <Link key={c.href} href={c.href} onClick={() => setOpen(false)} className="text-white/70 hover:text-[#C9A84C] text-xs tracking-widest uppercase">{c.label}</Link>
          ))}
          <div className="w-full h-px bg-[#C9A84C]/15" />
          <Link href="/about" onClick={() => setOpen(false)} className="text-white/70 text-xs tracking-widest uppercase">About</Link>
          <Link href="/membership" onClick={() => setOpen(false)} className="text-[#C9A84C] text-xs tracking-widest uppercase">Membership</Link>
        </div>
      )}
    </nav>
  );
}
