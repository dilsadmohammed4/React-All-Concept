import React from 'react';
import NavBar from "./layout/NavBar";
import {ProductCart} from "./component/ProductCart";

const App: React.FC = () => {
    return (
        <>
            <NavBar heading={'States Demo in React'} color={'bg-primary'}/>
            {/*<Counter/>*/}
            {/*<MobileCounter/>*/}
<ProductCart/>
        </>
    );
}

export default App;
