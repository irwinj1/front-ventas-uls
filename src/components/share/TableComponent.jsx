import { faEye, faPenToSquare, faTrash } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react'

export function TableComponent({headers,items}) {
  console.log(headers);
  
  return (
    <table className="table table-striped">
  <thead>
    <tr>
      {headers.map((head,i)=>(
        <th key={i} scope="col">{head}</th>
      ))}
     
    </tr>
  </thead>
  <tbody>
    
      {items.map(item=>(
        <tr key={item.id}>
          <td>{item.nombre}</td>
          <td>{item.precio}</td>
          <td>{item.inventario.cantidad}</td>
          <td>{item.image.nombre}</td>
          <td>{item.estado?'Activo':'Inactivo'}</td>
          <td>
            <button className='btn ' onClick={()=>console.log('ver')}>
            <FontAwesomeIcon icon={faEye}  />
            </button>
            <button className='btn'>
            <FontAwesomeIcon icon={faPenToSquare} onClick={()=>console.log('Editar')}  />
            </button>
            <button className='btn' onClick={()=>console.log('Activar/Desactivar')}>
            <FontAwesomeIcon icon={faTrash}  />
            </button>
          </td>
        </tr>
      )
      )}
   
  </tbody>
</table>

  )
}
