import React, { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom'
import { useContext } from 'react';
import { GlobalContext } from '../context/GlobalContext';
import styles from '../styles/Odontologo.module.css'


function Odontologo() {
    const { id } = useParams();
    const { odontologos } = useContext(GlobalContext);
    const currentOdontologo = odontologos.find(odontologo => odontologo.id === parseInt(id));
      
    return (
        <div>
            <h1 className={styles.h1}>Odontologo ID {currentOdontologo?.id} - {currentOdontologo?.name}</h1>
            {currentOdontologo && (
                <div className={styles.Odontologo}>
                    <p className={styles.Item}>Nombre: {currentOdontologo.name}</p>
                    <p className={styles.Item}>Usuario: {currentOdontologo.username}</p>
                    <p className={styles.Item}>Email: {currentOdontologo.email}</p>
                    <p className={styles.Item}>Teléfono: {currentOdontologo.phone}</p>
                    <p className={styles.Item}>Sitio Web: {currentOdontologo.website}</p>

        </div>

            )}
    
        </div>
    )
}

export default Odontologo;