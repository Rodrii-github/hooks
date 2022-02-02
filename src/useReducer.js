import { useReducer,useState } from "react";

// const state = { contador: 0 }
// action = { type: " ", payload: any }

const inicial = { contador: 0 };

const reducer = (state, action) => {
  switch (action.type) {
    case "INCREMENTAR":
      return { contador: state.contador + 1 };
    case "DECREMENTAR":
      return { contador: state.contador - 1 };
    case "SET":
      return { contador: action.payload };
    default:
      return state;
  }
};

const App = () => {
  const [state, dispatch] = useReducer(reducer, inicial);
  const [valor, setValor] = useState(0);
  return (
    <div>
      contador: {state.contador}
      <input value={valor} onChange={e => setValor(e.target.value)} />
      <button onClick={() => dispatch({ type: "INCREMENTAR" })}>
        Incrementar
      </button>
      <button onClick={() => dispatch({ type: "DECREMENTAR" })}>
        Decrementar
      </button>
      <button onClick={() => dispatch({ type: "SET", payload: valor })}>
        Set
      </button>
    </div>
  );
};

export default App;
