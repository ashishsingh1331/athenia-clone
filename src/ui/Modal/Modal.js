import React from "react";
import { useDispatch } from "react-redux";
import { uiSliceActions } from "../../store/ui-slice";
import {useCallback,useState,useEffect} from 'react';

function Modal(props) {
    const dispatch = useDispatch();
    const [isOpen, setIsOpen] = useState(false);

    const escFunction = useCallback((event) => {
      if (event.key === "Escape") {
        dispatch(uiSliceActions.toggleModal());
      }
    }, []);
  
    useEffect(() => {
      document.addEventListener("keydown", escFunction, false);
  
      return () => {
        document.removeEventListener("keydown", escFunction, false);
      };
    }, []);
  return (
    <>
      <div className="justify-center items-center flex overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none">
        <div className="relative w-auto my-6 mx-auto max-w-3xl">
          {/*content*/}
          <div className="border-0 rounded-lg shadow-lg relative flex flex-col w-full bg-white outline-none focus:outline-none">
            {/*header*/}
            <div className="flex items-start justify-between p-5 border-b border-solid border-blueGray-200 rounded-t">
              <h3 className="text-3xl font-semibold">{props.title}</h3>
              <button
                    className="p-1 ml-auto bg-transparent border-0 text-black  float-right text-3xl leading-none font-semibold outline-none focus:outline-none"
                    onClick={() => dispatch(uiSliceActions.toggleModal())}
                  >
                    <span className="bg-transparent text-black  h-6 w-6 text-2xl block outline-none focus:outline-none">
                      ×
                    </span>
                  </button>
            </div>
            {/*body*/}
            <div className="relative p-6 flex-auto">
                  {props.children}
            </div>
          </div>
        </div>
      </div>
      <div className="opacity-25 fixed inset-0 z-40 bg-black"></div>
    </>
  );
}

export default Modal;
