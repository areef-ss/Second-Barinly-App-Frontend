
import { BrowserRouter, Route, Routes } from "react-router-dom"
import DashBoard from "./pages/DashBoard"
import { SignIn } from "./pages/SignIn"
import { SignUp } from "./pages/SignUp"
function App() {
  return <BrowserRouter>
    <Routes>
      <Route path="/signup" element={<SignUp />} />
      <Route path="/signin" element={<SignIn />} />
      
      <Route path="/dashBoard" element={<DashBoard />} />
    </Routes>
  </BrowserRouter>

}

export default App
