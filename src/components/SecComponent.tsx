export const SecComponent = () => {
    
    // Creamos un array de objetos
    const LIBROS = [
        "El Señor de los Anillos",
        "El Hobbit", 
        "El Silmarillion", 
        "El Código Da Vinci", 
        "Ángeles y Demonios", 
        "La Divina Comedia", 
        "El Principito", 
        "El Alquimista", 
        "El Perfume", 
        "El Nombre del Viento", 
        "El Temor de un Hombre Sabio", 
        "El Héroe de las Eras", 
        "El Pozo de la Ascensión", 
        "El Imperio Final", 
        "El Camino de los Reyes", 
        "El Archivo de las Tormentas", 
        "Elantris", 
        "La Guerra de los Mundos", 
        "La Máquina del Tiempo",
        "La Isla del Tesoro"
    ];

    return (
        <div className='Campo libros'>
            <h3>Libros</h3>
            {
                LIBROS.length >= 1 ?(
                        <ol>
                            {
                                LIBROS.map((libros, indice) => {
                                    return <li key={indice}>{libros}</li>;
                                })
                            }
                        </ol>
                    ) : <p>No hay libros</p>
            }
        </div>
    )
}