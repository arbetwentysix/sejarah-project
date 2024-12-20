import Layouts from './Layouts';
import Footer from '../components/Footer';

export default function Contactpage() {
  return (
    <div className="bg-dark-eiron">
      <Layouts title="Eiron - Contact">
        <h1 className="text-slate-100 text-3xl mb-6 lg:text-5xl lg:mb-20">Contact</h1>
        <div className="mb-20 text-slate-100 flex flex-col-reverse lg:flex-row gap-8 lg:gap-20">
          <div className="w-full lg:w-[25%]">
            <p className="mb-8">WE BELIEVE IN THE POWER OF DIGITAL AND WE LOVE COLLABORATING WITH BRANDS THAT FEEL THE SAME LETS CONNECT.</p>
            <div className="mb-3">
              <p className="text-gray-600">Email</p>
              <p>eironcompany@gmail.com</p>
            </div>
            <div>
              <p className="text-gray-600">Phone Number</p>
              <p>+121 232 2339</p>
            </div>
          </div>
          <div className="w-full">
            <p className="mb-8 text-xl lg:text-5xl lg:mb-14">WE APPRECIATE YOUR SUGGESTIONS, REACH OUT!</p>
            <form action="">
              <div className="mb-10 lg:mb-20">
                <label htmlFor="" className="block">
                  Name
                </label>
                <input type="text" name="" id="" className="bg-transparent border-b-2 border-slate-100 w-full" />
              </div>
              <div className="mb-10 lg:mb-20">
                <label htmlFor="" className="block">
                  Email
                </label>
                <input type="Email" name="" id="" className="bg-transparent border-b-2 border-slate-100 w-full" />
              </div>
              <div>
                <label htmlFor="" className="block">
                  Message
                </label>
                <textarea name="" id="" className="bg-transparent border-b-2 border-slate-100 w-full"></textarea>
              </div>
              <p className="text-gray-500 mb-6 text-sm">
                BY EIRON COMPANY <span className="text-slate-100">TERMS OF SERVICE</span> AND <span className="text-slate-100">PRIVACY POLICY</span>
              </p>
              <button type="submit" className="bg-yellow-eiron px-5 py-1 rounded-full text-dark-eiron">
                Submit
              </button>
            </form>
          </div>
        </div>
        <Footer />
      </Layouts>
    </div>
  );
}
