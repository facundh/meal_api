import { useState } from "react";
import logo from "./logo.svg";
import "./App.css";
import Principal from "./components/Principal";
import CategoryProvider from "./context/CategoryProvider";

function App() {
  const [count, setCount] = useState(0);

  return (
    <CategoryProvider>
      <Principal />
    </CategoryProvider>
  );
}

export default App;
