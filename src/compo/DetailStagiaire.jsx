import React from 'react';
import {useSelector} from "react-redux";
import {Link, useParams} from "react-router-dom";
import Stagiaire from "./Stagiaire";

const DetailStagiaire = () => {
    const {nom} = useParams()
    const stagiaire = useSelector((state) => state.find((stagiaire) => stagiaire.nom === nom))
    return (

    <div className={'container'}>
        
        <img src={stagiaire.image}/><br />
        <p className={'name'}> {stagiaire.nom}</p>
        <p className={'name'}> {stagiaire.prenom}</p>
        <p className={'name'}> {stagiaire.filiere}</p>
        <Link to={'/'}>Back</Link>
    </div>
)};
export default DetailStagiaire;