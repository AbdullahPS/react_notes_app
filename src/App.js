import "./App.css";
import "./components/TodoList/index";
import AddToDoForm from "./components/AddTodoForm/index";

function App() {
  return (
    <div className='App'>
      <main>
        <AddToDoForm />
      </main>
    </div>
  );
}

export default App;
