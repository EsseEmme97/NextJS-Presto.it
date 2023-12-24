"use client";
import { signIn, signOut } from "next-auth/react";
import { getSession } from "next-auth/react";
import { useState, useEffect } from "react";

import { Carousel } from "./Carousel";

export default function MainSection() {
  const [isLoggedIn, setIsLoggedIn] = useState(null);

  useEffect(() => {
    getSession().then((session) => {
      setIsLoggedIn((prev) => (prev = session));
    });
  }, []);

  return (
    <main className="container md:flex mx-auto  bg-slate-100 rounded p-8">
      <div className="p-4 w-full md:w-1/2">
        <h1 className="text-4xl text-center md:text-6xl font-bold">
          Trova i <span className="text-emerald-500">migliori affari </span>{" "}
          della tua città
        </h1>
        <div className="md:mt-32 my-8 flex justify-center items-center">
          {isLoggedIn ? (
            <button
              className="uppercase p-2 rounded bg-emerald-500 text-white"
              onClick={() => {
                signOut();
                getSession().then((session) => {
                  setIsLoggedIn((prev) => (prev = session));
                });
              }}
            >
              Inizia qui
            </button>
          ) : (
            <button
              className="uppercase p-2 rounded bg-emerald-500 text-white text-lg"
              onClick={() => {
                signIn();
                getSession().then((session) => {
                  setIsLoggedIn((prev) => (prev = session));
                });
              }}
            >
              Registrati
            </button>
          )}
        </div>
      </div>
      <Carousel />
    </main>
  );
}
