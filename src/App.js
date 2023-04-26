import { Cart, Home } from "./components"
import MainLayout from "./layout/MainLayout"
import { BrowserRouter, Route, Routes } from "react-router-dom"

function App() {
  return (
    <BrowserRouter>
      <MainLayout>
        <div className='App'>
          <Routes>
            <Route path='/' element={<Home />} />
            <Route path='/cart' element={<Cart />} />
          </Routes>
        </div>
      </MainLayout>
    </BrowserRouter>
  )
}

export default App
