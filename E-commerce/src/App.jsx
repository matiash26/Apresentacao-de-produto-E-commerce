import { Navbar } from "./components/Navbar"
import { Products } from "./components/Products"
import { About } from './components/About'
import { Footer } from "./components/Footer"
import './App.css'
import "./styles/responsivo.css"

function App() {
  return (
    <div className="App">
      <Navbar />
      <Products />
      <About />
      <Footer />
    </div>
  )
}

export default App
