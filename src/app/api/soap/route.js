import axios from 'axios';
import { NextResponse } from "next/server";
import { parseStringPromise } from 'xml2js';

const API_URL = 'https://www.dataaccess.com/webservicesserver/NumberConversion.wso'; // URL del servicio SOAP

export async function GET(request) {
    try {
        const { searchParams } = new URL(request.url);
        const numero = searchParams.get('numero');

        const xmlData = `<soap:Envelope xmlns:soap="http://schemas.xmlsoap.org/soap/envelope/">
    <soap:Body>
      <NumberToWords xmlns="http://www.dataaccess.com/webservicesserver/">
        <ubiNum>${numero}</ubiNum>
      </NumberToWords>
    </soap:Body>
    </soap:Envelope>`;

        const { data } = await axios.post(API_URL, xmlData, {
            headers: {
                'Content-Type': 'text/xml; charset=utf-8'
            }
        })
        const parsedData = await parseStringPromise(data)

        return NextResponse.json({ numeroAPalabras: parsedData['soap:Envelope']['soap:Body'][0]['m:NumberToWordsResponse'][0]['m:NumberToWordsResult'][0] });

    } catch (error) {
        console.log(error)
        return NextResponse.json({ error: "Se dio un problema no controlado" }, { status: 400 });
    }
}