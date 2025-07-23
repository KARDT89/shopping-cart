import React, { useEffect, useState } from 'react'
import Card from './Card'

export const Products = () => {

  const[products, setProducts] = useState([])

  useEffect(()=>{
    async function fetchProducts (){
      const response = await fetch('https://fakestoreapi.com/products')
      const data = await response.json()
      setProducts(data)
    }
    fetchProducts()
  },[])
  
  return (
    <div>
        {products.map((product)=>(
          <Card title={product.title}/>
        ))}
    </div>
  )
}
