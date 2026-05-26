import LayoutShop from './views/LayoutShop';
import Home from './views/Home';
import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Cart from './views/Cart';
import Checkout from './views/Checkout';
import About from './views/About';
import WrongPath from './views/Wrongpath';
import Categories from './views/Categories';
import ProductPage from './views/ProductPage';
import CartProvider from './components/CartProvider';
import OrderConfirmation from './views/OrderConfirmation';
import UserProvider from './components/UserProvider';
import SearchProvider from './components/SearchProvider';
import Contact from './views/Contact';
import LayoutCheckOut from './views/LayoutCheckOut';
import Delivery from './components/Delivery';
import FavoriteProvider from './components/FavoriteProvider';
import MyFavorites from './views/MyFavorites';

function App() {
  return (
    <>
      <UserProvider>
        <FavoriteProvider>
          <CartProvider>
            <SearchProvider>
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
                    path="/categories/"
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
                      <LayoutCheckOut>
                        <Checkout />
                      </LayoutCheckOut>
                    }
                  />
                  <Route
                    path="/thanks"
                    element={
                      <LayoutShop>
                        <OrderConfirmation />
                      </LayoutShop>
                    }
                  />
                  <Route
                    path="/contact"
                    element={
                      <LayoutShop>
                        <Contact />
                      </LayoutShop>
                    }
                  />
                  <Route
                    path="/delivery"
                    element={
                      <LayoutCheckOut>
                        <Delivery />
                      </LayoutCheckOut>
                    }
                  />
                  <Route
                    path="/favorites"
                    element={
                      <LayoutShop>
                        <MyFavorites />
                      </LayoutShop>
                    }
                  />
                  <Route
                    path="/*"
                    element={
                      <LayoutShop>
                        <WrongPath />
                      </LayoutShop>
                    }
                  />
                </Routes>
              </BrowserRouter>
            </SearchProvider>
          </CartProvider>
        </FavoriteProvider>
      </UserProvider>
    </>
  );
}

export default App;
