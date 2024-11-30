import React from 'react'
import { Route, Routes } from "react-router-dom";
import Password from '../pages/Password';
import Seed from '../pages/Seed';

const RootNavigation = () => {
  return (
    <Routes>
        <Route path='/' element={<Password />}/>
        <Route path='/seed' element={<Seed />}/>
    </Routes>
  )
}

export default RootNavigation