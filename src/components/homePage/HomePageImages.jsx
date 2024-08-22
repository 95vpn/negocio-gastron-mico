import React from 'react';

import { useDispatch, useSelector } from 'react-redux';
import { getProductsThunk } from '../../store/slices/products.slice';

const HomePageImages = () => {
    const products = useSelector(store => store.products);
    const dispatch = useDispatch()

    useEffect(() => {
        const apiKey = '35dcf687a5aa4e1ca7ee37b2f6a20d96'
        const url = ` https://api.spoonacular.com/recipes/complexSearch?apiKey=${apiKey}`
        dispatch(getProductsThunk(url));
    }, [dispatch])

    console.log(products)
    return (
        <div>
            <section>
            
            </section>
        </div>
    )
}

export default HomePageImages;