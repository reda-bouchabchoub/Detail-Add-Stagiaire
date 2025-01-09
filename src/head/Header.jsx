import React from 'react';

import {Link} from "react-router-dom";

const Header = () => {

    return (

        <div >
            <nav >
                <Link to="/">Liste des stagiaires</Link>
                <Link to="/add">Ajouter un stagiaire</Link>
            </nav>
        </div>
    )
};

export default Header;