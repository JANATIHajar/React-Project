import * as React from 'react';
import DataTable from "react-data-table-component";
import {Columns} from "react-bootstrap-icons";

const columns =[
    {
        name: 'Name',
        selector:row => row.name
    },
    {
        name: 'Prénom',
        selector:row => row.prenom
    },
    {
        name: 'Email',
        selector:row => row.email
    },  {
        name: 'Télephone',
        selector:row => row.phone
    }, {
        name: 'Creele',
        selector:row => row.creele
    }, {
        name: 'Options',
        selector:row => row.option
    },
]
const data=[
    {
        id: 1,
        name: 'hajar',
        prenom: 'Janati',
        email: 'hajarjanati47@gmail.com',
        phone: '0770505442',
        creele: '25/01/2002',
        option: 'v'

    },
    {
        id: 2,
        name: 'hajar',
        prenom: 'Janati',
        email: 'hajarjanati47@gmail.com',
        phone: '0770505442',
        creele: '25/01/2002',
        option: 'v'

    }
]
const AddClients = () => {
    return(
        <div className='container mt-5'>
            <DataTable
                columns={columns}
                data={data}
                ></DataTable>
        </div>
    )
}
export default AddClients

