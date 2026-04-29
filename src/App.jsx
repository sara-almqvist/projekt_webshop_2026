import LayoutShop from './views/LayoutShop';
import Home from './views/Home';
import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Cart from './views/Cart';
import Checkout from './views/Checkout';
import About from './views/About';
import WrongPath from './views/Wrongpath';
import FetchCategory from './components/FetchCategory';
import Categories from './views/Categories';
import ProductPage from './views/ProductPage';

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
            path="/categories"
            element={
              <LayoutShop>
                <Categories />
              </LayoutShop>
            }
          />
          <Route
            path="/productpage/:id"
            element={
              <LayoutShop>
                <ProductPage />
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
          <Route
            path="/checkout"
            element={
              <LayoutShop>
                <Checkout />
              </LayoutShop>
            }
          />
          <Route
            path="/test"
            element={
              <LayoutShop>
                <ProductPage />
              </LayoutShop>
            }
          />
          <Route path="/*" element={<WrongPath />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
