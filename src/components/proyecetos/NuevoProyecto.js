import React, { Fragment, useState } from 'react';

const NuevoProyecto = () => {


    // State para proyeceto
    const [proyecto, guardarProyecto] = useState({
        nombre: ''
    });

    // Extraer nombree de proyecto
    const { nombre } = proyecto;

    // Lee los contenidos de proyecto
    const onChangeProyecto = e => {
        guardarProyecto({
            ...proyecto,
            [e.target.name] : e.target.value
        });
    }

    // Cuando el usuario envia un proyeceto
    const onSubmitProyecto = e => {
        e.preventDefault();

        // Validar el proyeceto

        
        // agregar al state

        // Reiniciar el formulario
    }

    return ( 
        <Fragment>
        <button
            type="button"
            className="btn btn-block btn-primario"
        >Nuevo Proyecto</button>

        <form
            className="formulario-nuevo-proyecto"
            onSubmit={onSubmitProyecto}
        >
            <input 
                type="text"
                className="input-text"
                placeholder="Nombre de Proyecto"
                name="nombre"
                value={nombre}
                onChange={onChangeProyecto}
                />

            <input 
                type="submit"
                className="btn btn-primario btn-block"
                value="Agregar Proyecto"
            />

        </form>
        </Fragment>
     );
}
 
export default NuevoProyecto;