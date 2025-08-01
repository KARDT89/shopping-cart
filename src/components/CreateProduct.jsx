import React from 'react';
import AddProductForm from './AddProductForm';

export const CreateProduct = () => {
  return (
    <div className="flex flex-col items-center justify-center gap-4">
      <h1 className="font-bold text-2xl">Add a new Product</h1>
      <AddProductForm />
    </div>
  );
};
