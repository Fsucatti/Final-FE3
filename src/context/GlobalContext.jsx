import  { createContext, useState, useEffect } from 'react';

export const GlobalContext = createContext();
export default function GlobalProvider({children}) {
    const [odontologos, setOdontologos] = useState([]);
    const [tema, setTema] = useState([]);
    const [favoritos, setFavoritos] = useState(
        JSON.parse(localStorage.getItem('favoritos')) || []
    );

    /*async function getOdontologos() {

        const response = await fetch('https://jsonplaceholder.typicode.com/users');
        const data = await response.json();
        setOdontologos(data);
    }*/

    useEffect(() => {
        const getOdontologos = async () => {
            const response = await fetch('https://jsonplaceholder.typicode.com/users');
            const data = await response.json();
            setOdontologos(data);
        };
        getOdontologos();
    }, []);



    const agregarFavorito = (odontologo) => {
        const odontologoEncontrado = favoritos.find(
            (favorito) => favorito.id === odontologo.id);
        if (!odontologoEncontrado) {
            const nuevosFavoritos = [...favoritos, odontologo];
            setFavoritos(nuevosFavoritos);
            localStorage.setItem('favoritos', JSON.stringify(nuevosFavoritos));
        }
    }

    const eliminarFavorito = (id) => {
        setFavoritos(favoritos.filter((favorito) => favorito.id !== id));
        localStorage.setItem("favoritos", JSON.stringify(favoritos.filter((favorito) => favorito.id !== id)));
    }

    const limpiarFavoritos = () => {
        setFavoritos([]);
        localStorage.removeItem('favoritos');
        
    }



    async function cambiarTema() {
        const root = document.documentElement;
        if (tema === 'claro') {
            root.classList.remove('oscuro');
            setTema('oscuro');
        } else {
            root.classList.add('oscuro');
            setTema('claro');
        }
    }

   /* const value = {
        odontologos,
        cambiarTema,
        tema,
        favoritos,
        agregarFavorito,
        eliminarFavorito,
        limpiarFavoritos
    }*/




    /*useEffect(() => {
        getOdontologos();
    }, []);*/

    return (
        <GlobalContext.Provider value={{odontologos, favoritos ,cambiarTema ,tema , agregarFavorito, eliminarFavorito, limpiarFavoritos}}>
            {children}
        </GlobalContext.Provider>
    )
}