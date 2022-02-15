import { Counter } from "./components/Counter";
import { CounterConHook } from "./components/CounterConHook";
import { Forms } from "./components/Forms";
import { Login } from "./components/Login";
import { Users } from "./components/Users";
import { BasicTypes } from "./typescript/BasicTypes";
import { Functions } from "./typescript/Functions";
import { LiteralObjects } from "./typescript/LiteralObjects";

const App = () => {
  return (
    <div className="mt-2">
      <h1>Introducción a TS - React</h1>

      <hr />
      <Forms />
      <hr />
      <Users />
      <hr />
      <Login />
      <hr />
      <CounterConHook />
      <hr />
      <Counter />
      <hr />
      <Functions />
      <hr />
      <LiteralObjects />
      <hr />
      <BasicTypes />
    </div>
  )
}

export default App;