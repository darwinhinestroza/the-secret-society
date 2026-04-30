import Navigation from "@/components/layout/Navigation";
import Footer from "@/components/layout/Footer";
import CityHero from "@/components/sections/CityHero";
import CityStats from "@/components/sections/CityStats";
import CityServices from "@/components/sections/CityServices";
import CityVIP from "@/components/sections/CityVIP";
import InquirySection from "@/components/sections/InquirySection";

export default function MiamiPage() {
  return (
    <>
      <Navigation />
      <main className="pt-[80px]">
        <CityHero
          city="Miami"
          country="Florida, USA"
          description="From Star Island mega-mansions to Biscayne Bay superyachts, Miami is where luxury lives without apology."
        />
        <CityStats stats={[
          { label: "Venues", value: "180+" },
          { label: "Restaurants", value: "40+" },
          { label: "Nightclubs", value: "12+" },
          { label: "Villas", value: "30+" },
        ]} />
        <CityServices city="miami" services={[
          { label: "Fine Dining",    href: "/miami/fine-dining" },
          { label: "Nightclubs",     href: "/miami/nightclubs" },
          { label: "Day Clubs",      href: "/miami/day-clubs" },
          { label: "Villa Rentals",  href: "/miami/villa-rentals" },
          { label: "Yacht Charters", href: "/miami/yacht-charters" },
          { label: "Transportation", href: "/miami/transportation" },
        ]} />
        <CityVIP city="Miami" packages={[
          { name: "The Ultimate Miami Night",    items: ["72ft Sport Yacht — Biscayne Bay Sunset", "Dinner at Gekko", "VIP Table at Club LIV"] },
          { name: "Star Island Weekend",         items: ["Star Island Estate — 3 Nights", "Rolls-Royce Cullinan — Full Weekend", "Private Chef Included"] },
          { name: "Miami Beach Circuit",         items: ["Day Club at Nikki Beach", "Dinner at Zuma Miami", "VIP Entry — Story or Club Space"] },
          { name: "Biscayne Bay Superyacht Day", items: ["120ft Superyacht — Full Day Charter", "Gourmet Catering & Open Bar", "Water Toys & Crew of 8"] },
          { name: "Miami Art Basel Experience",  items: ["Fisher Island Residence — 5 Nights", "Private Art Fair Curator Access", "Armored Escalade — Full Week"] },
          { name: "The Full Miami Experience",   items: ["Indian Creek Villa — 1 Week", "Helicopter Transfer & Superyacht", "Concierge: Dining, Clubs & Yachts"] },
        ]} />
        <InquirySection />
      </main>
      <Footer />
    </>
  );
}
