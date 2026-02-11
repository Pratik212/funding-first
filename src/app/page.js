import Image from "next/image";
import HeroSection from "./components/HeroSection";
import Navbar from "./components/Navbar";
import AboutSection from "./components/AboutSection";
import ProjectsSection from "./components/ProjectsSection";
import EmailSection from "./components/EmailSection";
import Footer from "./components/Footer";
import AchievementsSection from "./components/AchievementsSection";
import WhyUs from "./components/WhyUs";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col bg-[#121212]">
      <Navbar />
      <div className="container z-0 mt-24 mx-auto px-4 md:px-12 py-4">
        <HeroSection />
        <AchievementsSection />
        <ProjectsSection />
        <WhyUs />
        <AboutSection />

        <EmailSection />
      </div>
      <Footer />
    </main>
  );
}
