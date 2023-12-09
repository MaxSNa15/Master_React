import React, { useState } from 'react';

// Definición del tipo para el usuario
interface Usuario {
    nombre: string;
    apellido: string;
    genero: string;
    biografia: string;
}

export const FormsComponent = () => {

    const [usuario, setUsuario] = useState<Usuario>({
        nombre: '',
        apellido: '',
        genero: '',
        biografia: ''
    });

    const conseguirDatosFormulario = (e: React.FormEvent) => {

        e.preventDefault();
        
        let datos = e.target as HTMLFormElement;
        // console.log(datos.nimbre.value);
        // console.log(datos.apellide.value);
        // console.log(datos.genere.value);
        // console.log(datos.biblio.value);
        // Crear un objeto con los datos del formulario
        let usuario = {
            nombre: datos.nimbre.value,
            apellido: datos.apellide.value,
            genero: datos.genere.value,
            biografia: datos.biblio.value
        }

        console.log(usuario);
        setUsuario(usuario);
    }

    return (
        <div className='Forms'>
            <h3>Formulacios con React</h3>

            <form onSubmit={conseguirDatosFormulario}>

                <fieldset>
                    <legend>Datos Personales</legend>
                    <label>Nombre: </label>
                    <input name="nimbre" type="text" placeholder='Nombre' />

                    <label>Apellido: </label>
                    <input name="apellide" type="text" placeholder='Apellido' />

                    <label>Genero: </label>
                    <select name='genere'>
                        <option value="Masculino">Masculino</option>
                        <option value="Femenino">Femenino</option>
                        <option value="Otro">Otro</option>
                    </select>

                    <label>Biografia: </label>
                    <textarea name="biblio"></textarea>
                </fieldset>

                <input type="submit" value=" Enviar " />
            </form>

            <br />

            <div className="info-usuario">
                <h4>Informacion del usuario</h4>
                <p>Nombre: {usuario.nombre}</p>
                <p>Apellido: {usuario.apellido}</p>
                <p>Genero: {usuario.genero}</p>
                <p>Biografia: {usuario.biografia}</p>
            </div>

        </div>
    )
}
