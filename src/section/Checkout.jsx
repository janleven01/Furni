import { useState } from "react";
import { Link } from "react-router-dom";
import Form from "../component/Form";
import BillingDetails from "../component/BillingDetails";
import Button from "../component/Button";
import Payment from "../component/Payment";

const Checkout = ({ totalPrice, cartItems, handlePlaceOrder }) => {
  const [isAccountOpen, setIsAccountOpen] = useState(false);
  const [isShipOpen, setIsShipOpen] = useState(false);

  return (
    <section className="max-container">
      <div className="text-subtextColor tracking-wide border p-5">
        Returning customer?{" "}
        <span className="underline hover:no-underline text-black">
          <a href="">Click here</a>
        </span>{" "}
        to login
      </div>
      <div className="grid grid-cols-2 max-md:grid-cols-1 gap-10 pt-14">
        {/* BILLING DETAILS */}
        <div>
          <h1 className="font-fontF font-medium text-4xl">Billing Details</h1>
          <div className="border-2 bg-white p-10 max-lg:p-4 mt-10 ">
            <BillingDetails />

            {/* CHECKBOX */}
            <div className="pt-10 text-[13px]">
              {/* CREATE ACCOUNT */}
              <div
                className={`flex flex-col
              `}
              >
                <div className="flex gap-2">
                  <input
                    type="checkbox"
                    name="createAccount"
                    id="create-account"
                    checked={isAccountOpen}
                    onChange={(e) => setIsAccountOpen(e.target.checked)}
                  />
                  <label htmlFor="create-account">Create an account?</label>
                </div>
                <div
                  className={`transition-all duration-500 ease-in-out overflow-hidden  ${
                    isAccountOpen ? "max-h-60" : "max-h-0"
                  }`}
                >
                  <div className="pt-4">
                    <div>
                      <p className="font-fontF text-subtextColor">
                        Create an account by entering the information below. If
                        you are a returning customer please login at the top of
                        the page.
                      </p>
                    </div>
                    <div className="py-4">
                      {/* ACCOUNT PASSWORD */}
                      <Form
                        label="Account Password"
                        type="text"
                        name="accountPassword"
                        id="account-password"
                        minLength="6"
                        maxLength="50"
                      />
                    </div>
                  </div>
                </div>
              </div>
              <div className="flex flex-col">
                <div className="flex gap-2">
                  <input
                    type="checkbox"
                    name="differentAddress"
                    id="different-address"
                    checked={isShipOpen}
                    onChange={(e) => setIsShipOpen(e.target.checked)}
                  />
                  <label htmlFor="different-address">
                    Ship To A Different Address?
                  </label>
                </div>
                <div
                  className={`transition-all duration-500 ease-in-out overflow-hidden pt-3 ${
                    isShipOpen ? "max-h-[160vh]" : "max-h-0"
                  }`}
                >
                  <BillingDetails />
                </div>
              </div>
              <div className="flex flex-col pt-2 gap-1">
                <label htmlFor="order-notes">Order Notes</label>
                <textarea
                  rows="5"
                  aria-label="Order Notes"
                  placeholder="Write your notes here..."
                  className="px-3 py-3 border rounded-xl border-primary/30 outline-none focus:border-primary"
                  required
                />
              </div>
            </div>
          </div>
        </div>

        {/* COUPON CODE AND ORDER */}
        <div className="flex flex-col gap-14">
          <div>
            <h1 className="font-fontF font-medium text-4xl">Coupon Code</h1>
            {/* COUPON CODE */}
            <div className="bg-white border-2 mt-10 p-14 max-lg:p-6">
              <p className="font-fonF text-[14px]">
                Enter your coupon code if you have one
              </p>
              <div className="flex items-center gap-3 pt-5">
                <div className="w-3/6">
                  <Form
                    label="Coupon"
                    type="text"
                    name="Coupon"
                    id="coupon-code"
                    minLength="6"
                    maxLength="50"
                    noLabel={true}
                    placeholder="Coupon Code"
                  />
                </div>
                <Button
                  label="Apply"
                  backgroundColor="bg-black/80"
                  borderColor="border-none"
                  textColor="text-white"
                  hover="hover:bg-black/90"
                />
              </div>
            </div>
          </div>
          <div>
            <h1 className="font-fontF font-medium text-4xl">Your Order</h1>
            {/* YOUR ORDER */}
            <div className="bg-white border-2 mt-10 p-14 max-lg:p-6">
              <table className="w-full text-left font-fontF">
                <thead>
                  <tr className="w-full border-b-2 border-black text-[14px]">
                    <th className="pb-3">Product</th>
                    <th>Total</th>
                  </tr>
                </thead>

                <tbody className="text-[14px]">
                  {cartItems.map((item) => (
                    <tr key={item.id} className="border-b">
                      <td className="py-3">
                        {item.name} x {item.quantity}
                      </td>
                      <td className="py-3">
                        ${(item.price * item.quantity).toFixed(2)}
                      </td>
                    </tr>
                  ))}
                  <tr className="border-b">
                    <td className="font-semibold py-3">Cart Subtotal</td>
                    <td className="font-semibold py-3">${totalPrice}</td>
                  </tr>
                  <tr className="border-b">
                    <td className="font-semibold py-3">Order Total</td>
                    <td className="font-semibold py-3">${totalPrice}</td>
                  </tr>
                </tbody>
              </table>

              <div className="flex flex-col gap-4 pt-10">
                <Payment
                  label="Direct Bank Transfer"
                  content="Make your payment directly into our bank account. Please use your Order ID as the payment reference. Your order won’t be shipped until the funds have cleared in our account."
                />
                <Payment
                  label="Cheque Payment"
                  content="Make your payment directly into our bank account. Please use your Order ID as the payment reference. Your order won’t be shipped until the funds have cleared in our account."
                />
                <Payment
                  label="Paypal"
                  content="Make your payment directly into our bank account. Please use your Order ID as the payment reference. Your order won’t be shipped until the funds have cleared in our account."
                />
                <div className="pt-10">
                  <Link to="/thankyou" onClick={handlePlaceOrder}>
                    <Button
                      label="Place Order"
                      backgroundColor="bg-black/80"
                      borderColor="border-none"
                      textColor="text-white"
                      hover="hover:bg-black/90"
                    />
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Checkout