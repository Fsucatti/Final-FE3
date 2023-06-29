
import React from 'react';
import styles from '../styles/Home.module.css';
import Card from '../components/Card.jsx';
import { useContext } from 'react';
import { GlobalContext } from '../context/GlobalContext';
import { Link } from 'react-router-dom';



const Home = () => {

  const { odontologos } = useContext(GlobalContext);

  console.log(odontologos);


  return (
   <main>
      <h1 className={styles.h1}>Odontólogos</h1>
       <div className={styles.Home}>
       { 
       odontologos.map((odontologo) => (
            <Link to={`/dentist/${odontologo.id}`} key={odontologo.id}>
          <Card key={odontologo.id} {...odontologo} odontologo={odontologo}/>
            </Link>
          
          // <Card {...odontologo} odontologo={odontologo}   />
       )) 
       }
    </div>
      </main>
  )
}

export default Home;


 /* return (
          <Link to={`/dentist/${odontologo.id}`} key={odontologo.id}>
          <Card nombre={odontologo.name} usuario={odontologo.username} />
          </Link>
           <Card key={odontologo.id} nombre={odontologo.name} usuario={odontologo.username} /> 
        
        )*/