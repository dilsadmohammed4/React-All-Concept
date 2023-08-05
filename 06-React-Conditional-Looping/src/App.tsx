import React from 'react';
import NavBar from "./layout/NavBar";
import {ProductCart} from "./component/ProductCart";
import {ProductDisplay} from "./component/ProductDisplay";

const App: React.FC = () => {
    return (
        <>
            <NavBar heading={'Watch Store'} color={'bg-danger'}/>
            {/*<ProductCart/>*/}
            <ProductDisplay/>
        </>

    );
}

export default App;
