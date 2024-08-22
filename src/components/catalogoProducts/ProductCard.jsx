import React from 'react';
import { useNavigate } from 'react-router-dom';

const ProductCard = ({ prod }) => {
    const navigate = useNavigate();
    const palabra = 'Recipes'; 
    const recipe = prod.name === palabra ? prod : null;


    const handleView = () => {
        if (recipe) {
            navigate(`/catalogo-de-productos/${recipe.name}`, { state: { prod } });
        } else {
            console.log('Producto no encontrado');
        }
    };
   

    return (
        <>
            {recipe ? (
                <button onClick={handleView}>{recipe.name}</button>
            ) : (
                <p></p>
            )}
        </>
    );
};

export default ProductCard;