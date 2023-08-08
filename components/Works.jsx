
import { Link, Outlet } from "react-router-dom";
import React from 'react'
import data from "../components/data/data"

export const Works = () => {
  return (
    <div>
      <p>
        ### Au fil des années, nous avons pu accompagner les meilleurs. Découvrez pas à pas comment nous avons été présents pour lancer vos marques préférées.
      </p>
      <div className="works">
      {data.map((work) => (
        <Link className="cards" key={work.id} to={"/works/" + work.path}>
          {work.name}
        </Link>
      ))}
      </div>
      <Outlet />
    </div>
  )
}
