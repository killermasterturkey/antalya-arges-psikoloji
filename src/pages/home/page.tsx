import { motion } from 'framer-motion';
import Header from '../../components/feature/Header';
import Footer from '../../components/feature/Footer';
import CallBanner from '../../components/feature/CallBanner';
import HeroSection from './components/HeroSection';
import ProcessSection from './components/ProcessSection';
import WhyArgesSection from './components/WhyArgesSection';
import ServicesPreview from './components/ServicesPreview';
import TeamSection from './components/TeamSection';
import TestimonialsSection from './components/TestimonialsSection';
import BlogSection from './components/BlogSection';

const HomePage = () => {
  return (
    <div className="min-h-screen bg-cream pb-20 lg:pb-0">
      <Header />
      <CallBanner />
      
      <main>
        <HeroSection />
        <ProcessSection />
        <WhyArgesSection />
        <ServicesPreview />
        <TeamSection />
        <TestimonialsSection />
        <BlogSection />
      </main>

      <Footer />
    </div>
  );
};

export default HomePage;