import React from 'react';


const Watches = () => {

  const watchData = [
    { id:1, name: 'Rolex', price: 12000, description: 'Luxury Watch', image: '/w1.png'},
    { id:2, name: 'Omega', price: 8000, description: 'Sporty Watch', image: '/w4.webp'},
    { id:3, name: 'Citizen', price: 25000, description: 'Elegant Timepiece', image: '/w2.png'},
    { id:4, name: 'Reward', price: 6000, description: 'Sporty and Stylishh', image: '/w6.png'},
    { id:5, name: 'Breitling', price: 11000, description: 'Bold and Rugged', image: '/w5.png'},
    { id:6, name: 'Seiko', price: 30000, description: 'Affordable and Reliable', image: '/w3.png'},
  ]

  return (
    <div>
      <div className='watches'>
        {watchData.map((watch) => (
          <div key={watch.id} className='watch-card'>
            <img src={watch.image} alt={watch.name}/>
            <h3>{watch.name}</h3>
            <p>{watch.description}</p>
            <div className='price'>${watch.price}</div>
            <button>Add to Cart</button>
          </div>
        ))}
      </div>
    </div>
  )
}

export default Watches
