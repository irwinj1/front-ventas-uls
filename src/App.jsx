import './App.css'
import { LoginView } from './views/auth' 
import { DashBoardView } from './views/DashBoardView'
function App() {
 
  const AuthViews = ()=>{
    const view = false?<LoginView />:<DashBoardView />
    return(
    <>
      {view}
    </>
    )
  }
  return (
     <>
     <AuthViews />
    
     </>
  )
}

export default App
