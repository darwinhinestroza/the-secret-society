import Link from "next/link";

interface Service { label: string; href: string; }
interface CityServicesProps { city: string; services: Service[]; }

export default function CityServices({ city, services }: CityServicesProps) {
  return (
    <section className="py-24 px-10 md:px-20">
      <div className="flex flex-col items-center text-center mb-16">
        <p className="text-[#C9A84C] text-[10px] font-bold tracking-[4px] uppercase mb-4">What We Offer</p>
        <div className="w-10 h-px bg-[#8B0000] mb-6" />
        <h2 className="text-[#F5F0E8] font-extrabold text-4xl md:text-5xl">{city} Services</h2>
      </div>
      <div className="grid grid-cols-2 md:grid-cols-3 gap-px bg-[#C9A84C]/10 max-w-5xl mx-auto">
        {services.map((s) => (
          <Link key={s.label} href={s.href}
            className="group bg-[#0A0A0A] p-10 flex flex-col gap-4 hover:bg-[#111] transition-colors">
            <div className="w-8 h-px bg-[#C9A84C]/30 group-hover:bg-[#C9A84C] transition-colors" />
            <h3 className="text-[#F5F0E8] font-bold text-lg group-hover:text-[#C9A84C] transition-colors">{s.label}</h3>
            <div className="mt-auto flex items-center justify-between">
              <span className="text-[#C9A84C]/50 group-hover:text-[#C9A84C] text-[10px] tracking-[2px] uppercase font-bold transition-colors">Explore</span>
              <span className="text-[#C9A84C]/50 group-hover:text-[#C9A84C] transition-colors">→</span>
            </div>
          </Link>
        ))}
      </div>
    </section>
  );
}
