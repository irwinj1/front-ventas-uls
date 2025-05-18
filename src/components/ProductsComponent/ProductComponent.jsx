import React, { useEffect, useState } from 'react'
import { TableComponent } from '../share/TableComponent'
import { getProductos } from '../../services'

export  function ProductComponent() {
    const headers=['Nombre','Precio','Cantidad','Image','Estado','Acciones']
    const [productos,setProductos]=useState([])

    const productosQuery = async() => {
        try {
            const response = await getProductos({})
            console.log(response.data.data);
            setProductos(response.data.data)
        } catch (error) {
            
        }
    }
    useEffect(()=>{
        const getData = async()=>{
            productosQuery()
        }
        getData()
    },[])
  return (
    <div>
        <div >
            <button className='btn btn-primary'>Agregar</button>
        </div>
      <TableComponent headers={headers} items={productos} />
    </div>
  )
}
