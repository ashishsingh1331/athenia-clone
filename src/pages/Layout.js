import React from "react";
import { useSelector } from "react-redux";
import { Outlet } from "react-router-dom";
import Header from "../components/Header/Header";
import Modal from "../ui/Modal/Modal";


function Layout(props) {
  const {isOpen:isModalOpen} = useSelector(state => state.ui.modal);
  
  return (
    
    <div className="w-full">
    <Header/>
      <main>
        <Outlet />
      </main>

      { isModalOpen && <Modal title="Book"> <p className="my-4 text-blueGray-500 text-lg leading-relaxed">
              Lorem ipsum dolor, sit amet consectetur adipisicing elit. Inventore obcaecati esse cumque quis minus natus magni amet ipsa quos delectus.
              </p></Modal>}
    
    </div>
    
  );
}

export default Layout;
