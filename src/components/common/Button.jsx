import React from "react";

export default function Button({ label, icon: Icon, onClick }) {
  return (
    <button
      onClick={onClick}
      className="bg-lime-400 hover:bg-lime-500 text-black font-medium px-8 py-3 rounded-full flex items-center gap-2 transition"
    >
      {Icon && <Icon size={20} />}
      {label}
    </button>
  );
}
