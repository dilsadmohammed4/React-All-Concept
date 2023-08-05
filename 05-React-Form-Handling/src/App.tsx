import React from 'react';
import NavBar from "./layout/NavBar";
import {RegistrationForm} from "./component/RegistrationForm";

const App: React.FC = () => {
    return (
        <>
            <NavBar heading={'Form Handling'} color={'bg-danger'}/>

            {/*<UserName/>*/}
            <RegistrationForm/>
        </>

    );
}

export default App;
