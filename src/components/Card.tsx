/* eslint-disable @next/next/no-img-element */
import React from "react";

export default function Card(params: any) {
  return (
    <div
      id="project-card"
      className="card flex-grow w-60 h-72 bg-base-100 shadow-xl image-full"
    >
      <figure>
        <img src={params.imgUrl} alt="Shoes" />
      </figure>
      <div className="card-body transition-all">
        <h2 className="card-title">{params.title}</h2>
        <p></p>
        <div className="card-actions justify-end">
          <a
            style={{ textDecoration: "none" }}
            className="link"
            href={params.url}
            target="_blank"
          >
            <button className="btn btn-ghost shadow-md backdrop-blur-md">
              <span className="text-green-300 ">See Live</span>
            </button>
          </a>
        </div>
      </div>
    </div>
  );
}
