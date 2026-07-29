
import { useState } from "react";
function App() {
  const [count, setCount] = useState(0);
  const technologies = ["HTML", "CSS", "React"];

  return (
    <>
      <h1>Contador: {count}</h1>
      <ul>
        {technologies.map((tech) => (
          <li key={tech}>{tech}</li>
        ))}
      </ul>
      <button onClick={() => setCount(count + 1)}>
        Incrementar
      </button>
      {count >= 5 && <p>Has llegado a 5</p>}
    </>
  );
}
export default App; 
