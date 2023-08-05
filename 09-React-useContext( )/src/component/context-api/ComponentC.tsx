import {AppData} from "./models/AppData";
import React, {useContext} from "react";
import {AppDataContext, ChildDataContext} from "../../App";


export const ComponentC: React.FC = () => {
    const appData = useContext(AppDataContext);
    const updatechildDataContext = useContext(ChildDataContext);
    const getChildText = (): void => {
        updatechildDataContext.getChildText("I am from Child");
    }
    return (
        <>
            <div className="container mt-3">
                <div className="row">
                    <div className="col">
                        <div className="card">
                            <div className="card-body bg-warning">
                                <p>Component C</p>
                                <pre>{JSON.stringify(appData)}</pre>
                                <button onClick={getChildText} className="btn btn-success">Click Me</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};
