import React from 'react';
import NuevoProyecto from '../proyecetos/NuevoProyecto';
import ListadoProyectos from '../proyecetos/ListadoProyectos';

const Sidebar = () => {
    return ( 
        <aside>
            <h1>MERN<span>Tasks</span></h1>

            <NuevoProyecto />

            <div className="proyectos">
                <h2>Tus Proyectos</h2>

                <ListadoProyectos />
                
            </div>
        </aside>
     );
}
 
export default Sidebar;