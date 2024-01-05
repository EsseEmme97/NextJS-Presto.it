import { usePathname } from "next/navigation";
import { signIn, signOut } from "next-auth/react";
import { useSession } from "next-auth/react";
import Link from "next/link";

export default function SideMenu(props) {
  const pathName = usePathname();
  const {status} = useSession();

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
        <Link
          href="/annunci"
          className={`${isActive("/annunci")} uppercase my-4 md:my-0`}
        >
          Annunci
        </Link>
      </li>
      <li>
        <Link
          href="/categorie"
          className={`${isActive("/contatti")} uppercase my-4 md:my-0`}
        >
          Categorie
        </Link>
      </li>
      {status === "authenticated" ? (
        <>
        <li>
            <Link
              href="/annunci/crea"
              className={`${isActive("/annunci/crea")} uppercase my-4 md:my-0`}
            >
              Crea Annuncio
            </Link>
          </li>
          <li>
            <button
              onClick={() => signOut() }
              className="uppercase p-2 rounded bg-emerald-500 text-white my-4 md:my-0"
            >
              Logout
            </button>
          </li>
          
        </>
      ) : (
        <li>
          <button
            onClick={() => signIn(undefined, { callbackUrl: "/annunci/crea" })}
            className="uppercase p-2 rounded bg-emerald-500 text-white my-4 md:my-0"
          >
            Crea annuncio
          </button>
        </li>
      )}
    </ul>
  );
}
