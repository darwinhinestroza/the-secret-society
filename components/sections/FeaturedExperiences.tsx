import Link from "next/link";
const experiences = [
  { city: "Miami", category: "Fine Dining", title: "Gekko Restaurant", description: "Bad Bunny's waterfront restaurant on Miami Beach. Private dining rooms available for members.", href: "#", tag: "MOST REQUESTED" },
  { city: "Mykonos", category: "Beach Club", title: "Nammos Beach Club", description: "The most exclusive beach club on Psarou Beach. VIP sunbeds and private cabanas.", href: "#", tag: "MEMBER FAVOURITE" },
  { city: "Ibiza", category: "Nightlife", title: "Pacha Ibiza", description: "The world's most iconic nightclub. Backstage access and owner tables for members.", href: "#", tag: "EXCLUSIVE ACCESS" },
];
export default function FeaturedExperiences() {
  return (
    <section className="py-24 px-10 md:px-20">
      <div className="flex flex-col items-center text-center mb-16">
        <p className="text-[#C9A84C] text-[10px] font-bold tracking-[4px] uppercase mb-4">Featured Experiences</p>
        <div className="w-10 h-px bg-[#8B0000] mb-6" />
        <h2 className="text-[#F5F0E8] font-extrabold text-4xl md:text-5xl">What We Offer</h2>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-px bg-[#C9A84C]/10 max-w-6xl mx-auto">
        {experiences.map((e) => (
          <Link key={e.title} href={e.href} className="group bg-[#0A0A0A] p-8 flex flex-col gap-4 hover:bg-[#111] transition-colors">
            <span className="text-[#8B0000] text-[9px] font-bold tracking-[2px] uppercase">{e.tag}</span>
            <div className="flex items-center gap-2">
              <span className="text-[#C9A84C]/60 text-[10px] tracking-widest uppercase">{e.city}</span>
              <div className="w-px h-3 bg-[#C9A84C]/20" />
              <span className="text-[#C9A84C]/60 text-[10px] tracking-widest uppercase">{e.category}</span>
            </div>
            <h3 className="text-[#F5F0E8] font-bold text-xl group-hover:text-[#C9A84C] transition-colors">{e.title}</h3>
            <p className="text-[#999] text-sm font-light leading-relaxed">{e.description}</p>
            <div className="mt-auto pt-4 border-t border-[#C9A84C]/10 flex items-center justify-between">
              <span className="text-[#C9A84C] text-[10px] tracking-[2px] uppercase font-bold">View Details</span>
              <span className="text-[#C9A84C]">→</span>
            </div>
          </Link>
        ))}
      </div>
    </section>
  );
}
