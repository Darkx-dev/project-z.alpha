"use client";

import React from "react";
// import MouseEvent from 'next/navigation'
import { useState } from "react";
export default function More_age() {
  const [text, settext] = useState("");
  const handleGay = (e: any) => {
    if (e.target.textContent === "Y E S") {
      console.log((e.target.parentNode.style.display = "none"));
      settext("Moye Moye")
    }
    if (e.target.textContent === "N O") {
      console.log((e.target.parentNode.style.display = "none"));
      settext("Gand mara")
    }
  };

  return (
    <div className="container m-auto p-1 text-3d-power text-center align-middle">
      <div className="q text-red-600">KYA AAP SINGLE HO ??</div>
      <div className="option flex justify-center gap-3 mt-3">
        <button className="btn btn-1 text-3d" onClick={handleGay}>
          Y E S
        </button>
        <button className="btn btn-2 text-3d" onClick={handleGay}>
          N O
        </button>
      </div>
      <div className="y">{text}</div>
    </div>
  );
}
