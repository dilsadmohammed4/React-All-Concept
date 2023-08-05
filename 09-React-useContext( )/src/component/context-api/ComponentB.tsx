import {ComponentC} from "./ComponentC";
import React from "react";


export const ComponentB: React.FC = () => {
    return (
        <>
            <div className="container mt-3">
                <div className="row">
                    <div className="col">
                        <div className="card">
                            <div className="card-body bg-danger">
                                <p>Component B</p>
                                <ComponentC/>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};
