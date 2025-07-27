import BestEvent from "@/components/BestEvent/BestEvent";
import EventAgenda from "@/components/EventAgenda/EventAgenda";
import HeroSection from "@/components/shared/HeroSection";
import TestimonialsCarousel from "@/components/Testimonials/TestimonialCarousel";
import PricingSection from "./../../components/Pricing/PricingSection";

export default function Home() {
  return (
    <>
      <HeroSection />
      <BestEvent />
      <EventAgenda />
      <PricingSection />
      <TestimonialsCarousel />
    </>
  );
}
