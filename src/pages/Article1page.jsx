import Layouts from './Layouts';
import Footer from '../components/Footer';
import Prambanan from '../assets/prambanan.jpg';

export default function Article1page() {
  return (
    <div className="bg-dark-eiron">
      <Layouts title="Eiron - Sebuah Mahakarya Bernama Candi Prambanan">
        <div className="flex gap-5 w-fit mx-auto items-center text-sm mb-8">
          <div className="bg-yellow-eiron px-3 py-1 rounded-full">
            <p>Sejarah Jawa</p>
          </div>
          <p className="text-slate-100">Article</p>
        </div>

        <div className="mb-8">
          <h1 className="text-center text-3xl text-slate-100 lg:text-5xl lg:mb-2">Sebuah Mahakarya Bernama Candi Prambanan</h1>
          <p className="text-center text-slate-300 font-notoSans text-xl italic">ꦕꦤ꧀ꦝꦿꦶꦥꦿꦩ꧀ꦧꦤꦤ꧀</p>
        </div>

        <div className="mb-8">
          <img src={Prambanan} alt="art" className="lg:max-w-[350px] mx-auto" />
        </div>

        <div className="text-justify text-slate-100 mb-16">
          <p className="mb-4">
            Candi Prambanan, sebuah mahakarya arsitektur Hindu yang megah, berdiri kokoh di dataran Prambanan, dekat Yogyakarta, menjulang sebagai salah satu
            ikon budaya dan warisan bersejarah Indonesia. Kompleks candi ini merupakan peninggalan agung dari masa kejayaan Kerajaan Mataram Kuno, dan menjadi
            kompleks candi Hindu terbesar di Indonesia, bahkan di Asia Tenggara setelah Angkor Wat. Keberadaannya menjadi bukti bisu kejayaan peradaban Hindu di
            masa lampau dan daya tarik wisata yang memukau hingga kini.
          </p>
          <p className="mb-4">
            Candi Prambanan, yang juga dikenal sebagai Candi Roro Jonggrang, dibangun pada abad ke-9 Masehi. Meskipun tanggal pasti pembangunan dan siapa yang
            memerintahkannya masih menjadi perdebatan, kuat dugaan candi ini dibangun pada masa pemerintahan Rakai Pikatan dari Wangsa Sanjaya sebagai tandingan
            candi Buddha Borobudur dan Candi Sewu yang letaknya berdekatan. Candi ini dipersembahkan untuk Trimurti, tiga dewa utama dalam agama Hindu: Brahma
            (Sang Pencipta), Wisnu (Sang Pemelihara), dan Siwa (Sang Pemusnah). Prasasti berangka tahun 778 Saka (856 M) yang ditemukan di sekitar candi
            menguatkan dugaan ini.
          </p>
          <p>
            Kompleks Candi Prambanan memiliki denah berbentuk persegi panjang yang terdiri dari halaman luar dan tiga pelataran: Jaba (pelataran luar), Tengahan
            (pelataran tengah), dan Njeron (pelataran dalam). Candi utama menjulang tinggi dengan arsitektur yang megah, dihiasi relief-relief yang menceritakan
            kisah Ramayana dan Krishnayana. Tiga candi utama didedikasikan untuk Trimurti, dengan Candi Siwa sebagai candi terbesar dan tertinggi. Selain candi
            utama, terdapat pula candi-candi perwara (pendamping) dan candi-candi kecil lainnya yang menambah keagungan kompleks ini.
          </p>
        </div>
        <Footer />
      </Layouts>
    </div>
  );
}
