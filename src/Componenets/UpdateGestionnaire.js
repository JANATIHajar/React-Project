import React, { useState } from 'react';
import {XMarkIcon} from "@heroicons/react/20/solid";
import axios from "axios";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function UpdateGestionnaire({row,GetUsersData}) {
    const [isOpen, setIsOpen] = useState(true);
    const [namee,setname]=useState("");
    const [subnam,setsubnam]=useState("");
    const[Emaill,setEmail]=useState("");
    const handelSubmit = async (event) =>{
        const name = namee || row.name;
        const subname = subnam || row.subname;
        const email = Emaill || row.email;
        event.preventDefault();

        try {
            const response = await axios.patch(`/users/update/${row._id}`, { name,subname , email});
            if (response.status === 200) {
                handleCloseSidebar();
                toast.success(`Mise a jour des informations de <<${row.subname}>> avec succès !`);
                GetUsersData();
                console.log(response.data);



            } else {
                toast.error(response.status);
            }
        } catch (error) {
            toast.error("Une erreur s'est produite lors de la Mise a jour des information.");
        }


    }



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
                    MODIFIER GESTIONNAIRE
                </h2>


                <XMarkIcon className="h-6 w-6 cursor-pointer text-black "
                           onClick={handleCloseSidebar}
                />
            </div>
            <hr className="border-t-2 border-gray-500 my-4" />

            <form className="space-y-4"onSubmit={handelSubmit}>
                <div>
                    <label htmlFor="nom" className="block font-medium text-gray-700">Nom :</label>
                    <input type="text" id="nom" name="nom" className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50 "defaultValue={row.subname}  onChange={(event) => {
                        setsubnam(event.target.value);
                    }}/>
                </div>
                <div>
                    <label htmlFor="Prénon" className="block font-medium text-gray-700">Prénom:</label>
                    <input type="text" id="prenon" name="prenon" className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50" defaultValue={row.name} onChange={(event) => {
                        setname(event.target.value);
                    }}/>
                </div>
                <div>
                    <label htmlFor="email" className="block font-medium text-gray-700">Email :</label>
                    <input type="text" id="email" name="email" className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50" defaultValue={row.email} onChange={(event) => {
                        setEmail(event.target.value);
                    }}/>
                </div>
               

                <div>
                    <label htmlFor="telephone" className="block font-medium text-gray-700">Téléphone :</label>
                    <input type="text" id="telephone" name="telephone" className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"/>
                </div>

                {/* Ajouter d'autres champs ici */}

                <div>
                    <button type="submit" className="w-full flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-black hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500">Modifier Gestionnaire</button>
                </div>
            </form>
        </div>
    );
}

export default UpdateGestionnaire;
