import useCounter71 from "../components/useCounter71";

const CounterPage71 = () => {
    const { count, increment, decrement, reset } = useCounter71(0);

    return (
        <div>
            <h1>useCounter Hook Demo</h1>
            <h2>Counter: {count}</h2>

            <button onClick={increment}>+</button>
            <button onClick={decrement}>-</button>
            <button onClick={reset}>Reset</button>
        </div>
    );
};

export default CounterPage71;
