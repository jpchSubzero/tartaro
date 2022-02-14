import { BasicTypes } from "./typescript/BasicTypes";
import { Functions } from "./typescript/Functions";
import { LiteralObjects } from "./typescript/LiteralObjects";

const App = () => {
  return (
    <div className="mt-2">
      <h1>Introducción a TS - React</h1>

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