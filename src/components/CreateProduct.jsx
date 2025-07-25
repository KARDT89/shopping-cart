import React from 'react';
import AddProductForm from './AddProductForm';

export const CreateProduct = () => {
  return (
    <div className="flex flex-col items-center justify-center gap-10">
      <h1 className="font-mono text-4xl">Add a new Products!!</h1>
      <AddProductForm />
    </div>
  );
};
