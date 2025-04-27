import { useState,useEffect } from 'react'
import './App.css'
import AuhtNavigation from './Navigation/Auth'
import DashBoardNavigation from './Navigation/DashBoard'
import { authContext } from './context/logginContext'

function App() {

  const [isLoggin, setIsLoggin]=useState(false)

  const navigator = ()=> {
    return isLoggin?<DashBoardNavigation />:<AuhtNavigation />
  }
  console.log(localStorage.getItem('loggin'));
  
  
  useEffect(()=>{
    console.log(localStorage.getItem('loggin'));
    
  },[])
  return (
     <authContext.Provider value={setIsLoggin}>
     {navigator()}
    
     </authContext.Provider>
  )
}

export default App
