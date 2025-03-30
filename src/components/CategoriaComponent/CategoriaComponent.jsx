import React from 'react'
import { style } from './CategoriaComponentStyle'

export function CategoriaComponent({categoria}) {
  return (
    <div>
      <h2  style={style}>{categoria.nombre}</h2>
    </div>
  )
}
