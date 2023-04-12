import React from "react";
import DashbordElement from "./DashbordElements";
import 'bootstrap/dist/css/bootstrap.css';
import NavbarHorizental from "../../Componenets/NavbarHorizental";
import MenuVertical from "../../Componenets/MenuVertical";

function Dashbord(){
    return(
        <main className="contents">
        <NavbarHorizental/>
    <MenuVertical/>
        <div className="flex pt-10 pl-28 bg-gray-100 ">
        <div className="row  space-y-4">
            <div className="flex items-center justify-center "></div>
            <div className="h-2.5 mx-4 my-3 dark:bg-gray-700  "></div>
              <DashbordElement
                info={
                    {
                        img:"/terrain/terrain1.jpg",
                        type: "Artificiel",
                        size: "6*6",
                        prix: "400Dh",
                    }
                }/>
            <DashbordElement
                info={
                    {
                        img:"/terrain/terrain2.jpg",
                        type: "Artificiel",
                        size: "7*7",
                        prix: "400Dh",

                    }
                } />
            <DashbordElement
                info={
                    {
                        img:"/terrain/terrain3.jpg",
                        type: "Artificiel",
                        size: "6*6",
                        prix: "400Dh",

                    }
                }/>
            <DashbordElement
                info={
                    {
                        img:"/terrain/terrain4.jpg",
                        type: "Artificiel",
                        size: "6*6",
                        prix: "300Dh",

                    }
                } />
            <DashbordElement
                info={
                    {
                        img:"/terrain/terrain5.jpeg",
                        type: "Artificiel",
                        size: "6*6",
                        prix: "400Dh",

                    }
                }
            />
            </div>
        </div>
        </main>

    )
}
export default Dashbord
