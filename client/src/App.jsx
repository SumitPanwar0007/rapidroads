
import './App.css'
import Login from './pages/Login'
import Register from './pages/Register'
import {Routes,Route, Navigate} from 'react-router-dom'
import HomePage from './pages/Homepage/HomePage'
import { AppcontextProvider } from './components/AppContext'
import './App.css'
function App() {


  return (
    <>
    <Routes>
      <Route path='/' element={
        <ProtectedRoutes> 
        <AppcontextProvider>
       <HomePage/>
        </AppcontextProvider>
        
        </ProtectedRoutes>
    } />
    {/* <Route path='/transection' /> */}
      <Route path='/login' element={
        <AppcontextProvider><Login/></AppcontextProvider>} />
      <Route path='/register' element={
       <AppcontextProvider><Register/></AppcontextProvider>}/>
    </Routes>
        
    
    </>
  )
}

export function ProtectedRoutes(props){
if(localStorage.getItem("user")){
  return props.children;
}
else{
  return <Navigate to="/login"/>;
}

}

export default App
