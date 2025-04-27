import { httpClient } from "../utils";

const getCategorias = async(params)=> await httpClient('catalogo/categoria',params,'get')
 //post
 //put
 //delete
 //patch
export {getCategorias}