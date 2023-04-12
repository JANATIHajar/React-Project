import * as React from 'react';
import DataTable from "react-data-table-component";
import {useState} from "react";
import {Button} from "react-bootstrap";
import {PlusIcon} from "@heroicons/react/24/solid";
import NavbarHorizental from "../../Componenets/NavbarHorizental";
import MenuVertical from "../../Componenets/MenuVertical";


const AddClients = () => {
    const customStyles={
        headRow: {
            style: {
                backgroundColor: '#00935C',
                color: 'white',
            }
            },
            headCells: {
                style: {

                }
            },
            cells: {
                style: {
                },
            },

        };
    const columns =[
        {
            name: 'PRENOM',
            selector:row => row.prenom,
            sortable: true,

        },
        {
            name: 'NOM',
            selector:row => row.name,

        },
        {
            name: 'EMAIL',
            selector:row => row.email,
        },  {
            name: 'TELEPHONE',
            selector:row => row.phone
        },
        {
            name: 'SOURCE',
            selector:row => row.source
        }, {
            name: 'CREELE',
            selector:row => row.creele
        }, {
            name: 'OPTIONS',
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
            prenom: 'fatima',
            email: 'hajarjanati47@gmail.com',
            phone: '0770505442',
            creele: '25/01/2002',
            option: 'v',
            source: 'Local'
        },
        {
            id: 3,
            name: 'hajar',
            prenom: 'taha',
            email: 'hajarjanati47@gmail.com',
            phone: '0770505442',
            creele: '25/01/2002',
            option: 'v',
            source: 'Local'
        }  ,{
            id: 4,
            name: 'jamal',
            prenom: 'fatima',
            email: 'hajarjanati47@gmail.com',
            phone: '0770505442',
            creele: '25/01/2002',
            option: 'v',
            source: 'Local'
        },
        {
            id: 5,
            name: 'hajar',
            prenom: 'Janati',
            email: 'hajarjanati47@gmail.com',
            phone: '0770505442',
            creele: '25/01/2002',
            option: 'v'

        },
        {
            id: 6,
            name: 'hajar',
            prenom: 'fatima',
            email: 'hajarjanati47@gmail.com',
            phone: '0770505442',
            creele: '25/01/2002',
            option: 'v',
            source: 'Local'
        },
        {
            id: 7,
            name: 'hajar',
            prenom: 'taha',
            email: 'hajarjanati47@gmail.com',
            phone: '0770505442',
            creele: '25/01/2002',
            option: 'v',
            source: 'Local'
        }  ,{
            id: 8,
            name: 'jamal',
            prenom: 'fatima',
            email: 'hajarjanati47@gmail.com',
            phone: '0770505442',
            creele: '25/01/2002',
            option: 'v',
            source: 'Local'
        },
        {
            id: 9,
            name: 'hajar',
            prenom: 'fatima',
            email: 'hajarjanati47@gmail.com',
            phone: '0770505442',
            creele: '25/01/2002',
            option: 'v',
            source: 'Local'
        },
        {
            id: 10,
            name: 'hajar',
            prenom: 'taha',
            email: 'hajarjanati47@gmail.com',
            phone: '0770505442',
            creele: '25/01/2002',
            option: 'v',
            source: 'Local'
        }  ,{
            id: 11,
            name: 'jamal',
            prenom: 'fatima',
            email: 'hajarjanati47@gmail.com',
            phone: '0770505442',
            creele: '25/01/2002',
            option: 'v',
            source: 'Local'
        }
    ]
    const [records,setRecords]=useState(data);
 function handelFilter(event){
     const newData=data.filter(row=>{
         return row.name.toLowerCase().includes(event.target.value.toLowerCase())
     })
     setRecords(newData)
 }
    return(
        <main className="contents">
            <NavbarHorizental/>
            <MenuVertical/>
            <div className="py-12 px-5 container mt-5 ">
            <div className="flex justify-between mb-4 items-center">
                <Button variant="success"  >
                    <div style={{ display: 'flex', alignItems: 'center' }}>

                    <PlusIcon className="h-10 font-semibold shadow-sm " />
                    <span>NOUVEAU CLIENT</span>
                    </div>
                </Button>
            <div>
                <input style={{ borderBottom: '1px solid black'  }}  type="text" placeholder="Recherche" onChange={handelFilter}/>
            </div>
            </div>
            <DataTable
                columns={columns }
                className="border "
                data={records}
                customStyles={customStyles}
                fixedHeader
                pagination
            ></DataTable>
        </div>
        </main>
    )
}
export default AddClients

