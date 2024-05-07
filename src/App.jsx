import { Routes,Route, BrowserRouter } from "react-router-dom"
import Login from "./Components/LoginPage/Login"
import Dashboard from "./Components/AdminPage/Dashboard"
import Database from "./Components/Function/Database"
function App() {
return (
      <div className="">
      <BrowserRouter>
                  <Routes>
              <Route path="/" element={  <Login/>}/>
              <Route path='/dashboard' element={<Dashboard/>}>
              <Route index element={<Database/>}/>
              <Route path="Show" index element={<Database/>}/>
              </Route>
              
              </Routes>
              </BrowserRouter>
      </div>
   
 
  )
}

export default App
