import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import Hero from "@/components/home/Hero";
import FeaturedJobs from "@/components/home/FeaturedJobs";
import Categories from "@/components/home/Categories";
import HowItWorks from "@/components/home/HowItWorks";
import CTA from "@/components/home/CTA";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <main>
        <Hero />
        <FeaturedJobs />
        <Categories />
        <HowItWorks />
        <CTA />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
