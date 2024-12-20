import Gunung from '../assets/gunung.jpg';

export default function AboutSection() {
  return (
    <div className="flex flex-col lg:justify-between lg:flex-row-reverse lg:items-center mt-8 text-slate-200 min-h-screen">
      <div>
        <p className="text-sm mt-24 lg:mt-0 mb-3 text-slate-400">Tentang Kami</p>
        <h2 className="text-2xl mb-3 font-bold lg:w-[400px]">
          Selalu memberikan informasi yang <span className="text-yellow-eiron">terbaik</span> di bidanganya
        </h2>
        <p className="text-md mb-12 lg:w-[400px]">
          Kami memiliki komitmen tinggi dalam membagikan informasi, hal ini untuk memastikan kesesuaian antara perencanaan hasil yang kami kerjakan.
        </p>
      </div>
      <img src={Gunung} alt="candi" className="rounded-full lg:w-[400px] mb-16" />
    </div>
  );
}
