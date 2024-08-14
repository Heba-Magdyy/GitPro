import { Outlet } from "react-router-dom";
import Navig from "./Navig";
import Footer from "./Footer";


import React from 'react'

export default function Layout() {
  return (
   <div className="flex flex-col min-h-screen">
         <Navig/>

    <main>
    <Outlet/>

    </main>
    <Footer/>
   </div>
  )
}
