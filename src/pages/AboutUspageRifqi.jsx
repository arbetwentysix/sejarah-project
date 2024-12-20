import Layouts from './Layouts';
import Footer from '../components/Footer';
import { FaXTwitter, FaFacebookF, FaInstagram } from 'react-icons/fa6';
import Rifqi from '../assets/rifqi.jpg';

export default function AboutUspageRifqi() {
  return (
    <div className="bg-dark-eiron">
      <Layouts title="Eiron - About Us | Jabbar">
        <div className="mb-16">
          <div className="mb-12">
            <h1 className="text-center text-3xl text-slate-100">M. Rifqi O. N.</h1>
            <p className="text-center text-gray-400">Raja Sosis</p>
          </div>
          <div className="flex flex-col-reverse lg:flex-row lg:justify-between gap-6">
            <div className="flex flex-col gap-4 text-lg lg:w-[35%]">
              <div>
                <p className="text-gray-400">Level</p>
                <p className="text-slate-100">Menengah Tengah - Tengah</p>
              </div>
              <div>
                <p className="text-gray-400">Category</p>
                <p className="text-slate-100">Penyayang Chinese</p>
              </div>
              <div>
                <p className="text-gray-400">Website</p>
                <p className="text-slate-100">https://mrifqion.com</p>
              </div>
              <div>
                <p className="text-gray-400 mb-2">Social Media</p>
                <div className="flex gap-4 text-slate-100">
                  <FaXTwitter />
                  <FaFacebookF />
                  <FaInstagram />
                </div>
              </div>
            </div>
            <div className="flex flex-col lg:flex-row gap-3 lg:w-[65%] lg:gap-16">
              <img src={Rifqi} alt="jabbar-kntl" className="lg:w-[300px]" />
              <div>
                <p className="text-gray-400 text-lg">Bio</p>
                <p className="text-slate-100">
                  Saya adalah orang yang penuh semangat terlebih lagi dalam hal membagikan sosis kepada chinese di bumi ini. Saya tidak pernah ketinggalan dalam
                  menyayangi chinese terlebih lagi jika orang chinese tersebut berjiwa introvert.
                </p>
              </div>
            </div>
          </div>
        </div>
        <Footer />
      </Layouts>
    </div>
  );
}
