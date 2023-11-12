import React, {useState,useHistory } from 'react';
import axios from "axios";
import {XMarkIcon} from "@heroicons/react/20/solid";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function Sidebar() {

    
    const [firstName,setfirstName]=useState("");
    const [CIN,setCIN]=useState("");
    const [lastName,setlastName]=useState("");
    const [Email,setEmail]=useState("");
    const [phone,setphone]=useState("");
    const [addresse,setaddresse]=useState("");

   

    const handelSubmit = async (event) =>{
        
        event.preventDefault()

        if (!firstName ||!lastName  || !CIN ||!Email )
        { toast.error("veuillez remplir tous les champs s'il vous plait")}
        else {
            try {
                const response = await axios.post('/clients/Add', { firstName, lastName, CIN, Email, phone ,addresse});
                if (response.status === 201) {
                    toast.success("Client ajouté avec succès !");
                    await new Promise((resolve) => setTimeout(resolve, 3000));
                    window.location.reload();

                } else {
                    toast.error(response.message);
                }
            } catch (error) {
                toast.error("Une erreur s'est produite lors de l'ajout du client.");
            }
        }

    }


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
                    AJOUTER UN NOUVEAU CLIENT
                </h2>

                <XMarkIcon className="h-6 w-6 cursor-pointer text-black "
                           onClick={handleCloseSidebar}/>
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
                    <label htmlFor="nom" className="block font-medium text-gray-700">Nom :</label>
                    <input type="text" id="nom" name="nom" className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50" value={firstName} onChange={(event) => {
                        setfirstName(event.target.value);
                    }}/>
                </div>
                <div>
                    <label htmlFor="Prénonm" className="block font-medium text-gray-700">Prénom:</label>
                    <input type="text" id="prenom" name="prenom" className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"value={lastName} onChange={(event) => {
                        setlastName(event.target.value);
                    }}/>
                </div>
                <div>
                    <label htmlFor="email" className="block font-medium text-gray-700">Email :</label>
                    <input type="text" id="email" name="email" className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"value={Email} onChange={(event) => {
                        setEmail(event.target.value);
                    }}/>
                </div>

                <div>
                    <label htmlFor="adresse" className="block font-medium text-gray-700">Adresse :</label>
                    <input type="text" id="adresse" name="adresse" className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"value={addresse} onChange={(event) => {
                        setaddresse(event.target.value);
                    }}/>
                </div>

                <div>
                    <label htmlFor="telephone" className="block font-medium text-gray-700">Téléphone :</label>
                    <input type="text" id="telephone" name="telephone" className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"value={phone} onChange={(event) => {
                        setphone(event.target.value);
                    }}/>
                </div>
                <div>
                    <label htmlFor="carte identite" className="block font-medium text-gray-700">N° carte d'identite :</label>
                    <input type="text" id="telephone" name="telephone" className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"value={CIN} onChange={(event) => {
                        setCIN(event.target.value);
                    }}/>
                </div>

                {/* Ajouter d'autres champs ici */}

                <div>
                    <button type="submit" className="w-full flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm  font-medium text-white bg-black ">Ajouter Client</button>
                </div>
            </form>
        </div>
    );
}

export default Sidebar;
