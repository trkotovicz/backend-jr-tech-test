import React, { useState } from 'react';
import Filter from './components/Filter';
import AppNavbar from './components/Navbar';
import ProductList from './components/ProductList';
import data from './data.json';
import './styles/App.css';

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
    <div className="App">
      <AppNavbar />
      <div className="container">
        <Filter categories={ categories } handleCategoryChange={ handleCategoryChange } />
        <ProductList products={ filteredProducts } />
      </div>
    </div>
  );
}

export default App;
