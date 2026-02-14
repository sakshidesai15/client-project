//import Dashboard from "./admin/Dashboard";
//import Login from "./admin/Login";
//import ProductsAdmin from "./admin/ProductsAdmin";

import { Route, BrowserRouter as Router, Routes } from 'react-router-dom';
import './App.css';
import ErrorBoundary from './components/ErrorBoundary';
import Footer from './components/Footer';
import Navbar from './components/Navbar';
import ScrollToTop from './components/ScrollToTop';
import About from './pages/About';
import Contact from './pages/Contact';
import Home from './pages/Home';
import OurSegments from './pages/OurSegments';
import ProductDetail from './pages/ProductDetail';
import ProductList from './pages/ProductList';
import Products from './pages/Products';

function App() {
  return (
    <ErrorBoundary>
      <Router>
        <ScrollToTop />
        <div className="app">
          <Navbar />
          <main>
           <Routes>
  {/* PUBLIC (unchanged) */}
  <Route path="/" element={<Home />} />
  <Route path="/about" element={<About />} />
  <Route path="/products" element={<Products />} />
  <Route path="/products/:id" element={<ProductList />} />
  <Route path="/product/:id" element={<ProductDetail />} />
  <Route path="/our-segments" element={<OurSegments />} />
  <Route path="/contact" element={<Contact />} />

  {/* ADMIN (separate) */}
  
</Routes>

          </main>
          <Footer />
        </div>
      </Router>
    </ErrorBoundary>
  );
}

export default App;
