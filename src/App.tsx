
import { Routes, Route, Navigate } from 'react-router-dom'
import Home from './pages/Home'
import Showroom from './pages/Showroom'

import ProductDetail from './pages/ProductDetail'


function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />

     

<Route
  path="/restore"
  element={<Showroom collection="RESTORE" />}
/>



      <Route
        path="/move"
        element={<Showroom collection="MOVE" />}
      />

      <Route
        path="/refresh"
        element={<Showroom collection="REFRESH" />}
      />

      <Route path="*" element={<Navigate to="/" replace />} />

<Route path="/product/:id" element={<ProductDetail />} />

    </Routes>
  )
}

export default App
