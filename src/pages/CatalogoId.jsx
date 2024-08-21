import React from 'react';
import InfoCatalogo from '../components/catalogoId/InfoCatalogo';
import { useLocation } from 'react-router-dom';
import DOMPurify from 'dompurify';

const CatalogoId = () => {


    const location = useLocation();
    const { prod } = location.state || {};

    const createPurify = (html) => ({
        __html: DOMPurify.sanitize(html)
    })
    
    console.log(prod)

    return (
        <div>CatalogoId
            <h1>{prod?.name}</h1>
           
            {
                prod?.results?.map((item, index) => (
                    <div key={index}>
                        <h2>{item.name}</h2>
                        <figure>
                            <img src={item.image} alt={item.name} />
                        </figure>
                        <p dangerouslySetInnerHTML={createPurify(item.content)} />
                    </div>
                    
                ))
            }
        </div>
    )
}

export default CatalogoId;