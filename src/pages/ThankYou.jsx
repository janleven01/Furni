import { checkIcon } from "../assets/icons";
import { Link } from "react-router-dom";
import ShoppingCart from "../assets/icons/ShoppingCart";
import Button from "../component/Button"

const ThankYou = () => {
  return (
    <>
      <div>
        <header className="bg-primary">
          <div className="pt-10 pb-16"></div>
        </header>

        <body className="flex flex-col items-center pt-20 bg-secondary min-h-[70vh] max-xl:min-h-screen gap-14">
          <div className="relative">
            <ShoppingCart className="w-28 h-32 stroke-primary" />
            <img
              src={checkIcon}
              alt=""
              className="absolute w-9 h-10 left-[60%] transform -translate-x-1/2 top-1/2 -translate-y-1/2"
            />
            <div className="absolute w-20 h-20 top-4 left-2 z-0 p-4 bg-primary/30 rounded-full" />
          </div>
          <div className="text-center font-fonF tracking-wide">
            <h1 className="text-6xl">Thank You!</h1>
            <p className="text-subtextColor text-2xl pt-4">Your order was successfully completed.</p>
          </div>
          <Link to="/shop">
            <Button
              label="Back to Shop"
              backgroundColor="bg-black/80"
              borderColor="border-none"
              textColor="text-white"
              hover="hover:bg-black/90"
            />
          </Link>
        </body>
      </div>
    </>
  );
}

export default ThankYou