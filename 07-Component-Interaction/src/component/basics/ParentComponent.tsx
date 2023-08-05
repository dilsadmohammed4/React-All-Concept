import React, {useState} from "react";
import {ChildComponent} from "./ChildComponent";

export const ParentComponent: React.FC = () => {
    const [msg, setMsg] = useState<string>("I am From Parent.");
    const [cmsg, setCMsg] = useState<string>("");

    const updateChildText = (msg: string): void => {
        setCMsg(msg);
    }
    return (
        <>
            <div className="container mt-3">
                <div className="row">
                    <div className="col-sm-4">
                        <div className="card">
                            <div className="card-body bg-primary text-white">
                                <p>{msg}</p>
                                <p>From Child:{cmsg}</p>
                                <ChildComponent text={msg} updateChildText={updateChildText}/>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};
