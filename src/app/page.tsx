/* eslint-disable @next/next/no-img-element */
"use client"
import React from "react";
import ShowCase from "@/components/ShowCase";
export default function page() {
  return (
    <main className="home relative p-2">
      <div className="text-center space-y-2">
        <h3 className="text-xl text-green-300 text-3d font-semibold"> Welcome </h3>
        <h2 className="text-4xl text-white">
          It{"'"}s<span className="text-yellow-300 text-3d font-semibold"> DARKX</span>
        </h2>
        <h1 className="text-5xl text-red-400 text-3d font-semibold">Project {"Z"}</h1>
      </div>
      <div>
        <div className="projects">Projects</div>
        <ShowCase/>
      </div>
      <div className=""></div>
    </main>
  );
}
