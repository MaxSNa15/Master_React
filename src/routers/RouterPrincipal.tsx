import { Routes, Route, NavLink, BrowserRouter} from 'react-router-dom';
import { Paginacion1 } from '../components/Pages/Paginacion1';
import { Paginacion2 } from '../components/Pages/Paginacion2';
import { Paginacion3 } from '../components/Pages/Paginacion3';
import { Paginacion4 } from '../components/Pages/Paginacion4';

export const RouterPrincipal = () => {
    return (
        <BrowserRouter>
            <h1> Cabezera inicial </h1>
            <h2> Menu de navegacion </h2>
            {/* Link: para navegar entre paginas */}
            {/* NavLink: para navegar entre paginas y darle estilos */}
            <nav>
                <ul>
                    <li>
                        <NavLink className={ ({isActive}) => isActive ? "activadoss" : "" } to='/'>Pagina 1</NavLink>
                    </li>
                    <li>
                        <NavLink className={ ({isActive}) => isActive ? "activadoss" : "" } to='/DOS'>Pagina 2</NavLink>
                    </li>
                    <li>
                        <NavLink className={ ({isActive}) => isActive ? "activadoss" : "" } to='/TRES'>Pagina 3</NavLink>
                    </li>
                    <li>
                        <NavLink className={ ({isActive}) => isActive ? "activadoss" : "" } to='/CUATRO/Juan'>Pagina 4</NavLink>
                    </li>
                </ul>
            </nav>
            <hr />

            <section className='contenido principal'>
                {/* Cargar componentes */}
                {/* Aqui se cargara lso componentes que coicidan con el path */}
                <Routes>
                    <Route path='/' element={<Paginacion1/>} />
                    <Route path='/UNO' element={<Paginacion1/>} />
                    <Route path='/DOS' element={<Paginacion2/>} />
                    <Route path='/TRES' element={<Paginacion3/>} />
                    {/* Pasar parametros por URL (nombre) */}
                    <Route path='/CUATRO/:nombre' element={<Paginacion4/>} />

                    {/* Pagina por defecto o si hay un error*/}
                    <Route path='*' element={(
                        <div>
                            <h1>Error 404</h1>
                        </div>
                    )} />
                </Routes>
            </section>

            <hr />
            <footer>
                <h2> Pie de pagina </h2>
            </footer>
        </BrowserRouter>
    )
}
