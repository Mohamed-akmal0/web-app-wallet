import React from 'react'
import { Route, Routes } from "react-router-dom";
import Password from '../pages/Password';

const RootNavigation = () => {
  return (
    <Routes>
        <Route path='/*' element={<Password />}/>
    </Routes>
  )
}

export default RootNavigation