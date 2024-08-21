import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getProductsThunk } from '../store/slices/products.slice';
import ProductCard from '../components/catalogoProducts/ProductCard';

const CatalogoProducts = () => {

    const products = useSelector(store => store.products);
    const dispatch = useDispatch()

    useEffect(() => {
      const apiKey = '35dcf687a5aa4e1ca7ee37b2f6a20d96'
      const url = ` https://api.spoonacular.com/food/search?apiKey=${apiKey}`
      dispatch(getProductsThunk(url));
    }, [])
    
    // console.log(products.searchResults)

  return (
    <>CatalogoProducts
      <section>
        {
          products?.searchResults?.map(prod => (
            <ProductCard
              key={prod.name}
              prod={prod}
            
            />
            
          ))
          
        }
      </section>

    </>
  )
}

export default CatalogoProducts;