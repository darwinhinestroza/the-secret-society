import Link from "next/link";
export default function HomeHero() {
  return (
    <section className="relative w-full overflow-hidden h-[470px]">
      <div className="absolute inset-0 bg-[#111]" />
      <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/40 to-transparent" />
      <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
      <div className="relative z-10 h-full flex flex-col justify-center px-10 md:px-20 max-w-3xl">
        <p className="text-[#C9A84C] text-[10px] font-bold tracking-[4px] uppercase mb-4">Private Concierge</p>
        <h1 className="text-[#F5F0E8] font-extrabold text-5xl md:text-6xl leading-tight mb-6">
          The World&apos;s Most<br /><span className="text-[#C9A84C]">Exclusive</span> Access
        </h1>
        <p className="text-white/60 text-base font-light leading-relaxed mb-10 max-w-lg">
          Fine dining, nightlife, yachts, villas and private experiences across the world&apos;s most desirable destinations.
        </p>
        <div className="flex items-center gap-4 flex-wrap">
          <Link href="/membership" className="bg-[#C9A84C] text-black text-xs font-bold tracking-[2px] uppercase px-8 py-4 hover:bg-[#C9A84C]/90 transition-colors">Become a Member</Link>
          <Link href="/special-request" className="border border-[#C9A84C]/40 text-white/80 text-xs font-bold tracking-[2px] uppercase px-8 py-4 hover:border-[#C9A84C] hover:text-[#C9A84C] transition-all">Make a Request</Link>
        </div>
      </div>
    </section>
  );
}
