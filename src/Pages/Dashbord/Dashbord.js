import React from "react";
import DashbordElement from "./DashbordElements";
import 'bootstrap/dist/css/bootstrap.css';

function Dashbord(){
    return(
        <div className="grid lg:grid-cols-2 gap-3 p-10 h-72 w-full bg-gray-300 filter">
            <DashbordElement
                info={
                    {
                        img:"/terrain/terrain1.jpg",
                        name: "/icons/",
                    }
                }/>
            <DashbordElement
                info={
                    {
                        img:"/terrain/terrain2.jpg",
                        name: "terrain2",
                    }
                } />
            <DashbordElement
                info={
                    {
                        img:"/terrain/terrain3.jpg",
                        name: "terrain3",
                    }
                }/>
            <DashbordElement
                info={
                    {
                        img:"/terrain/terrain4.jpg",
                        name: "terrain4",
                    }
                } />
            <DashbordElement
                info={
                    {
                        img:"/terrain/terrain5.jpeg",
                        name: "terrain5",
                    }
                }
            />
        </div>
    )
}
export default Dashbord
