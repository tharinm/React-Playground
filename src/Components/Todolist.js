import Todoitem from "./Todoitem"


const todos = [
  {
    names: "Go Shopping",
    status: false,
  },
  {
    names: "Driving",
    status: false,
  },
  {
    names: "Washing",
    status: true,
  },
  {
    names: "Run",
    status: true,
  },
]; 

function Todolist() {
    return (
      <div>
        <h2>My Todlist</h2>
        {todos.map((todo, index) => {
          return <Todoitem name={todo.names} key={index} status={todo.status} />;
        })}
      </div>
    );
}

export default Todolist