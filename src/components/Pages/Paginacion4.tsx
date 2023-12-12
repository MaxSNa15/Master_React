import React from 'react'
import { useParams } from 'react-router-dom'

export const Paginacion4 = () => {

    // UseNavigate: para navegar entre paginas

    // Obtener parametros por URL
    // const params = useParams();
    const parametros = useParams();

    // Valores por defecto
    // const {nombre = 'Anonimo'} = useParams();

    const enviarA = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        let nombre = e.currentTarget.mombre.value;
        let apellido = e.currentTarget.apellido.value;
        console.log(nombre, apellido);
    }

    return (
        <div>
            <h3> Paginacion 4 </h3>
            <p> Esta es una pagina de prueba </p>
            <p> Numero CUATRO </p>
            {/* <p> Nombre: {params.nombre} </p> */}
            <p> Nombre: {parametros.nombre} </p>

            <form onSubmit={enviarA}>
                <input type="text" name='mombre' />
                <input type="text" name='apellido' />
                <input type="submit" name='enviar' value="enviar" />
            </form>
        </div>
    )
}
