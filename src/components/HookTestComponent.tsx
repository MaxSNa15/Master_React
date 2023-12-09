import React, {useState, useEffect} from 'react'

export const HookTestComponent = () => {

    // const [contador, setContador] = useState(0);
    const [usuario, setUsuario] = useState("Victor");
    const modificarUsuario = (e: React.ChangeEvent<HTMLInputElement>) => {
        setUsuario(e.target.value);
    }

    // Uso del hook useEffect en React
    useEffect(() => {
        // Se ejecuta cuando el componente se monta
        console.log("El usuario cambio");

        // Se ejecuta cuando el componente se desmonta
        // return () => {
        //     console.log("El componente se desmonto");
        // }
    });
    // []); Si se deja vacio el arreglo, solo se ejecuta una vez
    // [usuario]); Se ejecuta cuando el usuario cambia


    return (
        <div className='Efectit'>
            <h3>Uso del hook useEffect</h3>
            <p>El usuario es: <strong>{usuario}</strong></p>
            <input type='text' placeholder='Cambio de nombre' onChange={modificarUsuario}/>

        </div>
    )
}
