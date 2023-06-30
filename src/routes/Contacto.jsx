import React from 'react';
import Form from '../components/Form';
import styles from '../styles/Contacto.module.css';


function Contacto() {
  return (
    <div className={styles.DivCont}>
      <h1 className={styles.h1Cont}>Contacto</h1>
      <Form />
    </div>
  );
}


export default Contacto;