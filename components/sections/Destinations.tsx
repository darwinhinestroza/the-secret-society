import Link from "next/link";
const cities = [
  { name: "Miami", sub: "Florida, USA", href: "/miami" },
  { name: "New York", sub: "New York, USA", href: "/new-york" },
  { name: "Mykonos", sub: "Greece", href: "/mykonos" },
  { name: "Ibiza", sub: "Spain", href: "/ibiza" },
  { name: "Paris", sub: "France", href: "/paris" },
  { name: "Las Vegas", sub: "Nevada, USA", href: "/las-vegas" },
];
export default function Destinations() {
  return (
    <section className="py-24 px-10 md:px-20 bg-[#0A0A0A]">
      <div className="flex flex-col items-center text-center mb-16">
        <p className="text-[#C9A84C] text-[10px] font-bold tracking-[4px] uppercase mb-4">Our Destinations</p>
        <div className="w-10 h-px bg-[#8B0000] mb-6" />
        <h2 className="text-[#F5F0E8] font-extrabold text-4xl md:text-5xl">Six Cities. One Concierge.</h2>
      </div>
      <div className="grid grid-cols-2 md:grid-cols-3 gap-px bg-[#C9A84C]/10 max-w-5xl mx-auto">
        {cities.map((c) => (
          <Link key={c.name} href={c.href} className="group bg-[#050505] relative overflow-hidden aspect-video flex flex-col justify-end p-8 hover:bg-[#111] transition-colors">
            <div className="absolute inset-0 bg-gradient-to-t from-black/90 to-transparent" />
            <div className="relative z-10">
              <p className="text-[#C9A84C]/60 text-[9px] tracking-[3px] uppercase mb-1">{c.sub}</p>
              <h3 className="text-[#F5F0E8] font-bold text-2xl group-hover:text-[#C9A84C] transition-colors">{c.name}</h3>
            </div>
          </Link>
        ))}
      </div>
      <div className="flex justify-center mt-8">
        <Link href="/the-globe" className="text-[#C9A84C]/60 hover:text-[#C9A84C] text-[10px] tracking-[3px] uppercase font-bold transition-colors">+ Explore The Globe — 14 More Cities →</Link>
      </div>
    </section>
  );
}
