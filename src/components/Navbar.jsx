import { Link } from "react-router-dom";
import React from 'react';
import styles from '../styles/Navbar.module.css';
import BotonCambiarTema from "./BotonCambiarTema";

const Navbar = () => {
    return (
        <div className={styles.Navbar}>
            <Link to="/">Home</Link>
            <Link to="/contacto">Contacto</Link>
            <Link to="/favoritos">Favoritos</Link>
            <BotonCambiarTema />
        </div>
    );
}

export default Navbar;