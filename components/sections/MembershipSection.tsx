import Link from "next/link";
const tiers = [
  { name: "The Passport", tag: "Entry", highlight: false, features: ["Dedicated concierge", "12-hour response time", "All 6 cities", "Up to 2 concurrent enquiries"] },
  { name: "The Cipher", tag: "Most Popular", highlight: true, features: ["Senior concierge 24/7", "4-hour response time", "Unlimited enquiries", "Priority access"] },
  { name: "The Obsidian", tag: "Most Exclusive", highlight: false, features: ["Founding team direct", "Zero response time", "Global access", "No limitations"] },
];
export default function MembershipSection() {
  return (
    <section className="py-24 px-10 md:px-20">
      <div className="flex flex-col items-center text-center mb-16">
        <p className="text-[#C9A84C] text-[10px] font-bold tracking-[4px] uppercase mb-4">Membership</p>
        <div className="w-10 h-px bg-[#8B0000] mb-6" />
        <h2 className="text-[#F5F0E8] font-extrabold text-4xl md:text-5xl mb-4">Choose Your Tier</h2>
        <p className="text-[#999] text-sm font-light max-w-lg">No pricing on our website. All tiers are application-only.</p>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-px bg-[#C9A84C]/10 max-w-5xl mx-auto">
        {tiers.map((t) => (
          <div key={t.name} className={`flex flex-col p-10 gap-6 ${t.highlight ? "bg-[#111]" : "bg-[#0A0A0A]"}`}>
            <span className={`text-[9px] font-bold tracking-[2px] uppercase ${t.highlight ? "text-[#C9A84C]" : "text-[#8B0000]"}`}>{t.tag}</span>
            <h3 className="text-[#F5F0E8] font-bold text-2xl">{t.name}</h3>
            <div className="w-8 h-px bg-[#C9A84C]/30" />
            <ul className="flex flex-col gap-3 flex-1">
              {t.features.map((f) => (
                <li key={f} className="flex items-start gap-3 text-[#999] text-sm font-light">
                  <span className="text-[#C9A84C] mt-0.5">—</span>{f}
                </li>
              ))}
            </ul>
            <Link href="/membership" className={`mt-4 text-center text-xs font-bold tracking-[2px] uppercase py-4 transition-all ${t.highlight ? "bg-[#C9A84C] text-black hover:bg-[#C9A84C]/90" : "border border-[#C9A84C]/30 text-[#C9A84C] hover:border-[#C9A84C]"}`}>Apply Now</Link>
          </div>
        ))}
      </div>
    </section>
  );
}
