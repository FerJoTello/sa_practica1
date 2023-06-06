'use client';

import { useState } from 'react';

const TOKEN = process.env.NEXT_PUBLIC_REST_API_TOKEN

const UserForm = () => {
    const [ID, setID] = useState(null)
    const [formData, setFormData] = useState({
        name: '',
        gender: '',
        email: '',
        status: ''
    });

    async function publicarUsuario() {
        const fetchResponse = await fetch('https://gorest.co.in/public/v2/users', {
            method: 'POST',
            mode: 'cors',
            headers: {
                "Authorization": `Bearer ${TOKEN}`,
                "Content-Type": 'application/json'
            },
            body: JSON.stringify({
                "name": formData.name,
                "gender": formData.gender,
                "email": formData.email,
                "status": formData.status,
            })
        })
        return await fetchResponse.json()

    }

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData((prevData) => ({
            ...prevData,
            [name]: value
        }));
    };

    function handleSubmit(e) {
        e.preventDefault()
        publicarUsuario().then((response) => {
            setFormData({
                name: '',
                gender: '',
                email: '',
                status: ''
            })
            setID(response.id)
        }).catch(null)
    }

    return (
        <form>
            <div className="row">
                <div className="col">
                    <div className="form-group">
                        <label className="col-form-label mt-4" htmlFor="name">Nombre:</label>
                        <input
                            className="form-control" placeholder="Nombre"
                            type="text"
                            id="name"
                            name="name"
                            value={formData.name}
                            onChange={handleChange}
                        />
                    </div>
                    <div className="form-group">
                        <label className="col-form-label mt-4" htmlFor="gender">Género:</label>
                        <input
                            className="form-control" placeholder="Género"
                            type="text"
                            id="gender"
                            name="gender"
                            value={formData.gender}
                            onChange={handleChange}
                        />
                    </div>
                </div>
                <div className="col">
                    <div className="form-group">
                        <label className="col-form-label mt-4" htmlFor="email">Email:</label>
                        <input
                            className="form-control" placeholder="Email"
                            type="email"
                            id="email"
                            name="email"
                            value={formData.email}
                            onChange={handleChange}
                        />
                    </div>
                    <div className="form-group">
                        <label className="col-form-label mt-4" htmlFor="status">Estado:</label>
                        <input
                            className="form-control" placeholder="Estado"
                            type="text"
                            id="status"
                            name="status"
                            value={formData.status}
                            onChange={handleChange}
                        />
                    </div>
                </div>
            </div>
            <div className="form-group">
                <button className='btn btn-success mt-4' onClick={handleSubmit}>
                    Crear usuario
                </button>
            </div>
            {ID && (
                <div className="row">
                    <div className="col">
                        <div className="alert alert-success mt-4" role="alert">
                            Usuario creado con ID: {ID}
                        </div>
                    </div>
                </div>
            )}
        </form>
    );
};

export default UserForm;