import { useState } from "react";
import { Link } from "react-router-dom";
import TrashIcon from "../assets/icons/Trash";
import ModalDelete from "../component/ModalDelete";
import Button from "../component/Button";

const tableHeaders = ["Image", "Product", "Price", "Quantity", "Total"];

const Cart = ({
  cartItems,
  handleAddProduct,
  handleRemoveProduct,
  handleDeleteProduct,
  isModalOpen,
  setIsModalOpen,
  handleQuantityChange,
  totalPrice
}) => {
  const [itemToRemove, setItemToRemove] = useState(null);

  const openModal = (item) => {
    setItemToRemove(item);
    setIsModalOpen(true);
  };


  return (
    <section className="max-container">
      {/* Cart Items */}
      <div className="min-h-[60vh] overflow-x-auto">
        <table className="w-full min-w-[600px] relative">
          <thead>
            <tr className="text-center font-fontF text-[18px] text-black/80 border-b-2 border-black">
              {tableHeaders.map((header, index) => (
                <th key={index} className="pb-5">
                  {header}
                </th>
              ))}
            </tr>
          </thead>

          <tbody>
            {cartItems.length === 0 && (
              <tr key={cartItems.id}>
                <td className="absolute left-1/2 transform -translate-x-1/2 font-fontF text-md top-20">
                  No items are added.
                </td>
              </tr>
            )}
            {cartItems.map((item, index) => (
              <tr key={item.id} className="border-b-2">
                <td className="pt-3 max-w-[30px]">
                  <img
                    src={item.imgURL}
                    alt={item.name}
                    className="object-cover w-full h-full"
                  />
                </td>
                <td className="text-center font-fonF font-semibold text-xl">
                  Product {index + 1}
                </td>
                <td className="text-center font-fonF text-subtextColor text-[15px]">
                  ${item.price}
                </td>
                <td className="text-2xl text-center">
                  <button
                    onClick={() => handleRemoveProduct(item)}
                    className=""
                  >
                    -
                  </button>{" "}
                  <input
                    type="number"
                    className="border px-2 py-1 text-center bg-white text-[14px]"
                    value={item.quantity || ""}
                    min={1}
                    max="10"
                    onChange={(e) => handleQuantityChange(item, e.target.value)}
                  />{" "}
                  <button onClick={() => handleAddProduct(item)} className="">
                    +
                  </button>
                </td>
                <td className="text-center font-fonF text-subtextColor text-[15px] max-w-[30px]">
                  ${(item.quantity * item.price).toFixed(2)}
                </td>
                <td>
                  <button onClick={() => openModal(item)}>
                    <TrashIcon className="hover:fill-red-600 w-5 ml-3 hover:-translate-y-[1px] transition-all duration-300" />
                  </button>
                  <ModalDelete
                    isModalOpen={isModalOpen}
                    onClose={() => setIsModalOpen(false)}
                    onConfirm={() => {
                      handleDeleteProduct(itemToRemove);
                      setIsModalOpen(false);
                    }}
                  />
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* Coupon and Checkout */}
      <div className="flex justify-between pt-10 max-md:flex-col">
        <div className="">
          <Link to="/shop">
            <Button
              label="Continue Shopping"
              backgroundColor="bg-black/80"
              borderColor="border-none"
              textColor="text-white"
              hover="hover:bg-black/90"
            />
          </Link>
          <div>
            <h1 className="font-fontF font-medium text-3xl pt-14">Coupon</h1>
            <p className="pt-4 text-subtextColor">
              Enter your coupon code if you have one
            </p>
            <div className="flex max-h-[100px] gap-5 mt-5 flex-wrap">
              <input
                type="text"
                id=""
                placeholder="Coupon Code"
                aria-label="Coupon"
                minLength="9"
                maxLength="9"
                className="px-2 py-2 border rounded-xl border-primary/30 w-[300px] outline-none focus:border-primary"
              />
              <Button
                label="Apply Coupon"
                backgroundColor="bg-black/80"
                borderColor="border-none"
                textColor="text-white"
                hover="hover:bg-black/90"
              />
            </div>
          </div>
        </div>
        <div className="w-2/6 max-md:w-full max-md:pt-20">
          <h1 className="font-fontF font-medium text-3xl border-b-2 pb-2">
            CART TOTALS
          </h1>
          <div className="w-4/6 max-md: py-12">
            <div className="flex justify-between">
              <h4 className="font-fontF text-subtextColor tracking-wide">
                Subtotal
              </h4>
              <h4 className="font-semibold tracking-wide">${totalPrice}</h4>
            </div>
            <div className="flex justify-between pt-5">
              <h4 className="font-fontF text-subtextColor tracking-wide">
                Total
              </h4>
              <h4 className="font-semibold tracking-wide">${totalPrice}</h4>
            </div>
          </div>
          <Link to="/checkout" className="flex flex-wrap">
            <Button
              label="Proceed To Checkout"
              backgroundColor="bg-black/80"
              borderColor="border-none"
              textColor="text-white"
              hover="hover:bg-black/90"
            />
          </Link>
        </div>
      </div>
    </section>
  );
};

export default Cart;
