import React from 'react'
import styles from '../styles/Card.module.css'
import { useContext } from 'react';
import { GlobalContext } from '../context/GlobalContext';
import { Link } from 'react-router-dom';
import {FaRegHeart, FaHeart} from 'react-icons/fa6'


const Card = ({odontologo})  => {
    const {favoritos, eliminarFavorito, agregarFavorito } = useContext(GlobalContext);
    const esFavorito = favoritos.some((favorito) => favorito.id === odontologo.id);

    const manejarFavorito = () => {
        if (esFavorito) {
            eliminarFavorito(odontologo.id);
        } else {
            agregarFavorito(odontologo);
        }
    }


    return (
        <div className={styles.Card}>
            <div>
                <h2>{odontologo.name}</h2>
                <p><span>Username:</span> {odontologo.username}</p>
                <img src="https://www.shutterstock.com/image-vector/personal-doctor-giving-advice-patient-600w-1723304248.jpg" alt="imagen" />
                <button onClick={manejarFavorito}>
                    {esFavorito ? (<FaHeart 
                        className='favorito'
                        onClick={e => {
                            e.preventDefault();
                            e.stopPropagation();
                            manejarFavorito(odontologo)
                        }} 
                        /> ) : ( <FaRegHeart 
                                    className=''
                                    onClick={e => {
                                        e.preventDefault();
                                        e.stopPropagation();
                                        manejarFavorito(odontologo)

                                    }}
                                    />
                                     )}
                </button> 
            </div>
            </div>



        /* <section className={styles.Card}>
            <p>Nombre: {nombre}</p>
            <p>Usuario: {usuario}</p>
            <button onClick={manejarFavorito}>{esFavorito ? 'Eliminar de favoritos' : 'Agregar a favoritos'}</button>
        </section> */
    )
}

export default Card