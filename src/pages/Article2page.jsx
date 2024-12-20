import Layouts from './Layouts';
import Footer from '../components/Footer';
import Keris from '../assets/keris.jpg';

export default function Article1page() {
  return (
    <div className="bg-dark-eiron">
      <Layouts title="Eiron - Mengenal Senjata Bernama Keris">
        <div className="flex gap-5 w-fit mx-auto items-center text-sm mb-8">
          <div className="bg-yellow-eiron px-3 py-1 rounded-full">
            <p>Sejarah Jawa</p>
          </div>
          <p className="text-slate-100">Article</p>
        </div>

        <div className="mb-8">
          <h1 className="text-center text-3xl text-slate-100 lg:text-5xl lg:mb-4">Mengenal Senjata Bernama Keris</h1>
          <p className="text-center text-slate-300 font-notoSans text-xl italic">ꦱꦼꦚ꧀ꦗꦠꦏꦼꦫꦶꦱ꧀</p>
        </div>

        <div className="mb-8">
          <img src={Keris} alt="art" className="lg:max-w-[350px] mx-auto" />
        </div>

        <div className="text-justify text-slate-100 mb-16">
          <p className="mb-4">
            Keris, senjata tikam tradisional Indonesia yang berakar kuat dalam budaya Jawa, bukan sekadar alat pertahanan diri, melainkan representasi kompleks
            dari seni, status sosial, dan spiritualitas. Diperkirakan muncul sejak abad ke-10 Masehi, keris mengalami perkembangan signifikan pada masa kerajaan
            Majapahit, dan kemudian menyebar ke berbagai wilayah Nusantara. Senjata ini terdiri dari beberapa bagian penting, antara lain bilah (wilah) yang
            bisa lurus atau berlekuk (luk) dengan pamor—motif pada bilah yang terbentuk dari lapisan logam berbeda—yang dipercaya memiliki kekuatan magis.
            Bagian lainnya meliputi ganja (pangkal bilah), hulu (pegangan) yang sering diukir dengan detail rumit, dan wrangka (sarung) sebagai pelindung bilah.
          </p>
          <p className="mb-4">
            Lebih dari sekadar senjata tajam, keris memiliki makna simbolis yang mendalam dalam masyarakat Indonesia, khususnya Jawa. Dahulu, keris sering
            menjadi penanda status sosial, di mana keris dengan kualitas tinggi dan pamor langka hanya dimiliki oleh bangsawan atau tokoh penting. Selain itu,
            keris juga dikaitkan dengan kekuatan spiritual atau isi yang dipercaya dapat memberikan perlindungan, keberuntungan, atau kekuatan magis. Pembuatan
            keris sendiri dianggap sebagai sebuah seni tinggi, melibatkan empu keris yang ahli dalam menempa logam, menciptakan pamor yang indah, dan mengukir
            hulu serta wrangka dengan detail yang rumit. Proses pembuatannya pun seringkali diiringi dengan ritual dan doa-doa, menambah dimensi spiritual pada
            keris.
          </p>
          <p>
            Saat ini, keris masih dihargai sebagai benda seni dan koleksi, dengan para kolektor yang mengagumi keindahan pamor, bentuk, dan nilai sejarah yang
            terkandung di dalamnya. Keris juga masih digunakan dalam beberapa upacara adat dan sebagai bagian dari busana tradisional, meskipun fungsinya
            sebagai senjata dalam pertempuran telah lama ditinggalkan. Perawatan khusus, seperti pembersihan berkala dengan minyak khusus dan penyimpanan di
            tempat yang kering, diperlukan untuk menjaga kualitas dan keawetan keris. Berbagai jenis keris dapat dibedakan berdasarkan bentuk bilah (lurus atau
            luk), jumlah luk, pamor, dan asal daerahnya, beberapa di antaranya bahkan dianggap sebagai pusaka yang diwariskan turun-temurun dalam keluarga.
          </p>
        </div>
        <Footer />
      </Layouts>
    </div>
  );
}
