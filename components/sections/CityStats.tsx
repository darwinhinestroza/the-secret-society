interface Stat { label: string; value: string; }
interface CityStatsProps { stats: Stat[]; }

export default function CityStats({ stats }: CityStatsProps) {
  return (
    <div className="bg-[#0A0A0A] border-y border-[#C9A84C]/10">
      <div className="grid grid-cols-2 md:grid-cols-4 divide-x divide-[#C9A84C]/10">
        {stats.map((s) => (
          <div key={s.label} className="flex flex-col items-center justify-center py-8 px-6 text-center gap-1">
            <span className="text-[#C9A84C] font-extrabold text-3xl">{s.value}</span>
            <span className="text-[#999] text-[10px] tracking-[2px] uppercase font-bold">{s.label}</span>
          </div>
        ))}
      </div>
    </div>
  );
}
