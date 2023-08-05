import {useState} from "react";
import {ProductService} from "../services/ProductService";
import {IProduct} from "./watches/models/IProduct";

export const ProductCart = () => {
    const [watches, setWatches] = useState<IProduct[]>(ProductService.getAllProducts());

    const clickIncQty = (productId: string): void => {

        const theProducts = watches.map((watch) => {
            if (watch.id === productId) {
                return {
                    ...watch,
                    qty: watch.qty + 1
                }
            }
            return watch;
        })
        setWatches(theProducts);

    }
    const clickDecrQty = (productId: string): void => {

        const theProducts = watches.map((watch) => {
            if (watch.id === productId) {
                return {
                    ...watch,
                    qty: watch.qty - 1 > 0 ? watch.qty - 1 : 1
                }
            }
            return watch;
        })
        setWatches(theProducts);

    }

    const calcGrandTotal = (): number => {
        let total: number = 0;
        for (let watch of watches) {
            total += (watch.price * watch.qty);

        }
        return total;
    }
    const clickDeleteProduct = (productId: string): void => {
        setWatches(watches.filter(watch => watch.id !== productId))
    }
    return (
        <>
            <div className="container mt-3">
                <div className="row">
                    <div className="col">
                        <p className="h3 text-primary">Watch Cart</p>
                        <p><span>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Assumenda at consectetur cupiditate debitis distinctio dolorem dolorum error est harum incidunt, iusto molestias nisi nobis numquam omnis perferendis quibusdam similique vel.</span>
                        </p>
                    </div>
                </div>
            </div>
            {
                watches.length > 0 ? <>
                    <div className="container">
                        <div className="row">
                            <div className="col">
                                <table className="table table-striped table-hover text-center shadow-lg">
                                    <thead className="bg-light text-light">
                                    <tr>
                                        <th>SNO</th>
                                        <th>Image</th>
                                        <th>Price</th>
                                        <th>Qty</th>
                                        <th>Total</th>
                                        <th>Action</th>
                                    </tr>
                                    </thead>
                                    <tbody>
                                    {
                                        watches.map((watch, index) => {
                                            return (
                                                <tr key={index}>
                                                    <td>{watch.id}</td>
                                                    <td>
                                                        <img src={watch.imageUrl} width={50} height={50}/>
                                                    </td>
                                                    <td>&#8377; {watch.price.toFixed(2)}</td>
                                                    <td>
                                                        <i className="bi bi-dash-square-fill me-2 text-primary"
                                                           onClick={() => clickDecrQty(watch.id)}></i>
                                                        {watch.qty}
                                                        <i className="bi bi-plus-square-fill ms-2 text-primary"
                                                           onClick={() => clickIncQty(watch.id)}></i>
                                                    </td>
                                                    <td>&#8377; {(watch.qty * watch.price).toFixed(2)}</td>
                                                    <td>
                                                        <button className="btn btn-danger"
                                                                onClick={() => clickDeleteProduct(watch.id)}>
                                                            <i className="bi bi-trash-fill"></i>
                                                        </button>
                                                    </td>
                                                </tr>
                                            )
                                        })
                                    }
                                    <tr>
                                        <td colSpan={3}></td>
                                        <td>Grand Total</td>
                                        <td>&#8377; {calcGrandTotal().toFixed(2)}</td>
                                    </tr>
                                    </tbody>
                                </table>
                            </div>
                        </div>
                    </div>
                </> : <>
                    <div className="container">
                        <div className="row">
                            <div className="col">
                                <h3 className="text-bg-danger">No Product Found...</h3>
                            </div>
                        </div>
                    </div>
                </>
            }

        </>
    )
}
