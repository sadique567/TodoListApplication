import { TodoItem } from "./component/TodoItem";
import "./App.css";
import { Header } from "./component/header";
function App() {
  

  return (
    <div className="main-app">
      <Header/>
     <TodoItem/>
    </div>
  );
}

export default App;
