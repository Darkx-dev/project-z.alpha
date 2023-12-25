"use client";
import Card from "./Card";
import projectsApi from "@/_data/projects_data.json"
import React from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";

export default function ShowCase() {
    const projects = projectsApi
  useGSAP(() => {
    const tl = gsap.timeline({})
    tl.from('#project-card', {
        scale: 0,
        yPercent: -200,
        duration: .5,
        opacity: 0,
        ease: 'ease',
        stagger: {
            amount: .5,
            grid: 'auto',
            from: 'start',
            ease: 'ease'
        }
    })
  });
  return (
    <div className="flex flex-wrap gap-3">
      {projects.map((project) => (
        <Card key={project.id} title={project.name} imgUrl={project.imgUrl} url={project.liveUrl}/>
      ))}
    </div>
  );
}
