import { useCounter } from "../hooks/useCounter";

export const CounterConHook = () => {
    const {value, increase} = useCounter();

    return (
        <>
            <h3>Contador con hook: <small>{value}</small></h3>
            <button className="btn btn-primary me-2" onClick={() => increase(1)}>+1</button>
            <button className="btn btn-primary" onClick={() => increase(-1)}>-1</button>
        </>
    )
}