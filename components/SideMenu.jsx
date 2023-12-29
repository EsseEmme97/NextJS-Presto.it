import { usePathname } from "next/navigation";
import { signIn, signOut } from "next-auth/react";
import { getSession } from "next-auth/react";
import { useState, useEffect } from "react";
import Link from "next/link";

export default function SideMenu(props) {
  const pathName = usePathname();
  const [isLoggedIn, setIsLoggedIn] = useState(null);

  useEffect(() => {
    getSession().then((session) => {
      setIsLoggedIn((prev) => (prev = session));
    });
  }, []);

  const isActive = (path) => {
    return pathName === path ? "text-emerald-500 font-bold" : "";
  };

  return (
    <ul className={props.className}>
      <li>
        <Link href="/" className={`${isActive("/")} uppercase my-4 md:my-0`}>
          Home
        </Link>
      </li>
      <li>
        <Link href="/annunci" className={`${isActive("/annunci")} uppercase my-4 md:my-0`}>
          Annunci
        </Link>
      </li>
      <li>
        <Link href="/categorie" className={`${isActive("/contatti")} uppercase my-4 md:my-0`}>
          Categorie
        </Link>
      </li>
      <li>
        {isLoggedIn ? (
          <button
            onClick={() => {
              signOut();
              getSession().then((session) => {
                setIsLoggedIn((prev) => (prev = session));
              });
            }}
            className="uppercase p-2 rounded bg-emerald-500 text-white my-4 md:my-0"
          >
            Logout
          </button>
        ) : (
          <button
            onClick={() => {
              signIn();
              getSession().then((session) => {
                setIsLoggedIn((prev) => (prev = session));
              });
            }}
            className="uppercase p-2 rounded bg-emerald-500 text-white my-4 md:my-0"
          >
            Crea annuncio
          </button>
        )}
      </li>
    </ul>
  );
}
