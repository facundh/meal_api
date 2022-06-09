
import "./App.css";
import Principal from "./components/Principal";
import CategoryProvider from "./context/CategoryProvider";
import MealsProvider from "./context/MealsProvider";

function App() {
 

  return (
    <CategoryProvider>
      <MealsProvider>
        <Principal />
      </MealsProvider>
    </CategoryProvider>
  );
}

export default App;
