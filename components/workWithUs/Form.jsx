"use client";
import Modal from "../Modal";
import { useState, useRef } from "react";

export default function Form() {
  const [showModal, setShowModal] = useState(false);

  const name = useRef();
  const [nameIsValid, setNameIsValid] = useState(null);
  const email = useRef();
  const [emailIsValid, setEmailIsValid] = useState(null);
  const description = useRef();
  const [descriptionIsValid, setDescriptionIsValid] = useState(null); 

  const formIsValid= emailIsValid && nameIsValid && descriptionIsValid;

  const handleModal = (e) => {
    e.preventDefault();
    setShowModal((prev) => !prev);
    document.body.classList.add("overflow-hidden");
    name.current.value="";
    email.current.value="";
    description.current.value="";
  };

  const closeModal= () =>{
    setShowModal(false);
  }

  const handleNameBlur = () => {
    const userInput = name.current.value;
    setNameIsValid(userInput !== ""); 
  };

  const handleEmailBlur = () => {
    const userInput = email.current.value;
    setEmailIsValid(userInput !== ""); 
  };

  const handleDescriptionBlur = () => {
    const userInput = description.current.value;
    setDescriptionIsValid(userInput !== ""); 
  };

  return (
    <div className="mt-4 md:w-1/2 md:mt-0">
      {showModal && <Modal name={name.current.value} email={email.current.value} close={closeModal}/>}
      <h2 className="text-4xl md:text-6xl font-bold text-center">
        Lavora <span className="text-emerald-500">con noi</span>
      </h2>
      <p className="text-slate-400 text-center my-8">
        Invia la tua candidatura per far parte del team di presto
      </p>
      <form className="md:w-2/3 mx-auto">
        <div className="flex flex-col">
          <label htmlFor="name" className="text-sm mb-2">
            Nome
          </label>
          <input
            id="name"
            className={`bg-white rounded outline-none p-2 ${
              nameIsValid === false ? "outline-red-500" : ""
            }`}
            type="text"
            name="name"
            ref={name}
            onBlur={handleNameBlur}
          />
        </div>
        <div className="flex flex-col mt-8">
          <label htmlFor="email" className="text-sm mb-2">
            Email
          </label>
          <input
            id="email"
            className={`bg-white rounded outline-none p-2 ${
              emailIsValid === false ? "outline-red-500" : ""
            }`}
            type="text"
            name="email"
            ref={email}
            onBlur={handleEmailBlur}
          />
        </div>
        <textarea
          name="description"
          className={`w-full mt-10 h-[150px] rounded p-2 placeholder:text-sm outline-none ${descriptionIsValid===false ? "outline-red-500" : ""}`}
          placeholder="Inserisci una tua breve presentazione"
          ref={description}
          onBlur={handleDescriptionBlur}
        />
        <div className="mt-10 flex justify-center">
          <button
            className={`w-3/4 uppercase bg-emerald-500 p-2 rounded text-white disabled:opacity-40 disabled:cursor-not-allowed`}
            onClick={handleModal}
            disabled={!formIsValid}
          >
            Invia la candidatura
          </button>
        </div>
      </form>
    </div>
  );
}
