import React from "react";

interface IProps {
    imageUrl: string,
    name: string
}

export const TourCard: React.FC<IProps> = (props) => {
    return (
        <div className="col-sm-3">
            <div className="card shadow-lg">
                <img src={props.imageUrl} alt="" height={200}/>
                <div className="card-body">
                    <p className="h3">{props.name}</p>
                    <p><span>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Architecto aspernatur consequuntur corporis delectus deleniti eius, esse fuga modi nemo obcaecati quam qui quis reiciendis rerum tempora tenetur veniam? Ipsa, reprehenderit?</span>
                    </p>
                </div>
            </div>
        </div>
    )
}
