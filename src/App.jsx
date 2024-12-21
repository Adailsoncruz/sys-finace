import { BrowserRouter as Router, Routes, Route} from "react-router-dom"
import LoginPage from "./pages/Login"
import Products from "./pages/Products"

function App() {

  return (
    <Router>
      <Routes>
        <Route path="/" element={<LoginPage />} />
        <Route path="/products" element={<Products />} /> 
      </Routes>
    </Router>
  )
}

export default App
