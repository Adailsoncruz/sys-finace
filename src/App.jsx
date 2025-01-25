import { BrowserRouter as Router, Routes, Route} from "react-router-dom"
import LoginPage from "./pages/Login"
import Products from "./pages/Products"
import Transactions from "./pages/Transactions"

function App() {

  return (
    <Router>
      <Routes>
        <Route path="/" element={<LoginPage />} />
        <Route path="/transactions" element={<Transactions />}/>
        <Route path="/products" element={<Products />} />         
      </Routes>
    </Router>
  )
}

export default App
