import Prambanan from '../assets/prambanan.jpg';
import Keris from '../assets/keris.jpg';
import RajaJawa from '../assets/raja-jawa.jpg';

export default function ArticlesSection() {
  return (
    <div className="flex flex-col mt-8 mb-20 text-slate-200 min-h-screen">
      <p className="text-sm mt-24 lg:mt-0 mb-3 text-slate-400">Artikel Menarik</p>
      <h2 className="text-2xl font-bold mb-3">
        Lihat beberapa artikel yang mungkin <span className="text-yellow-eiron">tertarik</span> untuk Kamu lihat
      </h2>
      <div className="flex flex-col gap-6 lg:flex-row">
        <a href="/article-1">
          <div className="bg-slate-200 text-slate-900 lg:max-w-[500px]">
            <div className="lg:w-full lg:max-h-[420px] overflow-hidden">
              <img src={Prambanan} alt="" />
            </div>
            <div className="p-4">
              <p className="text-lg font-semibold mb-3">Sebuah Mahakarya Bernama Candi Prambanan</p>
              <p className="text-slate-700 max-h-[200px] overflow-hidden">
                Candi Prambanan, sebuah mahakarya arsitektur Hindu yang megah, berdiri kokoh di dataran Prambanan, dekat Yogyakarta, menjulang sebagai salah
                satu ikon budaya dan warisan bersejarah Indonesia. Kompleks candi ini merupakan peninggalan agung dari masa kejayaan Kerajaan Mataram Kuno, dan
                menjadi kompleks candi Hindu terbesar di Indonesia, bahkan di Asia Tenggara setelah Angkor Wat. Keberadaannya menjadi bukti bisu kejayaan
                peradaban Hindu di masa lampau dan daya tarik wisata yang memukau hingga kini.
              </p>
            </div>
          </div>
        </a>
        <a href="/article-2">
          <div className="bg-slate-200 text-slate-900 lg:max-w-[500px]">
            <div className="lg:w-full lg:max-h-[420px] overflow-hidden">
              <img src={Keris} alt="" />
            </div>
            <div className="p-4">
              <p className="text-lg font-semibold mb-3">Mengenal Senjata Bernama Keris</p>
              <p className="text-slate-700 max-h-[200px] overflow-hidden">
                Keris, senjata tikam tradisional Indonesia yang berakar kuat dalam budaya Jawa, bukan sekadar alat pertahanan diri, melainkan representasi
                kompleks dari seni, status sosial, dan spiritualitas. Diperkirakan muncul sejak abad ke-10 Masehi, keris mengalami perkembangan signifikan pada
                masa kerajaan Majapahit, dan kemudian menyebar ke berbagai wilayah Nusantara. Senjata ini terdiri dari beberapa bagian penting, antara lain
                bilah (wilah) yang bisa lurus atau berlekuk (luk) dengan pamor—motif pada bilah yang terbentuk dari lapisan logam berbeda—yang dipercaya
                memiliki kekuatan magis. Bagian lainnya meliputi ganja (pangkal bilah), hulu (pegangan) yang sering diukir dengan detail rumit, dan wrangka
                (sarung) sebagai pelindung bilah.
              </p>
            </div>
          </div>
        </a>
        <a href="/article-3">
          <div className="bg-slate-200 text-slate-900 lg:max-w-[500px]">
            <div className="lg:w-full lg:min-h-[420px] lg:max-h-[420px] overflow-hidden">
              <img src={RajaJawa} className="lg:scale-[1.8] lg:translate-y-5" alt="" />
            </div>
            <div className="p-4">
              <p className="text-lg font-semibold mb-3">Pengenalan Budaya Kepada Turis</p>
              <p className="text-slate-700 max-h-[200px] overflow-hidden">
                Melestarikan kebudayaan Jawa melalui pariwisata merupakan strategi yang efektif untuk menjaga warisan leluhur tetap hidup dan relevan di era
                modern. Dengan menarik wisatawan, baik domestik maupun mancanegara, kebudayaan Jawa dapat dipromosikan dan diapresiasi secara luas. Hal ini
                dapat dilakukan melalui berbagai cara, seperti menyelenggarakan pertunjukan seni tradisional (wayang kulit, gamelan, tari Jawa), festival
                budaya, pameran kerajinan tangan (batik, ukir, keris), dan wisata kuliner yang menyajikan masakan khas Jawa. Interaksi langsung antara wisatawan
                dengan budaya Jawa, melalui partisipasi dalam workshop, kursus singkat, atau kunjungan ke desa-desa wisata, dapat memberikan pengalaman yang
                mendalam dan berkesan, sekaligus menanamkan rasa hormat dan apresiasi terhadap kebudayaan tersebut. Dampak ekonomi dari pariwisata juga
                memberikan insentif bagi masyarakat lokal untuk terus melestarikan dan mengembangkan kebudayaan mereka.
              </p>
            </div>
          </div>
        </a>
      </div>
    </div>
  );
}
