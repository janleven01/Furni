import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { productList } from "./constants/shop.js";
import React, { useState, useEffect } from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import Shop from "./pages/Shop.jsx";
import About from "./pages/About.jsx";
import BlogPage from "./pages/BlogPage.jsx";
import ContactUs from "./pages/ContactUs.jsx";
import ServicesPage from "./pages/ServicesPage.jsx";
import ErrorPage from "./component/ErrorPage.jsx";
import CartPage from "./pages/CartPage.jsx";
import HomePage from "./pages/HomePage.jsx";
import CheckoutPage from "./pages/CheckoutPage.jsx";
import ThankYou from "./pages/ThankYou.jsx";

const Main = () => {
  const [cartItems, setCartItems] = useState(() => {
    const savedCartItems = localStorage.getItem("cartItems");
    return savedCartItems ? JSON.parse(savedCartItems) : [];
  });
  const [showNav, setShowNav] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);

  const controlNavbar = () => {
    if (typeof window !== "undefined") {
      if (window.scrollY > lastScrollY) {
        // if scroll down hide the navbar
        setShowNav(false);
      } else {
        // if scroll up show the navbar
        setShowNav(true);
      }
      setLastScrollY(window.scrollY);
    }
  };

  useEffect(() => {
    if (typeof window !== "undefined") {
      window.addEventListener("scroll", controlNavbar);

      // cleanup function
      return () => {
        window.removeEventListener("scroll", controlNavbar);
      };
    }
  }, [lastScrollY]);

  useEffect(() => {
    localStorage.setItem("cartItems", JSON.stringify(cartItems));
  }, [cartItems]);

  const handleAddProduct = (product) => {
    const ProductExist = cartItems.find((item) => item.id === product.id)
    if (ProductExist){
      setCartItems(cartItems.map((item) => 
        item.id === product.id 
        ? {...ProductExist, quantity: Math.min(Math.max(Number(ProductExist.quantity) + 1, 0), item.stock)}
        : item
      ))
   }else {
    setCartItems([...cartItems, {...product, quantity: 1}])
   }
  }

  const handleRemoveProduct = (product) => {
    const ProductExist = cartItems.find((item) => item.id === product.id)
    if (ProductExist.quantity === 1) {
        setCartItems(cartItems.filter((item) => item.id !== product.id))
    } else if(ProductExist.quantity > 1){
        setCartItems(cartItems.map((item) => 
          item.id === product.id 
          ? {...ProductExist, quantity: ProductExist.quantity - 1}
          : item
        ))
    }
  }

  const handleDeleteProduct = (product) => {
    setCartItems(cartItems.filter((item) => item.id !== product.id))
  };

  const handleQuantityChange = (item, quantity) => {

    setCartItems((prevItems) =>
      prevItems.map((cartItem) =>
        cartItem === item
          ? {
              ...cartItem,
              quantity: Math.min(Math.max(Number(quantity), 0), item.stock),
            }
          : cartItem
      )
    );
  };
  
  const handlePlaceOrder = () => {
    setCartItems([])
  }

  const totalPrice = cartItems
    .reduce((price, item) => price + item.quantity * item.price, 0)
    .toFixed(2);


  const router = createBrowserRouter([
    {
      element: (
        <App
          cartItems={cartItems}
          showNav={showNav}
          lastScrollY={lastScrollY}
        />
      ),
      errorElement: <ErrorPage />,
      children: [
        {
          path: "/",
          element: (
            <HomePage
              productList={productList}
              handleAddProduct={handleAddProduct}
            />
          ),
        },
        {
          path: "home",
          element: (
            <HomePage
              productList={productList}
              handleAddProduct={handleAddProduct}
            />
          ),
        },
        {
          path: "shop",
          element: (
            <Shop
              productList={productList}
              handleAddProduct={handleAddProduct}
            />
          ),
        },
        { path: "about", element: <About /> },
        {
          path: "services",
          element: <ServicesPage productList={productList} />,
        },
        { path: "blog", element: <BlogPage /> },
        { path: "contact-us", element: <ContactUs /> },
        {
          path: "cart",
          element: (
            <CartPage
              cartItems={cartItems}
              productList={productList}
              handleAddProduct={handleAddProduct}
              handleRemoveProduct={handleRemoveProduct}
              handleDeleteProduct={handleDeleteProduct}
              handleQuantityChange={handleQuantityChange}
              totalPrice={totalPrice}
            />
          ),
        },
        {
          path: "checkout",
          element: (
            <CheckoutPage
              cartItems={cartItems}
              totalPrice={totalPrice}
              handlePlaceOrder={handlePlaceOrder}
            />
          ),
        },
        {
          path: "thankyou",
          element: <ThankYou />,
        },
      ],
    },
  ]);

  return <RouterProvider router={router} />;
};

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <Main />
  </React.StrictMode>
);
