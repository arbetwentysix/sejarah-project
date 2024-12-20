import { FaXTwitter, FaFacebookF, FaInstagram } from 'react-icons/fa6';
import Candi from '../assets/candi.jpg';

export default function HeroSection() {
  return (
    <div className="flex flex-col-reverse lg:justify-between lg:flex-row lg:items-center mt-8 text-slate-200 min-h-screen">
      <div>
        <h1 className="text-5xl font-bold w-[100px]">
          Ayo Jelajahi <span className="text-yellow-eiron">Sejarahmu!</span>
        </h1>
        <p className="text-md mt-6 lg:w-[400px]">Belajar tentang Sejarah Indonesia, kedalaman kehidupan, dan lingkungan sekitarmu.</p>
        <div className="flex gap-8 mt-6 font-semibold text-sm">
          <button>About</button>
          <button className="py-2 px-3 text-dark-eiron  bg-yellow-eiron rounded-full">Get Started</button>
        </div>
        <div className="mt-6">
          <p className="text-sm mb-3 text-slate-400">Our Social Media</p>
          <div className="flex gap-4">
            <FaXTwitter />
            <FaFacebookF />
            <FaInstagram />
          </div>
        </div>
      </div>
      <img src={Candi} alt="candi" className="rounded-full lg:w-[400px] mb-16" />
    </div>
  );
}
