import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Layout from './layouts/Layout'
import Home from './pages/home/Home'
import Recipes from './pages/recipes/Recipes'
import Contact from './pages/contact/Contact'
import './App.css'

function App() {
  

  return (
    <Router>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path='Recipes' element={<Recipes />} />
          <Route path='Contact' element={<Contact />} />
        </Route>
      </Routes>
    </Router>
  )
}

export default App
