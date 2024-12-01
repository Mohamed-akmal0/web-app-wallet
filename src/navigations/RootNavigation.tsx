import React from 'react'
import { Route, Routes } from "react-router-dom";
import Password from '../pages/Password';
import Seed from '../pages/Seed';
import LandingPage from '../pages/LandingPage';

const RootNavigation = () => {
  return (
    <Routes>
        <Route path='/' element={<LandingPage />}/>
        <Route path='/password' element={<Password />}/>
        <Route path='/seed' element={<Seed />}/>
    </Routes>
  )
}

export default RootNavigation