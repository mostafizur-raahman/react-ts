import { useReducer, ChangeEvent } from "react";

type TAction = {
    type: string,
    payload: string
}
const initialState = { name: "", email: "" };

const reducer = (currenrState: typeof initialState, action: TAction) => {
    switch (action.type) {
        case "addName":
            return { ...currenrState, name: action.payload }
        case "addEmail":
            return { ...currenrState, email: action.payload }
        default:
            return currenrState;
    }
}
const UseReducerExamle = () => {

    const [state, dispatch] = useReducer(reducer, initialState);

    const handleSubmit = (e: ChangeEvent<HTMLFormElement>) => {
        e.preventDefault();
        console.log(state);

    }
    return (
        <div>

            <form onSubmit={handleSubmit}>
                <input onChange={(e) => dispatch({ type: "addName", payload: e.target.value })} type="text" name='name' id='name' className='border-2' />
                <input onChange={(e) => dispatch({ type: "addEmail", payload: e.target.value })} type="text" name='email' id='email' className=' border-2' />
                <button type="submit">send</button>
            </form>

        </div>
    );
};

export default UseReducerExamle;