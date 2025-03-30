import { useState,useEffect } from 'react'
import './App.css'
import { LoginView } from './views/auth' 
import { DashBoardView } from './views/DashBoardView'
import axios from 'axios';
function App() {
  const [isLogged,setIsLogged] = useState(false);
  const [categorias,setCategorias] = useState([])
  const hasLogin = ()=>{
    console.log('hasLogin')
    setIsLogged(prevState=>!prevState)
  }
  const addNewCategory = (newCategory)=>{
    setCategorias(prevState=>[...prevState,newCategory])
  }
  const getCategories = async ()=>{
    const {data:{pagination,data}} = await axios.get('http://localhost:8000/api/catalogo/categoria')
   
    setCategorias(data)
    
  }
  useEffect(()=>{
    async function fetchData(){
      await getCategories()
    }
    fetchData()
  },[])
  const AuthViews = ()=>{
    
    const view = isLogged?<DashBoardView categorias={categorias} addNewCategory={addNewCategory} />:<LoginView />
    return(
    <>
      {view}
    </>
    )
  }
  return (
     <>
     <AuthViews />
     <button onClick={hasLogin} >Cambiar estado</button>
    
     </>
  )
}

export default App
