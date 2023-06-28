import React from 'react'
import {FaSun, FaMoon} from 'react-icons/fa6'
import { useContext, useEffect } from 'react'
import { GlobalContext } from '../context/GlobalContext'



export default function BotonCambiarTema() {
  const { tema, cambiarTema } = useContext(GlobalContext)

  {
    console.log(tema)
  }

  return (
    <>
      <button  onClick={cambiarTema}>
        {tema === 'claro' ? (
         <FaMoon  />
        ) : (
          <FaSun />
        )}
      </button>
    </>
  )
}
