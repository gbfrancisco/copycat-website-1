import { useState } from 'react';

function App() {
  const [count, setCount] = useState(0);
  const test = {
    some: 'property',
  };
  return (
    <>
      <div>{test.some}</div>
      <button onClick={() => setCount((count) => count + 1)}>
        Counter: {count}
      </button>
    </>
  );
}

export default App;
