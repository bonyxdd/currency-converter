import React from "react";
import logo from "./logo.svg";
import "./App.css";
import CurrencyForm from "./components/CurrencyForm";
import TableForm from "./components/TableForm";

function App() {
  return (
    <div className="wrapper">
      <CurrencyForm />
      <TableForm />
    </div>
  );
}

export default App;
