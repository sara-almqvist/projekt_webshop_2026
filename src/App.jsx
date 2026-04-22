import Nav from './components/Nav';
import './App.css';
import Search from './components/Search';
import ProductDetails from './components/ProductDetails';

function App() {
  return (
    <>
      <Nav />
      <h1>Webshop</h1>
      <Search />
      <ProductDetails />
    </>
  );
}

export default App;
