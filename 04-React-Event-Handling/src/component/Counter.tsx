import React, {useState} from "react";

export const Counter: React.FC = () => {

    const [count, setCount] = useState<number>(0);

    const incr = (): void => {
        setCount(count + 1);
    }
    const decr = (): void => {
        setCount(count - 1);
    }

    const clickIncrBy = (value: number): void => {
        setCount(count + value);
    }
    const clickDecrBy = (value: number): void => {
        setCount(count - value);
    }
    return (<>
        <div className="container mt-3">
            <div className="row">
                <div className="col-sm-3">
                    <div className="card">
                        <div className="card-body">
                            <p className="display-2">{count}</p>
                            <button onClick={incr} className="btn btn-primary me-2">Increment</button>
                            <button onClick={decr} className="btn btn-danger">Decrement</button>
                            <br/><br/>
                            <button onClick={() => clickIncrBy(5)} className="btn btn-primary me-2">Increment 5</button>
                            <button onClick={() => clickDecrBy(5)} className="btn btn-danger">Decrement 5</button>
                        </div>
                    </div>
                </div>
            </div>

        </div>
    </>)
}
