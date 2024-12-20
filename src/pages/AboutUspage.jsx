import Layouts from './Layouts';
import AboutUsSection from '../components/AboutUsSection';
import Footer from '../components/Footer';

export default function AboutUsPage() {
  return (
    <div className="bg-dark-eiron">
      <Layouts title="Eiron - About Us">
        <AboutUsSection />
        <Footer />
      </Layouts>
    </div>
  );
}
