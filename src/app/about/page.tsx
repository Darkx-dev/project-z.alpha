/* eslint-disable @next/next/no-img-element */
import { Image } from "@nextui-org/react";
import { Instagram } from "lucide-react";
import React from "react";

export default function page() {
  const text =
    "I am a highly motivated and self-taught programmer with a strong passionfor software development. Despite my lack of formal experience, I have adeep understanding of a variety of programming languages and frameworks,and I am eager to learn new technologies. I am also a creative problemsolver with a knack for finding elegant solutions to complex problems.";
  return (
    <main className="text-center relative">
      <div className="profile">
        <Image
          className=" radial-progress"
          src="/profile.jpg"
          width={100}
          height={100}
          alt="Profile"
          id="profile"
        ></Image>
      </div>
      <h1 className="text-3xl">
        cout {"<<"} {"DARKX"};
      </h1>
      <h2 className="text-xl flex justify-center">
        <a
          href="https://www.instagram.com/dark.dev.23/"
          className=" text-sm visited:text-pink-500 hover:text-blue-500 flex"
        >
          <Instagram className="w-4 h-4 my-auto" />
          <span className="px-1">Instagram</span>
        </a>
      </h2>
      <div className="desc">
        <p className="text-gray-500 p-1">
          {"I'am"} <span className="text-orange-400">Roshan</span>, a{" "}
          <span className="text-white">software engineer</span> based in{" "}
          <span className="text-green-300">India</span>.
        </p>
      </div>
      <div className="about-me">
        <div className="typewriter"></div>
      </div>
      <footer className="footer footer-center p-4 bg-base-300 text-base-content fixed bottom-0">
        <aside>
          <p>Copyright © 2023 - All right reserved by darkx.dev.23@gmail.com</p>
        </aside>
      </footer>
    </main>
  );
}
