
import { useState } from 'react';
import './App.css'
import UseStateExample from './pages/UseStateExample'
import FromExample from './pages/FromExample';
import UseReducerExamle from './pages/UseReducerExamle';
function App() {
  const [counter, setCounter] = useState(0);
  return (
    <>
      {/* <UseStateExample counter={counter} setCounter={setCounter} />
      <FromExample /> */}
      <UseReducerExamle />
    </>
  )
}
export default App
