import React from "react";
import { Outlet } from "react-router-dom";
import Header from "../components/Header/Header";


function Layout(props) {
  return (
    
    <div className="w-full">
    <Header/>
      <main>
        <Outlet />
      </main>
    
    </div>
    
  );
}

export default Layout;
