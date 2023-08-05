import React, {useState} from "react";

export const WishMessage: React.FC = () => {
    const [msg, setMsg] = useState<string>("");

    const goodMFn = (): void => {
        setMsg("Good Morning!")
    }
    const goodAFn = (): void => {
        setMsg("Good Afternoon!")
    }
    const goodEFn = (): void => {
        setMsg("Good Evening!")
    }

    return (
        <>
            <div className="container mt-3">
                <div className="row">
                    <div className="col-sm-8">
                        <div className="card">
                            <div className="card-header">
                                <p className="h4">useState()</p>
                            </div>
                            <div className="card-body">
                                <p className="h3">Hello {msg}</p>
                                <button className="btn btn-success me-2" onClick={goodMFn}>Good Morning</button>
                                <button className="btn btn-warning me-2" onClick={goodAFn}>Good Afternoon</button>
                                <button className="btn btn-danger me-2" onClick={goodEFn}>Good Evening</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};
