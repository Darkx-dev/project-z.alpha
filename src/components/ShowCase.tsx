"use client";
import Card from "./Card";
import projectsApi from "@/_data/projects_data.json"
import React from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { Observer } from "gsap/all";

export default function ShowCase() {
    gsap.registerPlugin(Observer)
    const projects = projectsApi
  useGSAP(() => {
    const tl = gsap.timeline({})
    // tl.from('#project-card', {
    //     scale: 0,
    //     yPercent: 200,
    //     duration: .8,
    //     opacity: 0,
    //     ease: 'ease',
    //     stagger: {
    //         amount: .2,
    //         grid: 'auto',
    //         from: 'center',
    //         ease: 'ease'
    //     }
    // })

    Observer.create({
      target: '.showcase-container',
      
    })
  });
  return (
    <div className="showcase-container flex flex-nowrap gap-3 w-max">
      {projects.map((project) => (
        <Card key={project.id} title={project.name} imgUrl={project.imgUrl} url={project.liveUrl}/>
      ))}
    </div>
  );
}
