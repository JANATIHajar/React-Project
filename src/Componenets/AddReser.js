import React, {useEffect, useState} from 'react';
import DatePicker from 'react-datepicker';
import "react-datepicker/dist/react-datepicker.css";
import {XMarkIcon} from "@heroicons/react/20/solid";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {faCalendarAlt} from '@fortawesome/free-solid-svg-icons';
import {Button} from "@material-tailwind/react";
import {PlusIcon} from "@heroicons/react/24/solid";
import { Link } from 'react-router-dom';
import axios from "axios";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';








function AddReser() {

    const [clientList, setClientList] = useState([{'id':'', 'CIN':''}]);
    const[cin,setcin] = useState("");
    const[name,setname] = useState("");
    const [terrains, setTerrains] = useState([{'id':'', 'name':''}]);
    const [date, setdate] = useState(new Date());
    const [dateF, setdateF] = useState(new Date());
    const handelSubmit = async (event) =>{
        event.preventDefault();
        if(!cin || !name ||!date ){
            toast.error("veuillez remplir tous les champs s'il vous plait")}

        else
        {try {
            const response = await axios.post('/booking/add', {cin, name, date , dateF});
            if (response.status === 201) {
                toast.success("Reservation ajouté avec succès !");
                await new Promise((resolve) => setTimeout(resolve, 3000));
                window.location.reload();
            } else {
                toast.error(response.message);
            }}
        catch (e) {
            toast.error("Une erreur s'est produite lors de l'ajout de la reservation.");

        }


        }
    }
    const GetClientsList = async() =>{

        //get all employee data
        const response = await  axios.get('/clients/all');
        const newData = await response.data;
        setClientList(newData);
        console.log(newData);
    }
    useEffect(() => {
        GetClientsList();},[])
    const GetTerrainsList = async() =>{

        //get all employee data
        const response = await  axios.get('/field/all');
        const newData = await response.data;
        setTerrains(newData);
        console.log(newData);
    }
    useEffect(() => {
        GetTerrainsList();},[])
    function handleDateChange(date) {
        setdate(date);
    }
    function handleDateeChange(dateF) {
        setdate(dateF);
    }

  
    const [showSidebar, setShowSidebar] = useState(true);

   ;
    const [isOpen, setIsOpen] = useState(true);

    const handleCloseSidebar = () => {
        setIsOpen(false);

    };

    if (!isOpen) {
        return null; // Retourne null si le Sidebar n'est pas ouvert
    }


    return (
        <div className="fixed top-0 right-0 w-1/3 h-full bg-gray-200 p-8 overflow-y-scroll">
            <div className="flex my-4 items-center justify-between">
                <h2 className="text-gray-800  font-medium text-sm">
                            AJOUTER UNE RESERVATION
                </h2>

                        <XMarkIcon className="h-6 w-6 cursor-pointer text-black "
                                   onClick={handleCloseSidebar}
                        />
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
                    <hr className="border-t-2 border-gray-500 my-4" />

                    <form className="space-y-4" onSubmit={handelSubmit}>
                            <div>
                            <label htmlFor="client" className="form-label">Client</label>
                        <div className="flex items-center gap-2">
                            <select id="client" className="form-select"value={cin } onChange={(event) => {
                                setcin(event.target.value);}}>
                                <option value="">Choisir un client</option>
                                {clientList.map(client => (
                                    <option key={client._id}   value={client.CIN}>{client.CIN}</option>
                                ))}
                            </select>
                            <Link to="/client">
                            <Button
                                color="gray"
                                className="flex bg-gray-800 items-center gap-2">
                                <PlusIcon className="h-4 font-semibold shadow-sm text-green-300" />
                            </Button>
                            </Link>
                        </div>
                        </div>
                        <div className="mb-3">
                            <label htmlFor="terrain" className="form-label">Terrains</label>
                            <select id="terrain" className="form-select" value={name} onChange={(event) => {
                               setname(event.target.value);}}>
                                <option value="">Choisir un terrain</option>
                                {terrains.map(terrain => (
                                    <option key={terrain._id} value={terrain.name}>{terrain.name}</option>
                                ))}
                            </select>
                        </div>
                        <div className="mb-3">
                            <label htmlFor="choisit la date" className="form-label">Commencer à</label>
                            <div className="d-flex align-items-center">
                                <DatePicker
                                    id="date"
                                    selected={date}
                                    onChange={handleDateChange}
                                    dateFormat="yyyy-MM-dd HH:mm:SS"
                                    showTimeInput

                                />
                                <FontAwesomeIcon icon={faCalendarAlt} className="mr-5" />
                            </div>

                        </div>
                        <div className="mb-3">
                            <label htmlFor="choisit la date" className="form-label">Terminer à</label>
                            <div className="d-flex align-items-center">
                                <DatePicker
                                    id="datee"
                                    selected={dateF}
                                    onChange={handleDateeChange}
                                    dateFormat="yyyy-MM-dd HH:mm:SS"
                                    showTimeInput

                                />
                                <FontAwesomeIcon icon={faCalendarAlt} className="mr-5" />
                            </div>

                        </div>
                        <div>
                            <button type="submit" className="w-full flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-black hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500">Ajouter Réservation</button>
                        </div>                    </form>
                </div>
    );
}

export default AddReser;
