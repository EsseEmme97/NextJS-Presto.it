"use client";
import { useState } from "react";
import { useSession } from "next-auth/react";
import { signIn } from "next-auth/react";

export default function AddToFavourites({ style }) {
  const [isFavourite, setIsFavourite] = useState(false);
  const { data: session, status } = useSession();

  console.log(session)

  const handleClick = (e) => {
    e.preventDefault();
    if (status === "unauthenticated") {
      signIn();
    } else {
      setIsFavourite((prev) => !prev);
    }
  };

  const golden = "rgb(255,223,0)";

  return (
    <button onClick={handleClick} className={style}>
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
          strokeLineJoin="round"
          stroke-width="36"
        />
      </svg>
    </button>
  );
}
