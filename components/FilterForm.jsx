"use client"
import { useEffect, useState } from "react";

export default function FilterForm() {
  const [categories, setCategories] = useState([]);

  useEffect(() => {
    async function fetchCategories() {
      const response = await fetch("./api/categorie");
      const data = await response.json();
      setCategories(data);
    }

    fetchCategories();
  }, []);

  return (
    <form className="container mx-auto bg-emerald-400 rounded-lg p-8 flex justify-center mb-12">
      <input
        name="cerca"
        className="p-2 rounded-lg bg-white outline-none me-8"
        placeholder="cerca"
        type="text"
      />
      <select
        className="p-2 rounded-lg bg-white outline-none me-8"
        name="categoria"
        placeholder="seleziona la categoria"
      >
        <option>tutte le categorie</option>
        {categories.map((el, index) => (
          <option key={index} value={el}>{el}</option>
        ))}
      </select>
      <input
        type="number"
        name="min"
        className="p-2 rounded-lg bg-white outline-none me-8"
        placeholder="min"
      />
      <input
        type="number"
        name="max"
        className="p-2 rounded-lg bg-white outline-none me-8"
        placeholder="max"
      />
      <button className="bg-slate-800 p-2 text-white uppercase rounded-lg">
        cerca
      </button>
    </form>
  );
}
