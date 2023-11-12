import * as React from 'react';
import DataTable from "react-data-table-component";
import {useState, useEffect} from "react";
import {Button} from "react-bootstrap";
import {PlusIcon} from "@heroicons/react/24/solid";
import axios from "axios";
import NavbarHorizental from "../../Componenets/NavbarHorizental";
import MenuVertical from "../../Componenets/MenuVertical";
import AddUser from "../../Componenets/AddUser";
import { ToastContainer, toast } from 'react-toastify';
import {
    TrashIcon,
    PencilIcon,
} from "@heroicons/react/24/solid";
import { FaSyncAlt } from 'react-icons/fa';


import UpdateGestionnaire from "../../Componenets/UpdateGestionnaire";

const AddGestionnaire = () => {
    const [row, setRow] = useState(null);
    const [showSidebar, setShowSidebar] = useState();
    const handleSideShow = () => setShowSidebar(true);
    /* const hansleSideClose = () => setShowSidebar(false);*/
    const [Data,setData]=useState([])

    const GetUsersData = () =>{
        //get all employee data
        axios.get('/users/getAll')
            .then(response => {
                const result = response.data;

                setData(result)
                console.log(result)
            })


    }
    useEffect(() => {
        GetUsersData();},[])
    const deleteuser = async (id, name) =>{
        if(window.confirm(`Êtes-vous sûr(e) de vouloir supprimer ${name}?`)){
            const response= await axios.delete(`/users/delete/${id}`);
            if(response.status === 200){
                toast.success(`Gestionnaire : ${name } est supprimé avec succès !`);
                GetUsersData();

            }

        }
    }
    function handleEdit(row) {
        setRow(row);
        setShowUpdatebar(true);
    }


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
            selector:row => row.name,
            sortable: true,

        },
        {
            name: 'NOM',
            selector:row => row.subname,
            sortable: true,


        },
        {
            name: 'EMAIL',
            selector:row => row.email,

            sortable: true,

        },  {
            name: 'TELEPHONE',
            selector:row => row.phone,
            sortable: true,

        },
        {
            name: 'Is Admin',
            selector:row => row.is_Admin,
            sortable: true,


        },
        {
            name: 'OPTIONS',
            cell: (row) => (
                <div className="flex">
                    <PencilIcon
                        onClick={() => handleEdit(row)}
                        className="h-6 cursor-pointer text-green-500"
                    />

                    <TrashIcon
                        className="h-6 cursor-pointer text-red-500"
                        onClick={() => deleteuser(row._id,row.subname)}
                    />
                </div>
            ),
        },
    ]


    function handelFilter(event){
        const newData=Data.filter(row=>{
            return row.subname.toLowerCase().includes(event.target.value.toLowerCase())
        })
        setData(newData);
    }
    const [showUpdatebar, setShowUpdatebar] = useState(false);



    return(
        <main className="contents">
            <NavbarHorizental/>
            <MenuVertical/>
            <div className="py-12 px-5 container mt-5 ">
                <div className="flex justify-between mb-4 items-center">
                    <Button  onClick={() => handleSideShow()} variant="success"  >
                        <div style={{ display: 'flex', alignItems: 'center' }}>
                            <PlusIcon className="h-6 font-semibold shadow-sm " />
                            <span span style={{ fontSize: '10px'  }}>NOUVEAU GESTIONNAIRE</span>
                        </div>
                        <ToastContainer
                            position="top-center"
                            autoClose={5000}
                            hideProgressBar={false}
                            newestOnTop={false}
                            closeOnClick
                            rtl={false}
                            pauseOnFocusLoss
                            draggable
                            pauseOnHover
                            theme="colored"
                        />

                    </Button>
                    <div className="d-flex">
                        <input style={{ borderBottom: '1px solid black' }} type="text" placeholder="Recherche" onChange={handelFilter} />
                        <FaSyncAlt onClick={() => window.location.reload()} className="ml-2 cursor-pointer" />
                    </div>


                </div>


                <DataTable
                    columns={columns}
                    className="border"
                    data={Data}
                    customStyles={customStyles}
                    pagination
                ></DataTable>
            </div>

            <div style={{ display: 'flex', position: 'relative' }}>
                {showSidebar && (<AddUser/>)}

            </div>
            <div style={{ display: 'flex', position: 'relative' }}>
                {showUpdatebar && (<UpdateGestionnaire
                    row={row}
                    GetUsersData={GetUsersData}
                />)}
            </div>
        </main>
    )
}
export default AddGestionnaire
