import axios from 'axios';
import { parseStringPromise } from 'xml2js';

const url = 'http://webservices.oorsprong.org/websamples.countryinfo/CountryInfoService.wso'; // URL del servicio SOAP

const xmlData = `<?xml version="1.0" encoding="utf-8"?>
  <soap12:Envelope xmlns:soap12="http://www.w3.org/2003/05/soap-envelope">
    <soap12:Body>
      <ListOfCountryNamesByName xmlns="http://www.oorsprong.org/websamples.countryinfo">
      </ListOfCountryNamesByName>
    </soap12:Body>
  </soap12:Envelope>`;

export default async function obtenerPaises() {
  try {
    const { data } = await axios.post(url, xmlData, {
      headers: {
        'Content-Type': 'text/xml; charset=utf-8'
      }
    })
    const parsedData = await parseStringPromise(data)
    // countries es un arreglo de objetos que representa la lista de países
    const countries = parsedData['soap:Envelope']['soap:Body'][0]['m:ListOfCountryNamesByNameResponse'][0]['m:ListOfCountryNamesByNameResult'][0]['m:tCountryCodeAndName'];
    return countries
  } catch (error) {
    console.log(error)
    return null
  }
}