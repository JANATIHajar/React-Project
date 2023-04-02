import React from "react";
import 'bootstrap/dist/css/bootstrap.css';

function DashbordElement(props){
    return(
        <div className="flex items-center gap-3">
            <div className="relative">
                <div class="h-72 w-full bg-gray-300 filter brightness-50">
                <div className="card-header">
                    <img style={{maxWidth:'100%'}} src={props.info.img} alt=""/>
                </div>
                <div className="card-body">
                    <h2>{props.info.name}</h2>
                </div>
                </div>

            </div>
        </div>
    )
}

export default DashbordElement;