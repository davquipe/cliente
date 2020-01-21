import React, { useState } from 'react';
import { Link } from 'react-router-dom'

const NuevaCuenta = () => {

    // state para iniciar sesion
    const [usuario, guardarUsuario] = useState({
        nombre: '',
        email: '',
        password: '',
        confirmar: ''
    });

    // extrraer usuarrio
    const { nombre, email, password, confirmar } = usuario;

    const onChange = e => {
        guardarUsuario({
            ...usuario,
            [e.target.name] : e.target.value
        });
    }

    // Cuando el usuario quieere iniciar sesion
    const onSubmit = e => {
        e.preventDefault();

        // Validar que no este vacio los campos


    }

    return ( 
        <div className="form-usuario">
            <div className="contenedor-form sombra-dark">
                <h1>Crea una Cuenta</h1>

                <form>
                    <div className="campo-form">
                        <label htmlFor="nombre">Nombre</label>
                        <input 
                            type="text" 
                            id="nombre" 
                            name="nombre" 
                            placeholder="Tu Nombre"
                            value={nombre}
                            onChange={onChange}
                        />
                    </div>
                    <div className="campo-form">
                        <label htmlFor="email">Email</label>
                        <input 
                            type="email" 
                            id="email" 
                            name="email" 
                            placeholder="Tu email"
                            value={email}
                            onChange={onChange}
                        />
                    </div>
                    <div className="campo-form">
                        <label htmlFor="password">Contraseña</label>
                        <input 
                            type="password" 
                            id="password" 
                            name="password" 
                            placeholder="Tu contraseña" 
                            value={password}
                            onChange={onChange}
                        />
                    </div>
                    <div className="campo-form">
                        <label htmlFor="confirmar">Confirmar Contraseña</label>
                        <input 
                            type="password" 
                            id="confirmar" 
                            name="confirmar" 
                            placeholder="Repite tu contraseña" 
                            value={confirmar}
                            onChange={onChange}
                        />
                    </div>

                    <div className="campo-form">
                        <input type="submit" className="btn btn-primario btn-block" value="Registrarme" />
                    </div>
                </form>
                <Link to={'/'} className="enlace-cuenta">
                    Prefiero Iniciar Sesion
                </Link>
            </div>
        </div>
        
     );
}
 
export default NuevaCuenta;