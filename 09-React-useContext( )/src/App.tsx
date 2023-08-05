import React, {useState} from 'react';
import NavBar from "./layout/NavBar";
import {ComponentA} from "./component/context-api/ComponentA";
import {AppData} from "./component/context-api/models/AppData";
import Counter from "./component/context-api/Counter";

interface ChildData {
    getChildText: (msg: string) => void
}

export const AppDataContext = React.createContext<AppData>({} as AppData)
export const ChildDataContext = React.createContext<ChildData>({} as ChildData)
const App: React.FC = () => {
    const [appData, setAppData] = useState<AppData>({
        name: "React",
        version: 19.0,
        author: "Meta"
    });
    const [childText, setChildText] = useState("");
    const getChildTextFn = (msg: string) => {
        setChildText(msg);
    }
    return (
        <>
            <NavBar heading={'Context-Api'} color={'bg-success'}/>
            <div className="container mt-3">
                <div className="row">
                    <div className="col-sm-12">
                        <div className="card">
                            <div className="card-body bg-info">
                                <pre>{JSON.stringify(appData)}</pre>
                                <p>App Component</p>
                                <p>From Child: {childText}</p>
                                <AppDataContext.Provider value={appData}>
                                    <ChildDataContext.Provider
                                        value={{getChildText: getChildTextFn}}>
                                        <ComponentA/>
                                    </ChildDataContext.Provider>
                                </AppDataContext.Provider>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <Counter/>
        </>

    );
}

export default App;
