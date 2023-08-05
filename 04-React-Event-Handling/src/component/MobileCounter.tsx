import {useState} from "react";

interface IMobile {
    brand: string,
    price: number,
    color: string
}

export const MobileCounter: React.FC = () => {
    const [mobile, setMobile] = useState<IMobile>(
        {
            brand: "Samsung",
            price: 2400,
            color: "White"
        }
    );
    const clickIncrePrice = (): void => {
        setMobile({
            ...mobile,
            price: 45000,
            brand: "Apple"
        })
    }
    const clickDecrPrice = (): void => {
        setMobile({
            ...mobile,
            price: 4000,
            brand: "Nokia",
            color: "Black"
        })
    }
    return (
        <>
            <div className="container mt-3">
                <div className="row">
                    <div className="col-sm-3">
                        <div className="card">
                            <div className="card-body">
                                <pre>{JSON.stringify(mobile)}</pre>
                                <p className="display-2"></p>
                                <button onClick={clickIncrePrice} className="btn btn-primary me-2">Increment</button>
                                <button onClick={clickDecrPrice} className="btn btn-danger ">Decrement</button>
                            </div>
                        </div>
                    </div>

                </div>
            </div>
        </>
    )
}
