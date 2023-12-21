/* eslint-disable @next/next/no-img-element */
import React from "react";
import Card from "@/components/Card";

export default function page() {
  return (
    <main className="home relative p-2">
      <div className="text-center space-y-2">
        <h3 className="text-xl text-green-300 text-3d"> Welcome </h3>
        <h2 className="text-4xl text-white">
          It{"'"}s<span className="text-yellow-300 text-3d"> DARKX</span>
        </h2>
        <h1 className="text-5xl text-red-400 text-3d ">Project {"Z"}</h1>
      </div>
      <div>
        <div className="projects">Projects</div>
        <div className="projects-showcase flex flex-wrap justify-evenly p-2 gap-5">
          <Card
            title="E-Commerce Project"
            url="https://interactivewindow-df217.web.app/Landing_Page/index.html"
            imgUrl="/ec.png"
          ></Card>
          <Card
            title="Landing Page"
            url="https://interactivewindow-df217.web.app/Landing_Page_A/index.html"
            imgUrl="/lan.png"
          ></Card>
          <Card
            title="Rating Component"
            url="https://interactivewindow-df217.web.app/Interactive_Rating_Component/index.html"
            imgUrl="/i.png"
          ></Card>
          <Card
            title="QR Component"
            url="https://interactivewindow-df217.web.app/QR_Card_Component/index.html"
            imgUrl="/qr.png"
          ></Card>
          <Card
            title="NFT Component"
            url="https://interactivewindow-df217.web.app/NFT_Card_Component/index.html"
            imgUrl="/nft.png"
          ></Card>
          <Card
            title="NFT Component"
            url="https://interactivewindow-df217.web.app/NFT_Card_Component/index.html"
            imgUrl="/nft.png"
          ></Card>
          
        </div>
      </div>
      <div className=""></div>
    </main>
  );
}
