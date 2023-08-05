import React from 'react';
import {MyCards} from "./component/MyCards";

const App: React.FC = () => {
    return (
        <>
            <h2>My CSS Component</h2>
            <MyCards heading="Good Morning"/>
            <MyCards heading="Good Afternoon"/>
            <MyCards heading="Good Night"/>
        </>
    );
}

export default App;
