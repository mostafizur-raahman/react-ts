import React from "react";

type TCounter = {
    counter: number;
    setCounter: React.Dispatch<React.SetStateAction<number>>;
}
const UseStateExample = ({ counter, setCounter }: TCounter) => {



    return (
        <div>
            <h1 className="text-4xl">Counter : {counter}</h1>
            <div className="">
                <button onClick={() => setCounter(counter + 1)} className="p-10">Incre</button>
                <button onClick={() => setCounter(counter - 1)} className="p-10">Decre</button>
                <button onClick={() => setCounter(0)} className="p-10">Reset</button>
            </div>
        </div>
    );
};

export default UseStateExample;