import React from "react";
import {Navbar} from "./layouts/navbar/Navbar";
import {Routes, Route, BrowserRouter} from "react-router-dom";
import {Home} from "./layouts/home/Home";
import {Counter} from "./components/counter/Counter";
import {Employees} from "./components/employee/Employees";
import {UserList} from "./components/user-list/UserList";

const App: React.FC = () => {
    return (
        <>

            <BrowserRouter>
                <Navbar/>
                <Routes>
                    <Route path={'/'} element={<Home/>}/>
                    <Route path={'/counter'} element={<Counter/>}/>
                    <Route path={'/employees'} element={<Employees/>}/>
                    <Route path={'/users'} element={<UserList/>}/>
                </Routes>
            </BrowserRouter>

        </>

    );
}

export default App;
