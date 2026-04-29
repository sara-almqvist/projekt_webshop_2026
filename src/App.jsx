import Nav from './components/Nav';
import LayoutShop from './views/LayoutShop';
import Home from './views/Home';
import './App.css';
import Search from './components/Search';
import ProductDetails from './components/ProductDetails';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Cart from './views/Cart';
import Checkout from './views/Checkout';
import About from './views/About';
import WrongPath from './views/Wrongpath';

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route
            index
            element={
              <LayoutShop>
                <Home />
              </LayoutShop>
            }
          />
          <Route
            path="/about"
            element={
              <LayoutShop>
                <About />
              </LayoutShop>
            }
          />
          <Route
            path="/item:id"
            element={
              <LayoutShop>
                <ProductDetails />
              </LayoutShop>
            }
          />
          <Route
            path="/cart"
            element={
              <LayoutShop>
                <Cart />
              </LayoutShop>
            }
          />
          <Route path="/checkout" element={<Checkout />} />
          <Route path="/*" element={<WrongPath />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
