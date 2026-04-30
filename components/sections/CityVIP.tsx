import Link from "next/link";

interface Package { name: string; items: string[]; }
interface CityVIPProps { city: string; packages: Package[]; }

export default function CityVIP({ city, packages }: CityVIPProps) {
  return (
    <section className="py-24 px-10 md:px-20 bg-[#0A0A0A]">
      <div className="flex flex-col items-center text-center mb-16">
        <p className="text-[#C9A84C] text-[10px] font-bold tracking-[4px] uppercase mb-4">Curated Packages</p>
        <div className="w-10 h-px bg-[#8B0000] mb-6" />
        <h2 className="text-[#F5F0E8] font-extrabold text-4xl md:text-5xl">{city} VIP Packages</h2>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-px bg-[#C9A84C]/10 max-w-6xl mx-auto">
        {packages.map((pkg) => (
          <div key={pkg.name} className="bg-[#050505] p-8 flex flex-col gap-4 border-t-2 border-t-transparent hover:border-t-[#C9A84C] transition-all">
            <span className="text-[#8B0000] text-[9px] font-bold tracking-[2px] uppercase">{city.toUpperCase()}</span>
            <h3 className="text-[#F5F0E8] font-bold text-lg">{pkg.name}</h3>
            <div className="w-8 h-px bg-[#C9A84C]/20" />
            <ul className="flex flex-col gap-2 flex-1">
              {pkg.items.map((item) => (
                <li key={item} className="flex items-start gap-2 text-[#999] text-sm font-light">
                  <span className="text-[#C9A84C] text-xs mt-0.5">•</span>{item}
                </li>
              ))}
            </ul>
            <div className="pt-4 border-t border-[#C9A84C]/10">
              <Link href="/enquiry-cart" className="text-[#C9A84C] text-[10px] tracking-[2px] uppercase font-bold hover:text-white transition-colors">
                Inquire →
              </Link>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
