import Layouts from './Layouts';
import Footer from '../components/Footer';
import RajaJawa from '../assets/raja-jawa.jpg';

export default function Article3page() {
  return (
    <div className="bg-dark-eiron">
      <Layouts title="Eiron - Pengenalan Budaya Kepada Turis">
        <div className="flex gap-5 w-fit mx-auto items-center text-sm mb-8">
          <div className="bg-yellow-eiron px-3 py-1 rounded-full">
            <p>Sejarah Jawa</p>
          </div>
          <p className="text-slate-100">Article</p>
        </div>

        <div className="mb-8">
          <h1 className="text-center text-3xl text-slate-100 lg:text-5xl lg:mb-4">Pengenalan Budaya Kepada Turis</h1>
          <p className="text-center text-slate-300 font-notoSans text-xl italic">ꦫꦗꦗꦮ</p>
        </div>

        <div className="mb-8">
          <img src={RajaJawa} alt="art" className="lg:max-w-[350px] mx-auto" />
        </div>

        <div className="text-justify text-slate-100 mb-16">
          <p className="mb-4">
            Melestarikan kebudayaan Jawa melalui pariwisata merupakan strategi yang efektif untuk menjaga warisan leluhur tetap hidup dan relevan di era modern.
            Dengan menarik wisatawan, baik domestik maupun mancanegara, kebudayaan Jawa dapat dipromosikan dan diapresiasi secara luas. Hal ini dapat dilakukan
            melalui berbagai cara, seperti menyelenggarakan pertunjukan seni tradisional (wayang kulit, gamelan, tari Jawa), festival budaya, pameran kerajinan
            tangan (batik, ukir, keris), dan wisata kuliner yang menyajikan masakan khas Jawa. Interaksi langsung antara wisatawan dengan budaya Jawa, melalui
            partisipasi dalam workshop, kursus singkat, atau kunjungan ke desa-desa wisata, dapat memberikan pengalaman yang mendalam dan berkesan, sekaligus
            menanamkan rasa hormat dan apresiasi terhadap kebudayaan tersebut. Dampak ekonomi dari pariwisata juga memberikan insentif bagi masyarakat lokal
            untuk terus melestarikan dan mengembangkan kebudayaan mereka.
          </p>
          <p className="mb-4">
            Pariwisata budaya yang berkelanjutan juga berperan penting dalam memastikan pelestarian kebudayaan Jawa dalam jangka panjang. Hal ini berarti bahwa
            aktivitas pariwisata harus direncanakan dan dikelola dengan bijak, mempertimbangkan dampak sosial, ekonomi, dan lingkungan. Penting untuk melibatkan
            masyarakat lokal dalam perencanaan dan pengelolaan pariwisata, sehingga mereka dapat merasakan manfaat langsung dan memiliki rasa kepemilikan
            terhadap pelestarian kebudayaan mereka. Selain itu, perlu adanya edukasi kepada wisatawan tentang etika berwisata yang menghormati nilai-nilai
            budaya setempat, seperti berpakaian sopan saat mengunjungi tempat-tempat suci, tidak merusak artefak bersejarah, dan menghargai tradisi yang
            berlaku. Dengan demikian, pariwisata dapat menjadi sarana yang efektif untuk melestarikan kebudayaan Jawa tanpa mengorbankan integritas dan
            nilai-nilai luhurnya.
          </p>
          <p>
            Lebih lanjut, pemanfaatan teknologi dan media digital dapat memperluas jangkauan promosi kebudayaan Jawa kepada khalayak yang lebih luas. Platform
            media sosial, website, dan aplikasi mobile dapat digunakan untuk berbagi informasi tentang sejarah, seni, tradisi, dan destinasi wisata budaya di
            Jawa. Konten-konten interaktif seperti virtual tour, video dokumenter, dan podcast dapat memberikan pengalaman yang menarik dan informatif bagi
            calon wisatawan. Selain itu, kolaborasi dengan influencer dan media massa dapat meningkatkan visibilitas kebudayaan Jawa di tingkat nasional dan
            internasional. Dengan memanfaatkan teknologi secara optimal, kebudayaan Jawa dapat terus lestari dan dikenal oleh generasi mendatang, sekaligus
            memberikan kontribusi positif bagi perkembangan pariwisata Indonesia.
          </p>
        </div>
        <Footer />
      </Layouts>
    </div>
  );
}
