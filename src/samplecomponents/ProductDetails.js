import React from 'react'
import { useParams } from 'react-router-dom'

const ProductDetails = () => {
const {productId}=useParams();
  return (
    <div>
      <h2>ProductDetails</h2>
      <p>Your product id is: {productId}</p>
      </div>
  )
}

export default ProductDetails