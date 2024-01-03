"use client";
import { useEffect, useState } from "react";
import { useFormState } from "react-dom";
import createAnnouncement from "@/utils/createAnnouncement";

export default function CreateAnnouncement() {
  const [categories, setCategories] = useState([]);
  const [submitted,submitAction]=useFormState(createAnnouncement,false)

  useEffect(() => {
    async function fetchCategories() {
      const response = await fetch("http://localhost:3000/api/categorie");
      const data = await response.json();
      setCategories(data);
    }

    fetchCategories();
  }, []);

  return (
    <section className=" flex justify-center items-center my-10">
      <form className="p-8 rounded-lg shadow-lg" action={submitAction}>
        <h1 className="text-6xl font-bold text-center my-10">
          Crea il tuo <span className="text-emerald-500 ">Annuncio</span>{" "}
          personalizzato
        </h1>
        <div className="flex flex-col mt-8">
          <label htmlFor="name" className="text-sm my-2">
            Inserisci il titolo dell'annuncio
          </label>
          <input
            id="name"
            name="name"
            type="text"
            className="p-2 outline-none rounded bg-slate-200"
          />
        </div>
        <div className="flex flex-col mt-8">
          <label htmlFor="categories" className="text-sm my-2">
            Seleziona la categoria
          </label>
          <select
            id="categories"
            name="category"
            className="p-2 bg-slate-200 w-full rounded"
          >
            {categories.map((el, index) => (
              <option key={index} value={el}>
                {el}
              </option>
            ))}
          </select>
        </div>
        <div className="flex flex-col mt-8">
          <label htmlFor="price" className="my-2 text-sm">
            Inserisci il prezzo
          </label>
          <input
            id="price"
            name="price"
            type="number"
            className="p-2 bg-slate-200 rounded outline-none"
          ></input>
        </div>
        <div className="flex flex-col mt-8">
          <label htmlFor="type" className="my-2 text-sm">Scegli il tipo di annuncio</label>
          <select id="type" name="type" className="p-2 bg-slate-200 rounded outline-none">
            <option value="search">Cerco</option>
            <option value="sell">Vendo</option>
          </select>
          <div className="mt-10">
              <button type="submit" className="w-full p-2 uppercase text-white bg-emerald-500 rounded">inserisci annuncio</button>
          </div>
        </div>
      </form>
    </section>
  );
}
