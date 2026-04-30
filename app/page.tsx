import Navigation from "@/components/layout/Navigation";
import Footer from "@/components/layout/Footer";
import HomeHero from "@/components/sections/HomeHero";
import DestStrip from "@/components/sections/DestStrip";
import FeaturedExperiences from "@/components/sections/FeaturedExperiences";
import Destinations from "@/components/sections/Destinations";
import MembershipSection from "@/components/sections/MembershipSection";
import InquirySection from "@/components/sections/InquirySection";

export default function Home() {
  return (
    <>
      <Navigation />
      <main className="pt-[80px]">
        <HomeHero />
        <DestStrip />
        <FeaturedExperiences />
        <Destinations />
        <MembershipSection />
        <InquirySection />
      </main>
      <Footer />
    </>
  );
}
