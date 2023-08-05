import {ComponentB} from "./ComponentB";
import React, {useState} from "react";
import {AppData} from "./models/AppData";

interface IProps {
    appData: AppData
}

export const ComponentA: React.FC<IProps> = (props) => {

    return (
        <>
            <div className="container mt-3">
                <div className="row">
                    <div className="col">
                        <div className="card">
                            <div className="card-body bg-light">
                                <p>Component A</p>
                                <ComponentB appData={props.appData}/>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};
