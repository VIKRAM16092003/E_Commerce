import React, { Fragment, useEffect, useState } from 'react'
import ProductCard from '../components/ProductCard';
import { useSearchParams } from 'react-router-dom';




function Home() {
  const [searchParams]=useSearchParams();

    const [products,setProducts]=useState([]);

    useEffect(() => {
      fetch(`${import.meta.env.VITE_API_URL}/products?${searchParams}`)
        .then((res) => res.json())
        .then((res) => setProducts(res.products));
    }, [searchParams]);
  if (!products || Object.keys(products).length === 0) {
      return <h1>No items found</h1>;
    }

  return ( 
  <Fragment>
    
        <h1 id="products_heading">Latest Products</h1>
        <section id="products" className="container mt-5">
          <div className="row">
            {products.map(product=> <ProductCard product={product}/>)}
            
          
          </div>
        </section>
        
</Fragment>
);
}

export default Home;