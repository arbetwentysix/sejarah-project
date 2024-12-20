import Layouts from './Layouts';
import HeroSection from '../components/HeroSection';
import AboutSection from '../components/AboutSection';
import Footer from '../components/Footer';
import ArtsSection from '../components/ArtsSection';
import SubscriptionSection from '../components/SubscriptionSection';
import ArticlesSection from '../components/ArticlesSection';

export default function HomePage() {
  return (
    <div className="bg-dark-eiron">
      <Layouts title="Eiron - Selamat Datang!">
        <HeroSection />
        <AboutSection />
        <ArticlesSection />
        <ArtsSection />
        <SubscriptionSection />
        <Footer />
      </Layouts>
    </div>
  );
}
