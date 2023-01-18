import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { createPrivateRoute } from './PrivateRoute'
import Login from './containers/login/Login'
import NotFound from './containers/notFound/NotFound'
import Main from './containers/dashboard/DashBoard'

function App() {
  return (
    <BrowserRouter>
      <Routes>
        {createPrivateRoute({
          path: '/',
          element: <Main />,
        })}
        <Route path="/login" element={<Login />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
