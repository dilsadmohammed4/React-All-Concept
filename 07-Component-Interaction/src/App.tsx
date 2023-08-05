import React from 'react';
import NavBar from "./layout/NavBar";
import {UserManager} from "./user-manager/components/UserManager";

const App: React.FC = () => {
    return (
        <>
            <NavBar heading={'Component Interaction'} color={'bg-success'}/>
            <UserManager/>
        </>

    );
}

export default App;
