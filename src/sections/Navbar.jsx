import { useState } from "react";
import { navLinks } from "../constants/index.js";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(prev => !prev);
  };

  const NavItems = () => {
    return (
      <ul className="nav-ul">
        {navLinks.map(({ id, name, href }) =>
          <li key={id} className="nav-li_a">
            <a href={href}>
              {name}
            </a>
          </li>
        )}
      </ul>
    );
  };

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-black/10">
      <div className="max-w-7xl mx-auto ">
        <div className="flex justify-between items-center py-5 mx-auto c-space">
          <a
            href="/"
            className="text-slate-200 font-bold text-xl hover:text-white transition-colors"
          >
            Abel Sisay
          </a>
          <button
            onClick={toggleMenu}
            className="text-neutal-400 hover:text-white focus:outline-none sm:hidden flex "
            aria-label="menu"
          >
            <img
              src={isOpen ? "/assets/close.svg" : "/assets/menu.svg"}
              alt="menu"
              className="w-6 h-6"
            />
          </button>

          <nav className="sm:flex hidden">
            <NavItems />
          </nav>
        </div>
      </div>

      <div className={`nav-sidebar ${isOpen ? "max-h-screen" : "max-h-0"}`}>
        <NavItems />
      </div>
    </header>
  );
};

export default Navbar;
