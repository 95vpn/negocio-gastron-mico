import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { getProductsThunk } from '../store/slices/products.slice';

const useFetch = () => {


    const products = useSelector(store => store.products);
    const dispatch = useDispatch()

    useEffect(() => {
        const apiKey = '35dcf687a5aa4e1ca7ee37b2f6a20d96'
        const url = ` https://api.spoonacular.com/food/search?apiKey=${apiKey}`
        dispatch(getProductsThunk(url));
    }, [dispatch])


    return products
    
}

export default useFetch;