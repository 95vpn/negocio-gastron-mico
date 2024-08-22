import React from 'react';
import { useLocation } from 'react-router-dom';
import DOMPurify from 'dompurify';

import './styles/catalogoId.css'


const CatalogoId = () => {
    
    const location = useLocation();
    const { prod } = location.state || {};

    const createPurify = (html) => ({
        __html: DOMPurify.sanitize(html)
    })

    return (
        <div>
            <h1>{prod?.name}</h1>
            <div className='catalogoId-container'>
                {
                    
                    prod?.results?.map((item, index) => (
                        <div className='catalogoId-container-receta hidden' key={index}>
                            <h2>{item.name}</h2>
                            <figure>
                                <img src={item.image} alt={item.name} />
                            </figure>
                            <p dangerouslySetInnerHTML={createPurify(item.content)} />
                        </div>

                    ))
                }
            </div>
        </div>
    )
}

export default CatalogoId;