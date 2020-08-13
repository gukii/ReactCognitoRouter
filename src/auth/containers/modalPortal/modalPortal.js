import React, { useEffect, useState } from "react";
import { createPortal } from "react-dom";

// 'modal-root' is a sibling to 'app-root'
const modalRoot = document.getElementById("modal-portal");


export function Modal({ isOpen, closeFn=null, onSubmit=null, children }) {
  // element to which the modal will be rendered
  const el = document.createElement("div");

  useEffect(() => {
    // append to root when the children of Modal are mounted
    modalRoot.appendChild(el);

    // do a cleanup
    return () => {
      modalRoot.removeChild(el);
    };
  }, [el]);

  return (
    isOpen &&
    createPortal(
      // child element
      <div
        style={{
          position: "absolute",
          top: 0,
          left: 0,
          height: "100%",
          width: "100%",
          padding: "100px",
          backgroundColor: "rgba(0,0,0,0.6)"
        }}
      >
        { closeFn !== null &&
          <button
             className="modal-close"
             onClick={()=>closeFn()}
          >X</button>
        }

        <p
          style={{
            width: "50%",
            background: "white",
            padding: "50px",
            textAlign: "center"
          }}
        >
          {children}
        </p>
        onSubmit !== null && <button onClick={ ()=>onSubmit() }>asfd</button>
      </div>,
      // target container
      el
    )
  );
}


function InputFunction({ label="", onSubmit=null, onCancel=null, field, setField }) {



  return(
    <div className="fullFormDiv">
        <label className="fullFomLabel" htmlFor="field">
            {label}
        </label>
        <input
          type="text"
          name="field"
          value={field}
          id="field"
          placeholder=""
          onChange={e => setField(e.target.value)}
        />
    </div>
  )

}


export function ConfirmationCodeDialog(isOpen=false) {
  const [isModalOpen, setModalOpen] = useState(isOpen);
  const [code, setCode] = useState('');

  const toggleModal = () => setModalOpen(!isModalOpen);

  const res = Modal({ isOpen:isModalOpen, closeFn:()=>setModalOpen(false), onSubmit:(a)=> console.log('onSubmit:',code), children:(
    <><strong>heiya</strong>{ InputFunction({ label:"Some Label:", field:code, setField:setCode }) }<button onClick={()=>console.log(code) }>b</button> </>
  ) })
  console.log('res:', res)
  return res
  /*
  return (

      <Modal isOpen={isModalOpen} closeFn={()=>setModalOpen(false)} submitFn={ (a)=> console.log('submitFn:',a) }>
        <p>some text here..</p>
        <button onClick={toggleModal}>close modal</button>
      </Modal>
  );
  */
}


export default function App() {
  const [isModalOpen, setModalOpen] = useState(false);

  const toggleModal = () => setModalOpen(!isModalOpen);

  return (
    <div
      style={{
        position: "relative",
        overflow: "hidden"
      }}
    >
      <button onClick={toggleModal}>open modal</button>

      <Modal isOpen={isModalOpen} closeFn={ ()=>setModalOpen(false) }>
        <p>some text here..</p>
        <button onClick={toggleModal}>close modal</button>
      </Modal>
    </div>
  );
}
