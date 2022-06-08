import { useState } from "react";
import logo from "./logo.svg";
import "./App.css";
import Principal from "./components/Principal";
import CategoryProvider from "./context/CategoryProvider";
import MealsProvider from "./context/MealsProvider";

function App() {
  const [count, setCount] = useState(0);

  return (
    <CategoryProvider>
      <MealsProvider>
        <Principal />
      </MealsProvider>
    </CategoryProvider>
  );
}

export default App;
