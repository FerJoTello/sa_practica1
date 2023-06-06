import UserForm from "./UserForm";
import UserTable from "./UserTable";

export default function Rest() {
    return (
        <div className="container-fluid px-4">
            <h1 className="text-center">REST</h1>
            <p>
                Se utilizó la API <a href="https://gorest.co.in/">https://gorest.co.in/</a> para consumir 2 endpoints. 1 con un método GET para enlistar usuarios registrados, y 1 con un método POST para publicar usuarios nuevos.
            </p>
            <div className="row gx-5">
                <div className="col">
                    <h3>Método GET</h3>
                    <p className="text-justify">
                        En la siguiente tabla se enlista la información recuperada del siguiente endpoint: <u>https://gorest.co.in/public/v2/users?<b>page</b>=numeroPagina&<b>per_page</b>=cantidadPorPagina</u>, donde se indican los parámetros de la cantidad de elementos que se desean buscar por cada llamada a la API (limit) y qué conjunto de datos se desea consultar (offset).
                    </p>
                    <UserTable />
                </div>
                <div className="col">
                    <h3>Método POST</h3>
                    <p className="text-justify">
                        Con el siguiente formulario es posible publicar un usuario nuevo y registrarlo a través del siguiente endpoint: <u>https://gorest.co.in/public/v2/users</u> con el método <b>POST</b>.<br />
                        Para consumir este endpoint fue necesario generar un token de acceso en el sitio <a href="https://gorest.co.in/">https://gorest.co.in/</a>. Una vez ha sido creado el token es necesario proporcionarlo en los headers de autorización para consumir el servicio.
                    </p>
                    <UserForm />
                </div>
            </div>
        </div>
    )

}


