import Cart from "../section/Cart"
import { useState } from "react";

const CartPage = ({
  cartItems,
  handleAddProduct,
  handleRemoveProduct,
  handleDeleteProduct,
  productList,
  handleQuantityChange,
  totalPrice
}) => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <div>
      <header className="relative padding-x bg-primary overflow-hidden">
        <div className="max-container pt-10 pb-20">
          <h1 className="text-white text-6xl max-md:text-3xl max-xl:text-5xl max-lg:text-4xl font-bold">
            Cart
          </h1>
        </div>
      </header>

      <section className="relative padding bg-secondary">
        <div className="pt-20 pb-40">
          <Cart
            cartItems={cartItems}
            handleAddProduct={handleAddProduct}
            handleRemoveProduct={handleRemoveProduct}
            handleDeleteProduct={handleDeleteProduct}
            productList={productList}
            isModalOpen={isModalOpen}
            setIsModalOpen={setIsModalOpen}
            handleQuantityChange={handleQuantityChange}
            totalPrice={totalPrice}
          />
        </div>
      </section>
    </div>
  );
};

export default CartPage