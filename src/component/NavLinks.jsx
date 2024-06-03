import { NavLink } from "react-router-dom";

const NavLinks = ({ item, isDesktop}) => {

  return (
    <div
      className={`p-1 hover:text-white transition duration-500 relative group py-2
      `}
    >
      <NavLink to={item.href} >
        {({ isActive }) => (
          <div className={`${isActive && 'text-white'}`}>
            {item.label}
            {isDesktop && (
              //Underline yellow effect
              <div
                className={`absolute mt-1 w-full h-1 bg-yellow-500 scale-x-0 group-hover:scale-x-100 transition-transform origin-left duration-200
              ${
                isActive
                  ? "w-10/12 bg-yellow-500 absolute scale-x-100 "
                  : "scale-x-0"
              }
              `}
              />
            )}
          </div>
        )}
      </NavLink>
    </div>
  );
};

export default NavLinks;

