import React, { useState } from 'react';
import Filter from './components/Filter';
import AppNavbar from './components/Navbar';
import ProductList from './components/ProductList';
import data from './data.json';
import banner from './assets/main_banner.png';
import './styles/App.css';
import { Image } from 'react-bootstrap';
import Footer from './components/Footer';

function App() {
  const [filteredProducts, setFilteredProducts] = useState(data);

  const handleCategoryChange = (e) => {
    const selectedCategory = e.target.value;
    if (selectedCategory === '') {
      setFilteredProducts(data);
    } else {
      const filtered = data.filter((product) => product.type === selectedCategory);
      setFilteredProducts(filtered);
    }
  };

  const categories = [...new Set(data.map((product) => product.type))];

  return (
    <div>
      <AppNavbar />
      <div className="container">
        <Image src={ banner } fluid style={{ width: '90vw', height: '30vw' }} />
        <Filter categories={ categories } handleCategoryChange={ handleCategoryChange } />
        <ProductList products={ filteredProducts } />
        <Footer />
      </div>
    </div>
  );
}

export default App;
