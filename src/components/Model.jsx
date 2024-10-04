import React from 'react'
import { CgCloseO } from "react-icons/cg";
import { createPortal } from 'react-dom';


const Model = ({onClose,isOpen,children}) => {
    return createPortal (
        <>
            {
                isOpen && (
                    <>
                        <div className=" m-auto relative z-50 min-h-[200px] max-w-[80%]
                        bg-white p-4">
                            <div className="flex justify-end">
                                <CgCloseO onClick={onClose} className="text-2xl self-end  "/>
                            </div>
                            {children}
                        </div>
                        <div onClick={onClose} className="  absolute top-0 z-40 h-screen w-screen backdrop-blur " />
                    </>
                )
            }
        </>,document.getElementById("model-root")
    );
};

export default Model
