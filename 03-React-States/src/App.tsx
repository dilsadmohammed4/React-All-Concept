import React from 'react';
import NavBar from "./layout/NavBar";
import TourCardOptimised from "./component/TourCardOptimised";

const App: React.FC = () => {
    return (
        <>
            <NavBar heading={'States Demo in React'} color={'bg-primary'}/>
            <TourCardOptimised/>
        </>
    );
}

export default App;
