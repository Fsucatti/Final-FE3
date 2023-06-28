import React, { useContext } from 'react';
import styles from '../styles/Favoritos.module.css';
import { GlobalContext } from '../context/GlobalContext';


const Favoritos = () => {
    const {favoritos, eliminarFavorito, limpiarFavoritos} = useContext(GlobalContext);

    const manejarEliminar = (id) => {
        eliminarFavorito(id);
    };

    const manejarLimpiar = () => {
        limpiarFavoritos();
    };

    return (
        console.log(favoritos),
        <div>
            <h1 className={styles.h1}>Favoritos</h1>
        <div className={styles.Favoritos}>
            {favoritos.length > 0 ? (
                favoritos.map((odontologo) => (
                    <div key={odontologo.id} className={styles.Favorito}>
                        <p>{odontologo.name}</p>
                        <p>{odontologo.username}</p>
                        <img src="https://www.shutterstock.com/image-vector/personal-doctor-giving-advice-patient-600w-1723304248.jpg" alt="imagen" />
                        <button onClick={() => manejarEliminar(odontologo.id)}>Eliminar</button>
                    </div>
                ))
            ) : (
                <p>No hay odontologos en favoritos</p>
            )}
        </div>
        <button className={styles.limpiarButton} onClick={manejarLimpiar}>Limpiar Favoritos</button>
        </div>
    );
};

export default Favoritos;
