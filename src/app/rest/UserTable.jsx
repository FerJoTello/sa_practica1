'use client';

import { useEffect, useState } from "react"
import DataTable from 'react-data-table-component'

export default function UserTable() {
    const [users, setusers] = useState([])
    const [perPage, setPerPage] = useState(10)
    const [TotalRows, setTotalRows] = useState(100)
    const [Loading, setLoading] = useState(0)


    async function handleBusqueda(pagina, porPagina = null) {
        setLoading(true);
        const fetchResponse = await fetch(`https://gorest.co.in/public/v2/users?page=${pagina}&per_page=${porPagina || perPage}`)
        const jsonResponse = await fetchResponse.json()
        setusers(jsonResponse)
        setLoading(false)
    }

    useEffect(() => {
        const initComponent = async () => {
            handleBusqueda(1)
        }
        initComponent()
    }, [])


    const handlePageChange = page => {
        handleBusqueda(page);
    };

    const handlePerRowsChange = async (newPerPage, page) => {
        handleBusqueda(page, newPerPage)
        setPerPage(newPerPage);
    };


    const columns = [
        {
            name: "ID",
            selector: (row) => row.id,
        },
        {
            name: "Nombre",
            selector: (row) => row.name,
        },
        {
            name: "Correo",
            selector: (row) => row.email,
        },
        {
            name: "Género",
            selector: (row) => row.gender,
        },
        {
            name: "Estado",
            selector: (row) => row.status,
        },
    ]
    return (
        <DataTable
            columns={columns}
            data={users}
            striped
            pagination
            paginationServer
            paginationTotalRows={TotalRows}
            onChangePage={handlePageChange}
            onChangeRowsPerPage={handlePerRowsChange}
            progressPending={Loading}
            noDataComponent={<></>}
            /* progressComponent={<Spinner animation="border" variant="primary" />} */
            paginationComponentOptions={{
                rowsPerPageText: 'Filas por página',
                rangeSeparatorText: 'de',
            }}
        />
    )
}