import HeroSection from "./components/HeroSection";
import Navbar from "./components/Navbar";
import ProjectsSection from "./components/ProjectsSection";
import EmailSection from "./components/EmailSection";
import Footer from "./components/Footer";
import AchievementsSection from "./components/AchievementsSection";
import FAQSection from "./components/FAQSection";
import PartnersSection from "./components/PartnersSection";
import BestLoansSection from "./components/BestLoansSection";
import ScrollToTop from "./components/ScrollToTop";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col bg-white">
      <Navbar />
      <HeroSection />
      <PartnersSection />
      <BestLoansSection />
      <AchievementsSection />
      <ProjectsSection />
      <FAQSection />
      <EmailSection />
      <Footer />
      <ScrollToTop />
    </main>
  );
}
