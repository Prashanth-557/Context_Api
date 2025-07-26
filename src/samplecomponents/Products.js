import React from 'react'
import { Link } from 'react-router-dom'

const Products = () => {
const  productList=[
    {id:101,pname:'Iphone',pprice:99999},
    {id:102,pname:'Samsung',pprice:88888},
    {id:103,pname:'RealMe',pprice:5555},
]
  return (
    <div>
        <h2>Products List:</h2>
        <ul style={{textAlign:'left'}}>
            {productList.map(product=>
                <li key={product.id}>
                    <Link to={`/products/${product.id}`}>{product.pname}</Link>
                </li>
            )}
        </ul>
    </div>
  )
}

export default Products