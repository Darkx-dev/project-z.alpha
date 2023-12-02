import Image from "next/image";
import { Instagram } from "lucide-react";
import { redirect } from "next/navigation";

export default function page() {
    
  return (
    <main className="text-center">
      <div className="profile">
        <Image
          className=" radial-progress"
          src="/profile.jpg"
          width={100}
          height={100}
          alt="Profile"
        ></Image>
      </div>
      <h1 className="text-3xl">
        cout {"<<"} {"DARKX"};
      </h1>
      <h2 className="text-xl flex justify-center">
        <a href="https://www.instagram.com/dark.dev.23/" className=" text-sm visited: text-pink-500 hover:text-blue-500 flex">
          <Instagram className="w-4 h-4 my-auto" />
          <span className="px-1">Instagram</span>
        </a>
      </h2>
      <div className="desc">
        <p className="text-gray-500 p-1">
          {"I'am"} <span className="text-orange-400">Roshan</span>, a <span className="text-white">software engineer</span> based in <span className="text-green-300">India</span>.
        </p>
      </div>
    </main>
  );
}
