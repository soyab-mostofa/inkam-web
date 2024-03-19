import FAQs from "@/components/FAQs";
import GettingStarted from "@/components/GettingStarted";
import HeroSection from "@/components/HeroSection";
import OurClients from "@/components/OurClients";
import PlatformStats from "@/components/PlatformStats";
import StartingInkam from "@/components/StartingInkam";
import Testimony from "@/components/Testimony";

export default function Home() {
  return (
    <div className="bg-white">
      <HeroSection />
      <GettingStarted />
      <StartingInkam />
      <PlatformStats />
      <OurClients />
      <FAQs />
      <Testimony />
    </div>
  );
}
