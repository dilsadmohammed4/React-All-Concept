import {ComponentB} from "./ComponentB";
import React, {useState} from "react";
import {AppData} from "./models/AppData";


export const ComponentA: React.FC = () => {

    return (
        <>
            <div className="container mt-3">
                <div className="row">
                    <div className="col">
                        <div className="card">
                            <div className="card-body bg-light">
                                <p>Component A</p>
                                <ComponentB/>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};
