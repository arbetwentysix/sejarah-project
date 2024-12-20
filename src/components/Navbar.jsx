import Logo from '../assets/logo.png';
import { FaAlignJustify } from 'react-icons/fa6';

export default function Navbar() {
  return (
    <div className="bg-dark-eiron w-full mb-20 text-slate-100">
      {/* lg:border-b lg:pb-3 lg:border-gray-500 */}
      <div className="flex items-center justify-between">
        <div className="flex gap-3 items-center">
          <img src={Logo} alt="Logo" className="w-[40px]" />
          <a href="/" className="text-md font-semibold text-yellow-eiron hidden lg:block">
            EIR<span className="text-slate-100">ON</span>
          </a>
        </div>

        <div className="hidden lg:flex gap-12 text-sm">
          <a href="/gallery" className="hover:text-gray-500 transition">
            Gallery
          </a>
          <a href="/about" className="hover:text-gray-500 transition">
            About Us
          </a>
          <a href="/contact" className="hover:text-gray-500 transition">
            Contact
          </a>
        </div>

        <details className="dropdown dropdown-end lg:hidden">
          <summary className="btn border-0 bg-transparent m-1">
            <FaAlignJustify />
          </summary>
          <ul className="menu dropdown-content rounded-box z-[1] w-52 p-2 bg-dark-eiron">
            <li className="hover:text-gray-500">
              <a href="/">Home</a>
            </li>
            <li className="hover:text-gray-500">
              <a href="/gallery">Gallery</a>
            </li>
            <li className="hover:text-gray-500">
              <a href="/about">About Us</a>
            </li>
            <li className="hover:text-gray-500">
              <a href="/contact">Contact</a>
            </li>
          </ul>
        </details>
      </div>
    </div>
  );
}
