import * as React from 'react';
import DataTable from "react-data-table-component";
import {useState} from "react";
import {Button} from "react-bootstrap";
import {PlusIcon} from "@heroicons/react/24/solid";
import NavbarHorizental from "../../Componenets/NavbarHorizental";
import MenuVertical from "../../Componenets/MenuVertical";


const AddReservations = () => {
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
            name: 'CLIENT',
            selector:row => row.client,
            sortable: true,

        },
        {
            name: 'VENUE',
            selector:row => row.venue,

        },
        {
            name: 'COMMERCER A',
            selector:row => row.commerce,
        },  {
            name: 'SOURCE',
            selector:row => row.source
        },
        {
            name: 'STATUS',
            selector:row => row.status
        }, {
            name: 'OPTIONS',
            selector:row => row.option
        },
    ]
    const data=[

        {
            id: 1,
            client: 'hajar',
            venue: 'Olimpico',
            commerce: '23/05/2002 10:22',
            source: 'CHIMATCH',
            status: 'en attende',
            option: 'v'

        },  {
            id: 2,
            client: 'mehdi',
            venue: 'Olimpico',
            commerce: '23/05/2002 10:22',
            source: 'local',
            status: 'en attende',
            option: 'v'

        }, {
            id: 3,
            client: 'radia',
            venue: 'Olimpico',
            commerce: '23/05/2002 10:22',
            source: 'CHIMATCH',
            status: 'en attende',
            option: 'v'

        }, {
            id: 4,
            client: 'hajar',
            venue: 'Olimpico',
            commerce: '23/05/2002 10:22',
            source: 'CHIMATCH',
            status: 'en attende',
            option: 'v'

        }, {
            id: 5,
            client: 'mehdi',
            venue: 'Olimpico',
            commerce: '23/05/2002 10:22',
            source: 'CHIMATCH',
            status: 'en attende',
            option: 'v'

        }, {
            id: 6,
            client: 'hajar',
            venue: 'Olimpico',
            commerce: '23/05/2002 10:22',
            source: 'CHIMATCH',
            status: 'en attende',
            option: 'v'

        }, {
            id: 7,
            client: 'hajar',
            venue: 'Olimpico',
            commerce: '23/05/2002 10:22',
            source: 'CHIMATCH',
            status: 'en attende',
            option: 'v'

        }, {
            id: 8,
            client: 'radia',
            venue: 'Olimpico',
            commerce: '23/05/2002 10:22',
            source: 'CHIMATCH',
            status: 'en attende',
            option: 'v'

        }, {
            id: 9,
            client: 'wafa',
            venue: 'Olimpico',
            commerce: '23/05/2002 10:22',
            source: 'CHIMATCH',
            status: 'en attende',
            option: 'v'

        }, {
            id: 10,
            client: 'hajar',
            venue: 'Olimpico',
            commerce: '23/05/2002 10:22',
            source: 'CHIMATCH',
            status: 'en attende',
            option: 'v'

        },
    ]
    const [records,setRecords]=useState(data);
    function handelFilter(event){
        const newData=data.filter(row=>{
            return row.client.toLowerCase().includes(event.target.value.toLowerCase())
        })
        setRecords(newData)
    }
    return(
        <main className="contents">
            <NavbarHorizental/>
            <MenuVertical/>
        <div className=" py-12 px-5 container mt-5 ">
            <div className="flex justify-between mb-3 items-center">
                <Button variant="success"  >
                    <div style={{ display: 'flex', alignItems: 'center' }}>

                        <PlusIcon className="h-6 font-semibold shadow-sm " />
                        <span>NOUVEAU Reservation</span>
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
export default AddReservations

