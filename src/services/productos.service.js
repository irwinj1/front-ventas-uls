import { httpClient } from "../utils";

const getProductos = async(params)=> await httpClient('catalogo/productos',params,'get')
 //post
 //put
 //delete
 //patch
export {getProductos}