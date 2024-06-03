import Checkout from "../section/Checkout";

const CheckoutPage = ({ cartItems, totalPrice, handlePlaceOrder }) => {
  return (
    <>
      <header className="relative padding-x bg-primary overflow-hidden">
        <div className="max-container pt-10 pb-20">
          <h1 className="text-white text-6xl max-md:text-3xl max-xl:text-5xl max-lg:text-4xl font-bold">
            Checkout
          </h1>
        </div>
      </header>

      <section className="relative padding bg-secondary min-h-screen">
        <div className="pt-20 pb-40">
          <Checkout
            totalPrice={totalPrice}
            cartItems={cartItems}
            handlePlaceOrder={handlePlaceOrder}
          />
        </div>
      </section>
    </>
  );
};

export default CheckoutPage