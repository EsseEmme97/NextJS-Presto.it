"use client"
import { useEffect, useState, useRef } from "react";
import { useSearchParams, usePathname,useRouter } from "next/navigation";

export default function FilterForm() {
  const [categories, setCategories] = useState([]);
  const searchParams= useSearchParams();
  const pathname= usePathname();
  const {replace}=useRouter();
  const searchValue= useRef();
  const categoriesValue= useRef();
  const minValue= useRef();
  const maxValue= useRef();

  const handleSubmit= (e)=>{
    e.preventDefault();
    const params= new URLSearchParams(searchParams)
    if(searchValue.current.value !== ""){
      params.set("field",searchValue.current.value)
    } else{
      params.delete("field")
    }
    if(categoriesValue.current.value !== "tutte le categorie" ){
      params.set("categoria",categoriesValue.current.value)
    } else{
      params.delete("categoria")
    }
    if(minValue.current.value!== ""){
      params.set("min", minValue.current.value);
    }else{
      params.delete("min")
    }
    if(maxValue.current.value!==""){
      params.set("max",maxValue.current.value);
    }else{
      params.delete("max")
    }
    replace(`${pathname}?${params.toString()}`);

    searchValue.current.value="";
    categoriesValue.current.value="tutte le categorie";
    minValue.current.value="";
    maxValue.current.value=""
  }

  useEffect(() => {
    async function fetchCategories() {
      const response = await fetch("./api/categorie");
      const data = await response.json();
      setCategories(data);
    }

    fetchCategories();
  }, []);

  return (
    <form className="container mx-auto bg-emerald-400 rounded-lg p-8 flex md:flex-row flex-col justify-center mb-12 " onSubmit={handleSubmit}>
      <input
        name="cerca"
        className="p-2 rounded-lg bg-white outline-none md:me-8 mt-4 "
        placeholder="cerca"
        type="text"
        ref={searchValue}
      />
      <select
        className="p-2 rounded-lg bg-white outline-none md:me-8 mt-4 "
        name="categoria"
        placeholder="seleziona la categoria"
        ref={categoriesValue}
      >
        <option >tutte le categorie</option>
        {categories.map((el, index) => (
          <option key={index} value={el}>{el}</option>
        ))}
      </select>
      <input
        type="number"
        name="min"
        className="p-2 rounded-lg bg-white outline-none md:me-8 mt-4"
        placeholder="min"
        ref={minValue}
      />
      <input
        type="number"
        name="max"
        className="p-2 rounded-lg bg-white outline-none md:me-8 mt-4"
        placeholder="max"
        ref={maxValue}
      />
      <button className="bg-slate-800 p-2 text-white uppercase rounded-lg mt-4 ">
        cerca
      </button>
    </form>
  );
}
