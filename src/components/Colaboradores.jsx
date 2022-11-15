import React, { useState } from "react";
import { BaseColaboradores } from "../BaseColaboradores";

import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import Stack from 'react-bootstrap/Stack';



const Colaboradores = () => {
    const [nombre, setNombre] = useState('')
    const [listaColaboradores, setListaColaboradores] = useState(BaseColaboradores)
    const [correo, setCorreo] = useState('')

    const [colaboradorFiltrado, setColaboradorFiltrado] = useState('');
    const [filtroActivado, setFiltroActivado] = useState(false);
    const [listaFiltrada, setListaFiltrada] = useState('')


    const valorNombre = (e) => {
        setNombre(e.target.value)
    }

    const valorCorreo = (e) => {
        setCorreo(e.target.value)
    }

    const enviarInput = (e) => {
        e.preventDefault()
        setListaColaboradores([...listaColaboradores, { id: Date.now(), nombre: nombre, correo: correo }])

    }

    const filtrar = () => {
        setFiltroActivado(true)
        setListaFiltrada(listaColaboradores.filter(colaborador => colaborador.nombre === colaboradorFiltrado))
        setColaboradorFiltrado('');
    }


    const filterUsers = (e) => {
        setColaboradorFiltrado(e.target.value)
    }


    const borrarFiltro = () => {
        setFiltroActivado(false)
    }




    return (
        <form onSubmit={enviarInput} className="p-3 container-fluid bg-secondary">

            <h1 className="p-2">Desafío Colaboradores</h1>



            <input className="form-control me-4" type="text" placeholder="Nombre" onChange={valorNombre} />
            <p className="p-5">{nombre}</p>
            <input className="form-control me-4" type="text" placeholder="Correo" onChange={valorCorreo} />
            <p className="p-5">{correo}</p>
            <button className="btn btn-primary" type="submit">Enviar</button>


            <Stack direction="horizontal" gap={3}>
                <Form.Control className="me-auto" placeholder="Filtrar por Nombre" onChange={filterUsers} />
                <Button variant="primary" onClick={filtrar}>Aplicar Filtro</Button>
                <div className="vr" />
                <Button variant="primary" onClick={borrarFiltro}>Resetear Filtro</Button>
            </Stack>
            <h4>Lista de Colaboradores</h4>
            <ul>
                {filtroActivado === false ?
                    listaColaboradores.map(colaborador => <li key={colaborador.id}> Nombre: {colaborador.nombre} / Correo: {colaborador.correo} </li>) :
                    listaFiltrada.map(colaborador => <li key={colaborador.id}> Nombre: {colaborador.nombre} / Correo: {colaborador.correo} </li>)}
            </ul>
        </form>
    )
}

export default Colaboradores;