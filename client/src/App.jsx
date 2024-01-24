import './App.css'
import {BrowserRouter, Routes, Route} from "react-router-dom"
import Header from "./components/Header"
import SignIn from './pages/SignIn'
import Signup from './pages/Signup'
function App() {
  return (
      <BrowserRouter>
      <Header/>
        <Routes>
          <Route path='/sign-in' element={<SignIn/>}/>
          <Route path='/sign-up' element={<Signup/>}/>
          {/* <Route path='/si' element={<SignIn/>}/> */}
        </Routes>
      </BrowserRouter>
  )
}

export default App
