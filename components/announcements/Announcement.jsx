import Image from "next/image";
import tag from "@/assets/pricetags.svg";
import calendar from "@/assets/calendar.svg";
import Link from "next/link";

export default function Announcement({ title, price, state, category,id }) {
  const badgeStyle = state === "sell" ? "bg-red-600" : "bg-emerald-500";
  const badgeContent = state === "sell" ? "vendo" : "cerco";

  return (
    <article className="w-3/4  md:w-1/5 rounded-lg relative shadow">
    <Link href={`/annunci/${id}`}>
      <span
        className={`absolute top-3 left-3 z-10 p-2 rounded-lg text-white ${badgeStyle}`}
      >
        {badgeContent}
      </span>
      <div className="overflow-hidden">
        <Image
          src="https://fastly.picsum.photos/id/767/1080/1080.jpg?hmac=T33HomyNCV41nPJgz8e4rcDaZ4ZN1EIjI2WxjEHeiqA"
          width={150}
          height={200}
          className="w-full h-full transition-transform hover:scale-110 rounded duration-200"
          alt="image"
        />
      </div>
      <h4 className="text-xl text-emerald-500 font-bold mt-4 p-3">{price} €</h4>
      <h5 className="font-bold text-xl ps-3">{title}</h5>
      <p className="text-slate-400 text-sm ps-3">
        Lorem ipsum dolor sit amet...
      </p>
      <div className="flex text-emerald-500 mt-4">
        <div className="border border-dashed border-emerald-500 w-1/2 flex ps-2 items-center">
          <Image src={tag} width={16} height={16} alt="pricetags" />
          <span className="ms-2 text-sm">{category}</span>
        </div>
        <div className="border border-dashed border-emerald-500 w-1/2 flex p-2 items-center">
          <Image src={calendar} width={16} height={16} alt="calendart" />
          <span className="ms-2 text-sm">
            {new Date().toLocaleDateString("it-IT")}
          </span>
        </div>
      </div>
      </Link>
    </article>
  );
}
