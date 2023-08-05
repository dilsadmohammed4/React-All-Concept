import React, {useState} from "react";

interface IProps {
    pText: string,
    setCText: React.Dispatch<React.SetStateAction<string>>
}

export const ChildCard: React.FC<IProps> = (props) => {
    const [cText, setCText] = useState<string>("");
    const updateText = (e: React.ChangeEvent<HTMLInputElement>): void => {
        setCText(e.target.value);
        props.setCText(cText);

    }
    return (
        <>
            <div className="container mt-3">
                <div className="row">
                    <div className="col-sm-5">
                        <div className="card">
                            <div className="card-header bg-info">
                                <form>
                                    <input
                                        value={cText}
                                        onChange={e => updateText(e)}
                                        type="text" className="form-control" placeholder="Child Text"/>
                                    <p>{props.pText}</p>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};
