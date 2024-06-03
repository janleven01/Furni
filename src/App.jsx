import NavBar from "./component/NavBar"
import Footer from "./section/Footer"
import Subscribe from "./section/Subscribe"
import ScrollToTop from './component/ScrollToTop'
import { Outlet } from "react-router-dom"

const App = ({cartItems, showNav , lastScrollY}) => {
  return (
    <>
      <ScrollToTop />
      <NavBar
        cartItems={cartItems}
        showNav={showNav}
        lastScrollY={lastScrollY}
      />

      <main>
        <Outlet />
      </main>

      <section className="padding">
        <Subscribe />
      </section>

      <section className="padding">
        <Footer />
      </section>
    </>
  );
}

export default App