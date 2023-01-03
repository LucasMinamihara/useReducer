import React, { useReducer } from "react";
import "./App.css";

const funcao = (state, acao) => {
  switch (acao.type) {
    case "incrementar":
      return state + 1;
    case "decrementar":
      return state - 1;
    default:
      return state;
  }
};

function App() {
  const [valor, dispatch] = useReducer(funcao, 0);
  return (
    <>
      <button onClick={(e) => dispatch({ type: "incrementar" })}>
        Incrementar
      </button>
      <button onClick={(e) => dispatch({ type: "decrementar" })}>
        Decrementar
      </button>
      <span>{valor}</span>
    </>
  );
}

export default App;
