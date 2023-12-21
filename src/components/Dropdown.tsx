"use client";
import ThemeControl from "./themeControl";
import { Menu } from "lucide-react";
import Link from "next/link";

export default function Dropdown() {
  return (
    <details className="dropdown dropdown-end">
      <summary className="m-1 btn bg-transparent border-none shadow-none">
        <Menu className="w-5 h-5" />
      </summary>
      <ul className="p-2 shadow-2xl menu dropdown-content z-[1] bg-base-100 rounded-box w-40">
        <li>
          <Link href="/" className="">Home</Link>
        </li>
        <li>
          <Link href="/about" className="">About</Link>
        </li>
        <li>
          <Link href="/more" className=" disabled">More?</Link>
        </li>
        <li>
          {/* <ThemeControl/> */}
        </li>
      </ul>
    </details>
  );
}
