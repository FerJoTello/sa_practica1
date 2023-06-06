'use client';
import DataTable from 'react-data-table-component'

export default async function Paises({ paises }) {
  const columns = [
    {
      name: "Código ISO",
      selector: (row) => row['m:sISOCode'][0],
    },
    {
      name: "Nombre",
      selector: (row) => row['m:sName'][0],
    },
  ]

  return (
    <DataTable
      columns={columns}
      data={paises}
      noDataComponent={<></>}
      striped
      pagination
      paginationComponentOptions={{
        rowsPerPageText: 'Filas por página',
        rangeSeparatorText: 'de',
        selectAllRowsItem: true,
        selectAllRowsItemText: 'Todos',
      }}
    />
  )
}