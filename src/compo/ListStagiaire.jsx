import React from 'react'
import { useSelector } from 'react-redux'
import Stagiaire from "./Stagiaire";

export default function ListStagiaire() {
    const stagiaires = useSelector((state) => state)
  return (
    <div>
       {stagiaires.map((stagiaire, key) => <Stagiaire key={key} image={stagiaire.image} nom={stagiaire.nom} />)}
    </div>
  )
}
