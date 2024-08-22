import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getProductsThunk } from '../store/slices/products.slice';
import ProductCard from '../components/catalogoProducts/ProductCard';
import HomePage from './HomePage';
import HomePageImages from '../components/homePage/HomePageImages';
import useFetch from '../hooks/useFetch';

const CatalogoProducts = () => {

  const products = useFetch();

  console.log(products)

  return (
    <>
      <section>
        {
          products?.searchResults?.map(prod => (
            <div key={prod.name}>
              <ProductCard
                prod={prod}
              />
            </div>

          ))
        }
      </section>
      

    </>
  )
}

export default CatalogoProducts;