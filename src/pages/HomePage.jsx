import React from 'react';
import './styles/homePage.css'

const HomePage = ({prod }) => {
  
  console.log(prod)

  return (
    <div className='home-page-container'>
      <h2></h2>
      <p>At Homemade Delights, we invite you on a culinary journey full of flavors, aromas, and creativity. From traditional recipes to modern innovations, our platform is designed to inspire chefs of all levels. Whether you are an experienced cook or someone just starting to explore the art of cooking.</p>
      {
        prod?.map((item, index) => (
          <div key={index}>
            <h2>{item.name}</h2>
            <figure>
              <img src={item.image} alt={item.name} />
            </figure>
          </div>
        ))
      }
    </div>
  )
}

export default HomePage;