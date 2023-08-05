import NavBar from "./layout/NavBar";
import React from "react";
import {UserList} from "./modules/components/user-component/UserList";
import {Spinner} from "./layout/Spinner";

const App: React.FC = () => {
    return (
        <>
            <NavBar heading={'useEffect()'} color={'bg-success'}/>
            <UserList/>
        </>

    );
}

export default App;
