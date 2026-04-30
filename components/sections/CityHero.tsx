interface CityHeroProps {
  city: string;
  country: string;
  description: string;
}

export default function CityHero({ city, country, description }: CityHeroProps) {
  return (
    <section className="relative w-full overflow-hidden h-[820px]">
      {/* Background placeholder */}
      <div className="absolute inset-0 bg-[#0A0A0A]" />
      <div className="absolute inset-0 bg-gradient-to-r from-black/70 via-black/30 to-transparent" />
      <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent" />

      {/* City name — giant watermark */}
      <div className="absolute inset-0 flex items-center justify-center pointer-events-none select-none">
        <span className="text-white/5 font-extrabold uppercase"
          style={{ fontSize: "clamp(80px, 18vw, 260px)", letterSpacing: "-4px" }}>
          {city}
        </span>
      </div>

      {/* Content */}
      <div className="relative z-10 h-full flex flex-col justify-end px-10 md:px-20 pb-20 max-w-3xl">
        <p className="text-[#C9A84C] text-[10px] font-bold tracking-[4px] uppercase mb-3">{country}</p>
        <h1 className="text-[#F5F0E8] font-extrabold text-6xl md:text-7xl leading-none mb-6">{city}</h1>
        <p className="text-white/60 text-base font-light leading-relaxed max-w-xl">{description}</p>
      </div>
    </section>
  );
}
