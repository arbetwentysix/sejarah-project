import Arts1 from '../assets/borobudurr.jpg';
import Arts2 from '../assets/gerbang.jpg';
import Arts3 from '../assets/candi.jpg';

export default function ArtsSection() {
  return (
    <div className="flex flex-col mt-8 text-slate-200 min-h-screen">
      <p className="text-sm mt-24 lg:mt-0 mb-3 text-slate-400">Seni</p>
      <h2 className="text-2xl font-bold mb-3">
        Berbagai Kumpulan <span className="text-yellow-eiron">Sejarah Seni</span>
      </h2>
      <div className="lg:flex lg:justify-between">
        <img src={Arts1} className="w-full lg:w-[300px]" alt="arts-1" />
        <img src={Arts2} className="w-full lg:w-[300px]" alt="arts-2" />
        <img src={Arts3} className="w-full lg:w-[300px]" alt="arts-3" />
      </div>
      <a href="" className="text-dark-eiron font-semibold mt-4 px-4 py-1 bg-yellow-eiron w-fit rounded-full">
        See more
      </a>
    </div>
  );
}
