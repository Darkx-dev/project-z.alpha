/* eslint-disable @next/next/no-img-element */
import Dropdown from "./Dropdown";
import Link from "next/link";

export default function Navbar() {
  return (
    <div>
      <div className="navbar bg-base-100">
        <div className="flex-1">
          <Link href="/" className="btn btn-ghost text-xl">DARKX.UI</Link>
        </div>
        <div className="flex-none gap-2">
          <Dropdown/>
        </div>
      </div>
    </div>
  );
}
