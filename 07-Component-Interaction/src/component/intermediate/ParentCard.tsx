import {ChildCard} from "./ChildCard";
import React, {useState} from "react";

export const ParentCard: React.FC = () => {
    const [pText, setPText] = useState<string>("");
    const [cText, setCText] = useState<string>("");
    const updateInput = (e: React.ChangeEvent<HTMLInputElement>): void => {
        setPText(e.target.value);
    }
    return (
        <>
            <div className="container mt-3">
                <div className="row">
                    <div className="col-sm-5">
                        <div className="card">
                            <div className="card-header bg-warning">
                                <form>
                                    <input
                                        onChange={e => updateInput(e)}
                                        type="text" className="form-control"
                                        placeholder="Parent Text"/>
                                </form>
                                <p>{cText}</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <ChildCard setCText={setCText} pText={pText}/>

        </>
    );
};
