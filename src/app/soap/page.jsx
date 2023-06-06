import NumerosAPalabrasForm from "./NumerosAPalabrasForm";
import PaisesTable from "./PaisesTable";
import obtenerPaises from "./obtenerPaises";

export default async function Soap() {
    const paises = await obtenerPaises()
    return (
        <div className="container-fluid px-4">
            <h1 className="text-center">SOAP</h1>
            <p>
                La documentación utilizada para consumir los endpoints con el protocolo SOAP fue hallada en : <a href="https://documenter.getpostman.com/view/8854915/Szf26WHn#ce8589ab-0fc5-493c-9792-93e5d427e608">https://documenter.getpostman.com/view/8854915/Szf26WHn#ce8589ab-0fc5-493c-9792-93e5d427e608</a>
                <br />
            </p>
            <div className="row gx-5">
                <div className="col">
                    <h3>Método GET</h3>
                    <p className="text-justify">
                        En la siguiente tabla se enlista la información recuperada del siguiente endpoint: <u>http://webservices.oorsprong.org/websamples.countryinfo/CountryInfoService.wso</u> describiendo la información de países y su código ISO.
                    </p>
                    <PaisesTable paises={paises} />
                </div>
                <div className="col">
                    <h3>Método POST</h3>
                    <p className="text-justify">
                        Con el siguiente formulario se realiza una petición POST con el protocolo SOAP que devuelve el nombre (en inglés) del número que se proporcione.<br />
                        El endpoint es el siguiente: <u>https://www.dataaccess.com/webservicesserver/NumberConversion.wso</u>.<br />
                    </p>
                    <NumerosAPalabrasForm />
                </div>
            </div>
        </div>
    )
}