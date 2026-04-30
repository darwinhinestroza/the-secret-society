import Link from "next/link";
const cities = [
  { label: "Miami", href: "/miami" },
  { label: "New York", href: "/new-york" },
  { label: "Mykonos", href: "/mykonos" },
  { label: "Ibiza", href: "/ibiza" },
  { label: "Paris", href: "/paris" },
  { label: "Las Vegas", href: "/las-vegas" },
  { label: "The Globe", href: "/the-globe" },
];
export default function DestStrip() {
  return (
    <div className="bg-[#0A0A0A] border-y border-[#C9A84C]/10 py-4 overflow-x-auto">
      <div className="flex items-center justify-center gap-8 px-10 min-w-max mx-auto">
        {cities.map((c, i) => (
          <div key={c.label} className="flex items-center gap-8">
            <Link href={c.href} className="text-white/50 hover:text-[#C9A84C] text-[10px] font-bold tracking-[3px] uppercase transition-colors whitespace-nowrap">{c.label}</Link>
            {i < cities.length - 1 && <div className="w-px h-3 bg-[#C9A84C]/20" />}
          </div>
        ))}
      </div>
    </div>
  );
}
