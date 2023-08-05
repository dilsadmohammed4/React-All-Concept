import {AppData} from "./models/AppData";
import React from "react";

interface IProps {
    appData: AppData
}

export const ComponentC: React.FC<IProps> = (props) => {
    return (
        <>
            <div className="container mt-3">
                <div className="row">
                    <div className="col">
                        <div className="card">
                            <div className="card-body bg-warning">
                                <p>Component C</p>
                                <pre>{JSON.stringify(props.appData)}</pre>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};
