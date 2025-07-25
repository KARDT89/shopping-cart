import React from 'react'
import AddProductForm from '../components/AddProductForm'

export const ManageProducts = () => {
  return (
    <div className='flex flex-col items-center justify-center gap-10'>
      <h1 className='font-mono text-4xl'>Add Products</h1>
      <AddProductForm/>
    </div>
  )
}
