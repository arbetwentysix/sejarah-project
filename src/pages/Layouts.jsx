import { useEffect } from 'react';

import Navbar from '../components/Navbar';

export default function Layouts(props) {
  const title = props.title;
  const children = props.children;

  useEffect(() => {
    document.title = title;
  }, []);

  return (
    <div className="bg-dark-eiron lg:w-2/3 lg:mx-auto font-geist">
      <div className="container mx-auto p-10 ">
        <Navbar />
        {children}
      </div>
    </div>
  );
}
