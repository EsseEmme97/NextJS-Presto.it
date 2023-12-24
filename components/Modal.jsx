import { createPortal } from "react-dom";

export default function Modal({name,email}) {
  return createPortal(
    <div className="fixed top-0 left-0 h-full w-full bg-opacity-50 bg-gray-800 flex justify-center items-center">
      <div className="p-4 rounded-lg bg-white shadow-md z-50">
        <button className="absolute top-2 right-2 text-gray-600">
          &times;
        </button>
        <p className="text-center">{name}</p>
      </div>
    </div>,
    document.body
  );
}
