import { hamburgerIcon } from "../assets/icons"
import { navLinks } from '../constants/index'
import { useState} from "react"
import NavLinks from "./NavLinks"
import NavIcon from "./NavIcon"


const NavBar = ({cartItems, showNav, lastScrollY}) => {
  const [isOpen, setIsOpen] = useState(false)

  const menuClick = () => {
    setIsOpen(!isOpen)
  }

  return (
    <header
      className={`sticky top-0 z-30 bg-primary w-full padding-x transition-transform duration-400
      ${
        showNav
          ? "translate-y-0 transition-all duration-400"
          : `transition-all duration-300 ${
              isOpen ? "-translate-y-0" : "-translate-y-[15vh] "
            }`
      }
    `}
    >
      <div className="flex justify-between items-center max-container py-6">
        {/* LOGO NAME */}
        <div id="#home">
          <h1 className="font-bold text-3xl text-white">
            Furni<span className="text-white/50">.</span>
          </h1>
        </div>
        {/* DESKTOP NAV LINKS */}
        <div
          className={`flex max-md:hidden items-center justify-center gap-10 max-lg:gap-4 font-semibold text-white/50`}
        >
          {navLinks.map((item, index) => (
            <NavLinks key={index} item={item} isDesktop={true} />
          ))}
        </div>

        {/* DESKTOP ICONS */}
        <div className="max-md:hidden ">
          <NavIcon cartItems={cartItems} />
        </div>

        {/* HAMBURGER MENU */}
        <button
          onClick={menuClick}
          className="md:hidden text-white/50 flex items-center"
        >
          <img
            src={hamburgerIcon}
            alt="hamburger-menu"
            width={30}
            height={30}
            className="text-white/50"
          />
        </button>
      </div>

      {/* MOBILE NAV LINKS AND ICONS */}
      <div
        onClick={() => setIsOpen(false)}
        className={`max-container text-white/50 md:hidden font-semibold transition-all ease-in-out 
        ${
          isOpen
            ? "max-h-96 pb-10 duration-500"
            : "max-h-0 invisible opacity-0 duration-300"
        }
      `}
      >
        {navLinks.map((item, index) => (
          <NavLinks key={index} item={item} isDesktop={false} />
        ))}
        <div className="pt-4">
          <NavIcon cartItems={cartItems} />
        </div>
      </div>
    </header>
  );
}

export default NavBar