import React from "react";
import 'bootstrap/dist/css/bootstrap.css';

function DashbordElement(props){
    return(
                        <div className="col-md-6">
                        <div className="card-header">
                            <img style={{maxWidth:'100%' ,backgroundSize: "cover",
                                backgroundPosition: "center center"}}  src={props.info.img} alt=""
                                className="h-72 w-full bg-gray-300 filter brightness-50"/>
                        </div>
                        <div className="card-body">
                            <div className="flex justify-between border  px-6 py-4">
                                <div className="flex items-center gap-3">
                                    <img src="/icons/corner.png" className="h-6" alt="" />
                                    <p>{props.info.type}</p>
                                </div>
                                <div className="flex items-center gap-3">
                                    <img src="/icons/size.png" className="h-6" alt="" />
                                    <p>
                                        {props.info.size}
                                    </p>
                                </div>
                                <div className="flex items-center gap-3">
                                    <img src="/icons/money.png" className="h-6" alt="" />
                                    <p>{props.info.prix}</p>
                                </div>
                            </div>
                        </div>
                </div>

    )
}

export default DashbordElement;