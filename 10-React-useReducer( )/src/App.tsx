import React, {useState} from 'react';
import NavBar from "./layout/NavBar";
import {WishMessage} from "./component/use-state/WishMessage";
import {GreetMessage} from "./component/use-reducer/GreetMessage";

const App: React.FC = () => {
    return (
        <>
            <NavBar heading={'useReducer()'} color={'bg-success'}/>
            <WishMessage/>
            <GreetMessage/>
        </>

    );
}

export default App;
