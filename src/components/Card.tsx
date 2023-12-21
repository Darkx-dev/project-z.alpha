/* eslint-disable @next/next/no-img-element */
import React from "react";

export default function Card(params: any) {
  return (
    <div className="card w-56 h-72  bg-base-100 shadow-xl image-full">
      <figure>
        <img src={params.imgUrl} alt="Shoes" />
      </figure>
      <div className="card-body transition-all">
        <h2 className="card-title">{params.title}</h2>
        <p></p>
        <div className="card-actions justify-end">
          <button className="btn btn-ghost shadow-md backdrop-blur-md">
            <a style={{textDecoration: 'none'}} className="link" href={params.url}>
              <span className="text-green-300 ">See Live</span>
            </a>
          </button>
        </div>
      </div>
    </div>
  );
}
