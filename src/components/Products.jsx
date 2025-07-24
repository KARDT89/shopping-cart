import React, { useEffect, useState } from 'react'
import { LoaderCircle } from 'lucide-react'
import Card from './Card'

export const Products = () => {

  const[products, setProducts] = useState([])
  const [isLoading, setIsLoading] = useState(false)

  useEffect(()=>{
    async function fetchProducts (){
      setIsLoading(true)
      const response = await fetch('https://fakestoreapi.com/products')
      const data = await response.json()
      setProducts(data)
      setIsLoading(false)
    }
    fetchProducts()
  },[])

  console.log(products);
  
  if(isLoading) return (
  <div className='flex h-full w-full items-center justify-center bg-background text-foreground text-2xl gap-2'>
    <LoaderCircle className="animate-spin"/> <p>Loading</p>
  </div>
  )
  
  return (
    <div>
      {/* left */}

      {/* right */}
        {products.map((product)=>(
          <Card title={product.title}/>
        ))}
    </div>
  )
}
