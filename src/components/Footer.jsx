import Logo from '../assets/logo.png';
export default function Footer() {
  return (
    <div className="text-gray-100">
      <img src={Logo} alt="Logo" className="w-[60px] mb-12" />
      <div className="flex flex-col gap-4 lg:gap-0 lg:flex-row justify-between mb-12">
        <p className="text-sm lg:w-[350px]">Media Kami adalah media yang tepat dalam menampilkan informasi tentang segala yang dibutuhkan anda.</p>
        <div>
          <p>Social Media</p>
          <a href="https://x.com/home?lang=id" className="block text-sm text-gray-400">
            X(Twitter)
          </a>
          <a href="https://www.facebook.com/" className="block text-sm text-gray-400">
            Facebook
          </a>
          <a href="https://www.instagram.com/" className="block text-sm text-gray-400">
            Instagram
          </a>
        </div>
        <div>
          <p>Email</p>
          <p className="text-sm text-gray-400 mb-3">eironcompany@gmail.com</p>
          <p>Phone Number</p>
          <p className="text-sm text-gray-400">+121 232 2339</p>
        </div>
        <div>
          <p>Alamat</p>
          <p className="text-sm text-gray-400 w-[150px]">Jl. Icikiwir Kemajuan No.01 BLOK.3 Mars Barat, Galaxy Android</p>
        </div>
      </div>
      <div className="flex flex-col lg:flex-row justify-between text-sm">
        <p className="mb-2 lg:mb-0">EiroCompany. All Rigths Reserved.</p>
        <p>Terms & Conditions | Privacy Policy</p>
      </div>
    </div>
  );
}
