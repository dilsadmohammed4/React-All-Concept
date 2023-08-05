import React, {useState} from 'react';
import NavBar from "./layout/NavBar";
import {ComponentA} from "./component/props-drilling/ComponentA";
import {AppData} from "./component/props-drilling/models/AppData";
import {ComponentB} from "./component/props-drilling/ComponentB";

const App: React.FC = () => {
    const [appData, setAppData] = useState<AppData>({
        name: "React",
        version: 18.0,
        author: "Meta"
    });
    return (
        <>
            <NavBar heading={'Props Drilling'} color={'bg-success'}/>
            <div className="container mt-3">
                <div className="row">
                    <div className="col-sm-12">
                        <div className="card">
                            <div className="card-body bg-info">
                                <pre>{JSON.stringify(appData)}</pre>
                                <p>App Component</p>
                                <ComponentA appData={appData}/>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>

    );
}

export default App;
