"use client";
import { useFormState } from "react-dom";
import { useSession } from "next-auth/react";
import { signIn } from "next-auth/react";
import addToFavourites from "@/utils/addToFavourites";

export default function AddToFavourites({ style,favourite, itemsId }) {
  const [isFavourite, setIsFavourite] = useFormState(
    addToFavourites,
    favourite
  );
  const { data: session, status } = useSession();
   const golden = "rgb(255,223,0)";

  return (
    <form action={ setIsFavourite}>
      <input name="email" type="hidden" value={session?.user.email} />
      <input name="itemsId" type="hidden" value={itemsId} />
      <button className={style} type="submit">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="ionicon"
          viewBox="0 0 512 512"
          width={32}
          height={32}
        >
          <path
            d="M480 208H308L256 48l-52 160H32l140 96-54 160 138-100 138 100-54-160z"
            fill={isFavourite ? golden : "none"}
            stroke={isFavourite ? golden : "currentColor"}
            strokeLinejoin="round"
            strokeWidth="36"
          />
        </svg>
      </button>
    </form>
  );
}
