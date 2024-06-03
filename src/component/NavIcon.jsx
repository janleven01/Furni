import { 
    userIcon,
    shoppingCart,
} from '../assets/icons'
import { NavLink } from 'react-router-dom'

const navIcon = ({cartItems}) => {
  
  return (
    <div className="flex gap-6 items-center">
      <img src={userIcon} alt="user-icon" className="w-7 h-7" />
      <NavLink to="/cart">
        {({ isActive }) => (
          <div className="relative">
            <img
              src={shoppingCart}
              alt="shopping-cart"
              className={`transition-all duration-300 ease-in-out hover:w-8 hover:h-8
              ${isActive ? "w-8 h-8" : "w-7 h-7"}
            `}
            />
            {cartItems.length > 0 && (
              <div className="flex items-center justify-center absolute -top-1 -right-1 bg-secondary rounded-full w-5 h-5 text-xs text-black font-semibold">
                {cartItems.length}
              </div>
            )}
          </div>
        )}
      </NavLink>
    </div>
  );
}

export default navIcon
