import React, { useState } from 'react'

export const FormularioComponent = () => {

    const [usuario, setUsuario]= useState({})

    // Conseguir datos del formulario para mostrarlo en pantalla al enviar
    const conseguirDatosFormulario = e =>{
        e.preventDefault();

        let datos = e.target 
        let usuario ={
            nombre: datos.nombre.value,
            apellido: datos.apellido.value,
            genero: datos.genero.value,
            bio: datos.bio.value,
            enviar: datos.enviar.value,
        }
        console.log(usuario);
        setUsuario(usuario);
    }

    // Cambiar datos en tiempo real sin necesidad de hacer click en enviar
    const cambiarDatos = e =>{
        let name_del_input = e.target.name
        //let usuario_para_modificar = usuario

        //usuario_para_modificar[name_del_input] = e.target.value

        //Con los 3 ... mantenemos lo que ya se ha enviado y modificamos lo que vayamos introduciendo en tiempo real
        // Los paréntesis despues de la función sustituyen un return para abreviar codigo
        setUsuario(estado_previo => ({
            ...estado_previo,
            [name_del_input]: e.target.value
        })
    );
    }

    return (
        <div>
            
            <h1>Formularios con React</h1>

            {/* Vista del formulario relleno, si click enviar return usuario.nombre, usuario.apellido..*/}
            {usuario.enviar  &&
                (<div className='info_usuario label'>
                    {usuario.nombre} {usuario.apellido} 
                    &nbsp;
                    <p>Género: {usuario.genero }</p>
                    <p>¿Cómo te sientes hoy?</p> <p> {usuario.bio}</p>
                </div>)
            }

            {/* Formulario */}
            <form onSubmit={conseguirDatosFormulario}>
                <p>Nombre</p>
                <input type='text' 
                    placeholder='Nombre'
                    name='nombre'
                    onChange={cambiarDatos}
                ></input>

                <p>Apellido</p>
                <input type='text' 
                    placeholder='apellido'
                    name='apellido'
                    onChange={cambiarDatos}/>
                
                <p>Género</p>
                <select name="genero" onChange={cambiarDatos}>
                    <option value="hombre">Mujer</option>
                    <option value="mujer">hombre</option>
                    <option value="Cisgénero">Cisgénero</option>
                    <option value="Transgénero">Transgénero</option>
                    <option value="Intersexual">Intersexual</option>
                    <option value="Queer">Queer</option>
                    <option value="Género fluido">Género fluido</option>
                    <option value="Sin género">Sin género</option>
                    <option value="Bigénero">Bigénero</option>
                    <option value="Intergénero">Intergénero</option>
                    <option value="ardilla">ardilla</option>
                    <option value="mapache">mapache</option>
                    <option value="arbiñoca">arbiñoca</option>
                </select>

                <p>¿Cómo te sientes hoy?</p>
                <textarea placeholder='Biografía' 
                        name='bio' 
                        onChange={cambiarDatos}>
                </textarea>

                <input type='submit' name='enviar' value="Enviar"/>
            </form>
            
        </div>
    )
}
