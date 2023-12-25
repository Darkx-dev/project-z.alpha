"use client";
import Card from "./Card";
import projectsApi from "@/_data/projects_data.json"
import React from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";

export default function ShowCase() {
    const projects = projectsApi
  useGSAP(() => {
    
  });
  return (
    <div className="flex gap-3">
      {projects.map((project) => (
        <Card key={project.id} title={project.name} imgUrl={project.imgUrl} url={project.liveUrl}/>
      ))}
    </div>
  );
}
