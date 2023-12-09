import React, {useEffect, useState} from 'react'

export const AjaxComponent = () => {

    interface User {
        id: number;
        email: string;
        first_name: string;
        last_name: string;
    }

    const [users, setUsers] = useState<User[]>([]);

    // Generico / basico
    const getUsuariosEstatico = () => {
        setUsers([
            {
                id: 1,
                email: "cooreo@correo.com",
                first_name: "Juan",
                last_name: "Perez"
            },
            {
                id: 2,
                email: "cooreo@correo.com",
                first_name: "Ana",
                last_name: "Perevvvz"
            }
        ]);
    }

    const [pokemon, setPokemon] = useState<any>({}); // el estado inicial es un objeto vacio

    const getPokemonAjaxPromise = () => {
        fetch('https://pokeapi.co/api/v2/pokemon/2') // fetch devuelve una promesa
            .then(resp => resp.json()) // la respuesta de la promesa se convierte a json
            .then(data => {
                setPokemon(data); // si todo sale bien, se setea el estado
            },
            error => {
                console.log(error); // si hay error
            });
    }

    // Await
    const getPokemonAjaxAwait = () => {
        setTimeout(async () => {
            const peticion = await fetch('https://pokeapi.co/api/v2/pokemon/1');
            const data = await peticion.json();
    
            setPokemon(data);
            setCargando(false);
        }, 2000);
    }

    const [cargando, setCargando] = useState(true);

    useEffect(() => {
        getUsuariosEstatico();
        getPokemonAjaxPromise();
        getPokemonAjaxAwait();
    }, []);

    if (cargando) {
        // Cargando
        return (
            <div className='CARGANDO'>
                Cargando...
            </div>
        )
    }else{
        // Codo todo funciona
        return (
            <div className='Ajax'>
                <h3>AjaxComponent - Listado de Usuarios</h3>
                <ol className='usuarios'>
                    {
                        users.map(user => (
                            <li key={user.id}>
                                {user.first_name} {user.last_name}
                            </li>
                        ))
                    }
                </ol>
    
                <h3>Pokemon</h3>
                <ul>
                    <li>Nombre: {pokemon.name}</li>
                    <li>Altura: {pokemon.height}</li>
                    <li>Peso: {pokemon.weight}</li>
                    <li>Imagen: <img src={pokemon.sprites?.front_default} alt={pokemon.name} /></li>
                </ul>
                {/* <pre> {JSON.stringify(pokemon.name)} </pre> */}
            </div>
        )
    }
}
