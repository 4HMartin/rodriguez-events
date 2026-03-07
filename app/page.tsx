import AboutSection from "@/components/home-view/AboutSection";
import CTABandSection from "@/components/home-view/CTABandSection";
import HeroSection from "@/components/home-view/HeroSection";
import PortfolioSection from "@/components/home-view/PortfolioSection";
import ReviewsSection from "@/components/home-view/ReviewsSection";
import ServicesSection from "@/components/home-view/ServicesSection";
import TrustBanner from "@/components/home-view/TrustBanner";
import SocialLinks from "@/components/SocialLinks";

export default function Home() {
  return (
    <main className="min-h-screen w-full">
      <HeroSection />
      <TrustBanner />
      <ServicesSection />
      <PortfolioSection />
      <AboutSection />
      <ReviewsSection />
      <CTABandSection />
      <SocialLinks />
    </main>
  );
}
