import Link from "next/link";
export default function InquirySection() {
  return (
    <section className="py-24 px-10 md:px-20 bg-[#0A0A0A] border-t border-[#C9A84C]/10">
      <div className="max-w-2xl mx-auto flex flex-col items-center text-center gap-8">
        <p className="text-[#C9A84C] text-[10px] font-bold tracking-[4px] uppercase">Bespoke Requests</p>
        <div className="w-10 h-px bg-[#8B0000]" />
        <h2 className="text-[#F5F0E8] font-extrabold text-4xl md:text-5xl">Can&apos;t Find What<br />You&apos;re Looking For?</h2>
        <p className="text-[#999] text-sm font-light leading-relaxed">Our catalogue covers thousands of experiences — but if you need something beyond what&apos;s listed, tell us. We will make it happen.</p>
        <Link href="/special-request" className="bg-[#C9A84C] text-black text-xs font-bold tracking-[2px] uppercase px-10 py-4 hover:bg-[#C9A84C]/90 transition-colors">Submit a Special Request</Link>
      </div>
    </section>
  );
}
