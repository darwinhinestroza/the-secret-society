import Link from "next/link";
export default function Footer() {
  return (
    <footer className="bg-[#0A0A0A] border-t border-[#C9A84C]/10 py-12">
      <div className="flex flex-col items-center gap-6 text-center">
        <p className="text-[#C9A84C] font-bold tracking-[3px] text-sm uppercase">The Secret Society</p>
        <p className="text-[#999] text-xs tracking-wider">The world&apos;s most exclusive concierge.</p>
        <div className="flex items-center gap-6">
          {["Instagram","WhatsApp","Telegram"].map((s) => (
            <a key={s} href="#" className="text-white/40 hover:text-[#C9A84C] text-xs tracking-widest uppercase transition-colors">{s}</a>
          ))}
        </div>
        <div className="w-full max-w-xl h-px bg-white/5" />
        <div className="flex flex-col md:flex-row items-center gap-4 md:gap-10 text-[#333] text-xs">
          <p>© 2025 The Secret Society. All rights reserved.</p>
          <div className="flex gap-6">
            <Link href="/privacy-policy" className="hover:text-[#C9A84C] transition-colors">Privacy Policy</Link>
            <Link href="/terms-of-service" className="hover:text-[#C9A84C] transition-colors">Terms of Service</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
