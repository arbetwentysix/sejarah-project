import Layouts from './Layouts';
import Footer from '../components/Footer';
import { FaRegHeart } from 'react-icons/fa';
import Art1 from '../assets/no.jpg';
import Art2 from '../assets/borobudur-1.jpg';
import Art3 from '../assets/keris.jpg';
import Art4 from '../assets/wayang.jpg';
import Art5 from '../assets/prambanan.jpg';
import Art6 from '../assets/gerbang.jpg';

export default function Contactpage() {
  return (
    <div className="bg-dark-eiron">
      <Layouts title="Eiron - Gallery">
        <h1 className="text-center text-3xl text-slate-100 mb-10">
          Explore Our <span className="text-yellow-eiron">Gallery</span>
        </h1>
        <div className="flex flex-col gap-4 lg:gap-24 mb-28">
          <div className="flex flex-col gap-4 lg:grid lg:grid-cols-3 lg:gap-0">
            <div className="text-slate-100">
              <div className="mb-3 lg:min-h-[450px] lg:max-h-[450px] lg:overflow-hidden">
                <img src={Art1} alt="art" className="lg:scale-[1.5] lg:hover:scale-[1.7] lg:transition" />
              </div>
              <p>The Face</p>
              <p>
                <FaRegHeart className="inline" /> 26K
              </p>
            </div>
            <div className="text-slate-100">
              <div className="mb-3 lg:min-h-[450px] lg:max-h-[450px] lg:overflow-hidden">
                <img src={Art2} alt="art" className="lg:scale-[1.5] lg:hover:scale-[1.7] lg:transition" />
              </div>
              <p>Borobudur</p>
              <p>
                <FaRegHeart className="inline" /> 22K
              </p>
            </div>
            <div className="text-slate-100">
              <div className="mb-3 lg:min-h-[450px] lg:max-h-[450px] lg:overflow-hidden">
                <img src={Art3} alt="art" className="w-full lg:hover:scale-[1.2] lg:transition" />
              </div>
              <p>Keris</p>
              <p>
                <FaRegHeart className="inline" /> 12K
              </p>
            </div>
          </div>
          <div>
            <div className="flex flex-col gap-4 lg:grid lg:grid-cols-3 lg:gap-0">
              <div className="text-slate-100">
                <div className="mb-3 lg:min-h-[450px] lg:max-h-[450px] lg:overflow-hidden">
                  <img src={Art4} alt="art" className="lg:scale-[1.5] lg:hover:scale-[1.7] lg:transition" />
                </div>
                <p>Wayang</p>
                <p>
                  <FaRegHeart className="inline" /> 26K
                </p>
              </div>
              <div className="text-slate-100">
                <div className="mb-3 lg:min-h-[450px] lg:max-h-[450px] lg:overflow-hidden">
                  <img src={Art5} alt="art" className="lg:scale-[1.2] lg:hover:scale-[1.5] lg:transition" />
                </div>
                <p>Prambanan</p>
                <p>
                  <FaRegHeart className="inline" /> 22K
                </p>
              </div>
              <div className="text-slate-100">
                <div className="mb-3 lg:min-h-[450px] lg:max-h-[450px] lg:overflow-hidden">
                  <img src={Art6} alt="art" className="w-full lg:scale-[1.2] lg:hover:scale-[1.5] lg:transition" />
                </div>
                <p>Borobudur</p>
                <p>
                  <FaRegHeart className="inline" /> 12K
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
