import Link from "next/link";

export default function Home() {
  return (
    <div className="container text-center">
      <h1 className="mt-5">
        Práctica 1 - Laboratorio Software Avanzado (Junio 2023)
      </h1>

      <h5>
        Elaborada por Fernando Tello 201800714.
      </h5>

      <p className="my-3">
        Seleccione un protocolo:
      </p>

      <div className="row">
        <div className="col">
          <Link href='/rest'>
            <h1>REST</h1>
          </Link>
        </div>
        <div className="col">
          <Link href='/soap'>
            <h1>SOAP</h1>
          </Link>
        </div>
      </div>
    </div>
  )
}
