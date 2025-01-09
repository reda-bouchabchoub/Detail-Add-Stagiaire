import React from 'react';

import {Link} from "react-router-dom";

const Stagiaire = ({image, nom}) => (
    <div className={'container'}>
        <Link to={nom}>
            <img src={image}/>
        </Link>
        <p className={'name'}> {nom}</p>
    </div>
);

export default Stagiaire;
