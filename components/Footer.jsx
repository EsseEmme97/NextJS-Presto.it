"use client"

import call from "@/assets/call.svg";
import navigate from "@/assets/navigate.svg";
import mail from "@/assets/mail.svg";
import fb from "@/assets/logo-facebook.svg";
import ig from "@/assets/logo-instagram.svg";
import linkedin from "@/assets/logo-linkedin.svg";
import twitter from "@/assets/logo-twitter.svg";
import Image from "next/image";
import Link from "next/link";
import Modal from "./Modal";
import { useState, useRef } from "react";

export default function Footer() {
  const [showModal,setShowModal]=useState(false);
  const email= useRef();

  const handleModal=(e)=>{
    e.preventDefault();
    setShowModal(prev=>!prev)
    email.current.value="";
  }

  const closeModal= ()=>{
    setShowModal(false)
  }


  return (
    <footer className="container bg-slate-900 flex justify-between mx-auto p-8 mt-12">
      {showModal && <Modal email={email.current.value} close={closeModal}/>}
      <div>
        <h3 className="font-bold text-3xl text-emerald-500">Dove siamo</h3>
        <div className="flex mt-4">
          <Image src={navigate} width={16} height={16} className="me-2" alt="ping-icon"></Image>
          <span className="text-slate-400">Via Roma 10, Roma, RM</span>
        </div>
        <div className="flex mt-4">
          <Image src={call} width={16} height={16} className="me-2" alt="telephone-icon"></Image>
          <span className="text-slate-400">+39 3333 3333</span>
        </div>
        <div className="flex mt-4">
          <Image src={mail} width={16} height={16} className="me-2" alt="email-box-icon"></Image>
          <span className="text-slate-400">info@example.com</span>
        </div>
        <div className="flex mt-4">
          <span className="p-2 rounded-lg border border-white ">
            <Image src={fb} width={16} height={16} alt="fb-logo" />
          </span>

          <span className="p-2 rounded-lg border border-white ms-2">
            <Image src={ig} width={16} height={16} alt="ig-logo" />
          </span>
          <span className="p-2 rounded-lg border border-white ms-2">
            <Image src={twitter} width={16} height={16} alt="twitter-logo" />
          </span>
          <span className="p-2 rounded-lg border border-white ms-2">
            <Image src={linkedin} width={16} height={16} alt="linkedin-logo" />
          </span>
        </div>
      </div>
      <div>
        <h3 className="font-bold text-3xl text-emerald-500">Link Utili</h3>
        <Link href="/annunci" className="mt-4 text-slate-400 block">
          Annunci
        </Link>
        <Link href="/" className="mt-4 text-slate-400 block">
          Home
        </Link>
        <Link href="/categorie" className="mt-4 text-slate-400 block">
          Categorie
        </Link>
      </div>
      <div>
        <h3 className="font-bold text-3xl text-emerald-500">Newsletter</h3>
		<p className="text-slate-400 mt-4">Iscriviti alla nostra newsletter</p>
		<form className="border rounded-lg border-white mt-4 p-2">
			<input className="outline-none p-4 bg-slate-900 text-slate-400" placeholder="inserisci la tua mail" ref={email}/>
      <button className="p-2 uppercase bg-emerald-500 rounded-lg " onClick={handleModal}>signup</button>
		</form>
      </div>
    </footer>
  );
}
