import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import PageNotFound from './PageNotFound';
import DataFetchError from './DataFetchError';
import Breadcrumbs from './Breadcrumbs';
import CreateProduct from './CreateProduct';
import NavbarComponent from './components/Navbar/NavbarComponent';
import Footer from './components/Footer';
import Home from './components/Home';
import About from './components/About';




function App() {
  return (
    <Router>
      <Routes>
      <Route path="product/:id" element={<ProductDetails />} errorElement={<DataFetchError />} />
      <Route path="/create" element={<CreateProduct />} />
        <Route path="*" element={<PageNotFound />} />
      </Routes>
    </Router>
    
  );
}

export default App;
