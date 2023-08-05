import React from "react";

interface IProps {
    heading: string
}

export const MyCards: React.FC<IProps> = (props) => {
    return (
        <>
            <div className="card">
                <div className="card-body">
                    <h3 className="heading">{props.heading}</h3>
                    <p>ONCE upon a time there were four little Rabbits, and their names were— Flopsy, Mopsy,
                        Cotton-tail, and Peter.

                        They lived with their Mother in a sand-bank, underneath the root of a very big fir tree.

                        "NOW, my dears," said old Mrs. Rabbit one morning, "you may go into the fields or down the lane,
                        but don't go into Mr. McGregor's garden: your Father had an accident there; he was put in a pie
                        by Mrs. McGregor."</p>
                </div>
            </div>
        </>
    );
};
