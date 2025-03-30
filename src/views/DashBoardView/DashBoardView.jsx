import React from 'react'
import { CategoriaComponent } from '../../components';

export function DashBoardView({ categorias,addNewCategory}) {
  

  const handleAddCategory = () => {
   addNewCategory('cuatro')
  }
  
  return (
    <div>
      <h1>Dahsboard</h1>
      <h2>Lista de categorias</h2>
     
        {categorias.map((categoria)=>(
            <CategoriaComponent key={categoria.id} categoria={categoria} />
          )
        )}
      
      <button onClick={handleAddCategory}>Agregar categoria</button>
    </div>
  )
}
