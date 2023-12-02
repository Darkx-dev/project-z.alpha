"use client";
 
import { ChevronDown } from "lucide-react";
import Link from "next/link";

export default function Dropdown() {
  return (
    <details className="dropdown dropdown-end">
      <summary className="m-1 btn">
        <ChevronDown className="w-5 h-5" />
      </summary>
      <ul className="p-2 shadow menu dropdown-content z-[1] bg-base-100 rounded-box w-52">
        <li>
          <Link href="/">Home</Link>
        </li>
        <li>
          <Link href="/pokemon">Pokemon</Link>
        </li>
        <li>
          <Link href="/about">Pokemon</Link>
        </li>
      </ul>
    </details>
  );
}
