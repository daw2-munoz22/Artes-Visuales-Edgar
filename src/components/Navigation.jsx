import { useState } from "react";
import { LuMenuSquare } from "react-icons/lu";

const Navigation = () => {
  const [nav, setNav] = useState(false);

  const toggleNav = () => {
    setNav(!nav);
    if (!nav) {
      document.body.style = "hidden";
    } else {
      document.body.style = "scroll";
    }
  };

  return (
    <div className="relative">
      <div className="absolute w-full flex justify-between p-4 items-center z-20">
        <h1 className="text-yellow-200 font-bold text-2xl transition-transform duration-300 hover:scale-105 cursor-pointer">
          EDGAR<span className="text-orange-500"> MUÑOZ </span> MANJÓN
        </h1>
        <LuMenuSquare
          className="text-yellow-200 hover:text-orange-500 duration-500 cursor-pointer transition-transform hover:scale-125"
          size={30}
          onClick={toggleNav}
        />
      </div>
      <div
        className={`${
          nav ? "opacity-100 translate-x-0" : "opacity-0 translate-x-full"
        } transition-all duration-300 ease-in-out fixed inset-0 overflow-hidden z-10 bg-black bg-opacity-70`}
      >
        <ul className="flex flex-col w-full items-center justify-center pt-20">
          <li className="font-bold text-3xl p-4 cursor-pointer text-white hover:text-orange-500 transition-transform duration-300 hover:scale-105">
            Inicio
          </li>
          <li className="font-bold text-3xl p-4 cursor-pointer text-white hover:text-orange-500 transition-transform duration-300 hover:scale-105">
            Pintores
          </li>
          <li className="font-bold text-3xl p-4 cursor-pointer text-white hover:text-orange-500 transition-transform duration-300 hover:scale-105">
            Obras
          </li>
          <li className="font-bold text-3xl p-4 cursor-pointer text-white hover:text-orange-500 transition-transform duration-300 hover:scale-105">
            Genios
          </li>
          <li className="font-bold text-3xl p-4 cursor-pointer text-white hover:text-orange-500 transition-transform duration-300 hover:scale-105">
            Galería
          </li>
        </ul>
      </div>
    </div>
  );
};
//https://www.youtube.com/watch?v=s2CxmeVE0aQ
export default Navigation;
