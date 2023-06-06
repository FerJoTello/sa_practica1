'use client'

import { useState } from "react";

export default function NumerosAPalabrasForm() {
    const [palabras, setPalabras] = useState('')
    const [numero, setNumero] = useState(0)

    const handleChange = (e) => {
        const { name, value } = e.target;
        setNumero(value)
    };

    async function consultarAPI() {
        const fetchedResponse = await fetch(`/api/soap?numero=${numero}`)

        return fetchedResponse.json()
    }

    function handleSubmit(e) {
        e.preventDefault()
        consultarAPI().then((response) => {
            setNumero(0)
            setPalabras(response.numeroAPalabras)
        }).catch(null)
    }



    return (
        <form>
            <div className="row">
                <div className="col">
                    <div className="form-group">
                        <label className="col-form-label mt-4" htmlFor="name">Numero:</label>
                        <input
                            className="form-control" placeholder="Nombre"
                            type="number"
                            id="numero"
                            name="numero"
                            value={numero}
                            onChange={handleChange}
                        />
                    </div>
                </div>
            </div>

            <div className="form-group">
                <button className='btn btn-success mt-4' onClick={handleSubmit}>
                    Consultar
                </button>
            </div>

            {palabras.length > 0 && (
                <div className="row">
                    <div className="col">
                        <div className="alert alert-success mt-4" role="alert">
                            Respuesta en palabras: {palabras}
                        </div>
                    </div>
                </div>
            )}
        </form>
    )
}