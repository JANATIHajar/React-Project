import React from "react";
import 'bootstrap/dist/css/bootstrap.css';

function DashbordElement(props){
    return(
        <div className="col-md-5">
            <div className="card">
                <div className="card-header">
                    <img style={{maxWidth:'100%'}} src={props.info.img} alt=""/>
                </div>
                <div className="card-body">
                    <h2>{props.info.name}</h2>
                </div>
            </div>
        </div>
    )
}

export default DashbordElement