import { useRef } from "react";

const App = () => {
  const ref = useRef();
  const inputRef = useRef();
  const click = () => {
    ref.current.innerHTML = "Hello CityHubs!";
  };

  const focus = () => {
    inputRef.current.focus();
  };

  return (
    <div>
      <input ref={inputRef} />
      <button onClick={focus}>Focus</button>
      <div onClick={click} ref={ref}>
        Hello World
      </div>
    </div>
  );
};

export default App;
