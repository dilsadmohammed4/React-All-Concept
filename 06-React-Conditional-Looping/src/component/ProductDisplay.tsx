import React, {useState} from "react";
import {IProduct} from "./watches/models/IProduct";
import {ProductService} from "../services/ProductService";

export const ProductDisplay: React.FC = () => {
    const [watches, setWatches] = useState<IProduct[]>(ProductService.getAllProducts());

    return (
        <>
            <div className="container mt-3">
                <div className="row">
                    <div className="col">
                        <p className="h3 text-primary">Watch</p>
                        <p><span>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Assumenda at consectetur cupiditate debitis distinctio dolorem dolorum error est harum incidunt, iusto molestias nisi nobis numquam omnis perferendis quibusdam similique vel.</span>
                        </p>
                    </div>
                </div>
            </div>
            <div className="container">
                <div className="row">
                    {
                        watches.length > 0 && watches.map((watch, index) => {
                            return (
                                <div className="col-sm-3" key={watch.id}>
                                    <div className="card mt-3">
                                        <div className="card-header text-center">
                                            <img src={watch.imageUrl} className="img-fluid" style={{height: "200px"}}/>
                                        </div>
                                        <div className="card-body">
                                            <p className="h5">{watch.name}</p>
                                            <p className="fw-bold">&#8377; {watch.price.toFixed(2)}</p>
                                            <p className="h6">
                                                {
                                                    watch.inventory > 10 &&
                                                    <span className="text-primary fw-bold">Available</span>
                                                }
                                                {
                                                    watch.inventory > 0 && watch.inventory <= 10 &&
                                                    <span className="text-warning fw-bold">Running out</span>
                                                }
                                                {
                                                    watch.inventory === 0 &&
                                                    <span className="text-danger fw-bold">Out of stock</span>
                                                }
                                            </p>
                                        </div>
                                    </div>
                                </div>
                            )
                        })
                    }
                </div>
            </div>
        </>
    );
};
