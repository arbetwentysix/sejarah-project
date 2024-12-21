import Jabbar from '../assets/jabbar.png';
import Edi from '../assets/edie.jpg';
import Rifqi from '../assets/rifqi.jpg';
import { PiArrowBendDownRightBold } from 'react-icons/pi';

export default function AboutUsSection() {
  return (
    <div className="min-h-screen mb-24">
      <h1 className="text-slate-100 text-3xl font-semibold mb-10">Tentang Kami</h1>
      <div className="flex flex-col gap-6 lg:flex-row lg:justify-between">
        <div>
          <div className="lg:w-[300px] lg:h-[450px] overflow-hidden mb-4">
            <img src={Jabbar} className="mb-3 lg:w-[900px] scale-[1.1] translate-y-4 hover:scale-[1.4] transition" alt="jabbar" />
          </div>
          <p className="text-slate-100 text-lg font-semibold">Ilham Jabbar</p>
          <p className="text-gray-500 mb-3">Sipaling UI dan Designer</p>
          <div className="text-slate-100 flex items-center gap-2 text-sm">
            <PiArrowBendDownRightBold />
            <a href="/about/jabbar" className="bg-gray-800 px-3 py-1 rounded-lg">
              Explore
            </a>
          </div>
        </div>
        <div>
          <div className="lg:w-[300px] lg:h-[450px] overflow-hidden mb-4">
            <img src={Edi} className="mb-3 scale-[1.7] translate-y-[100px] hover:scale-[1.9] duration-300 transition" alt="edi" />
          </div>
          <p className="text-slate-100 text-lg font-semibold">Edi Nugroho</p>
          <p className="text-gray-500 mb-3">Kuli Ketik</p>
          <div className="text-slate-100 flex items-center gap-2 text-sm">
            <PiArrowBendDownRightBold />
            <a href="/about/edi" className="bg-gray-800 px-3 py-1 rounded-lg">
              Explore
            </a>
          </div>
        </div>
        <div>
          <div className="lg:w-[300px] lg:h-[450px] overflow-hidden mb-4">
            <img src={Rifqi} className="mb-3 hover:scale-[1.2] transition" alt="rifqi" />
          </div>
          <p className="text-slate-100 text-lg font-semibold">M. Rifqi O. N.</p>
          <p className="text-gray-500 mb-3">Raja Sosis</p>
          <div className="text-slate-100 flex items-center gap-2 text-sm">
            <PiArrowBendDownRightBold />
            <a href="/about/rifqi" className="bg-gray-800 px-3 py-1 rounded-lg">
              Explore
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
