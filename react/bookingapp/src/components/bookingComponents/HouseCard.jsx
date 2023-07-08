import React from 'react'

const HouseCard = ({ house }) => {
  return (
    <div className='house-card'>
        <img src={ house.image } alt='house'/>
        
        <div className='details-container'>
            <h4>{ house.city }, { house.country }</h4>
            <p>Rs. { house.price }/Night</p>
        </div>

        <div className='btn-container text-center'>
            <button>View More</button>
        </div>
    </div>

  )
}

export default HouseCard