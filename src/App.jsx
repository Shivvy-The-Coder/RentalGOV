import React from 'react'
import LandingPage from './pages/LandingPage';
import { BrowserRouter,Routes , Route } from 'react-router';
import UnitForm from './pages/UnitForm';
import PaymentSection from './pages/PaymentSection';
const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<LandingPage/>}/>
        <Route path="/form" element={<UnitForm/>}/>
        <Route path="/payment" element={<PaymentSection/>}/>
    </Routes>
    </BrowserRouter>
  )
}

export default App;
