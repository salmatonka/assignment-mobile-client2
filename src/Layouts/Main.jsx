import React from 'react'
import Navbar from '../Shares/Navbar/Navbar'
import Footer from '../Shares/Footer/Footer'
import { Outlet } from 'react-router-dom';
const Main = () => {
  return (
    <div>
    <Navbar />
    <Outlet />
    <Footer />
</div>
  )
}

export default Main
