import { createPortal } from "react-dom";

export default function Modal({ name, email, close }) {
  return createPortal(
    <div className="fixed top-0 left-0 h-full w-full bg-opacity-50 bg-gray-800 flex justify-center items-center" onClick={close}>
      <div className="p-4 rounded-lg bg-white shadow-md z-50">
        <button className="absolute top-2 right-2 text-gray-600">
          &times;
        </button>
        <h3 className="text-xl">Congratulazioni {name ?? ""} !!</h3>
        <hr className="text-slate-700 h-4 my-2"></hr>
        <p className="mt-4">
          A breve riceverai all'indirizzo {email} conferma della ricezione della
          tua richiesta
        </p>
        <hr className="text-slate-700 h-4 my-2"></hr>
        <button className="p-2 rounded-lg bg-emerald-500 text-white">Torna alla navigazione</button>
      </div>
    </div>,
    document.body
  );
}
