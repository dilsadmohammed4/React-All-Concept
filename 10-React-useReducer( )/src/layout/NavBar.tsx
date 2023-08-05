import React from "react";

interface IProps {
    color: string,
    heading: string
}

const NavBar: React.FC<IProps> = (props) => {
    return (
        <>
            <nav className={`navbar navbar-dark ${props.color} navbar-expand-sm`}>
                <div className="container">
                    <a href="" className="navbar-brand">{props.heading}</a>
                </div>
            </nav>
        </>
    );
}

export default NavBar;
