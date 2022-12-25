import Todoitem from "./Todoitem"


function Todolist() {
    return (
      <>
        <h2>My Todlist</h2>
        <Todoitem name="Car wash" status={true} />
        <Todoitem name="Dog walking" status={false} />
        <Todoitem name="Go to library" status={false} />
        <Todoitem name="Fishing" status={true} />
      </>
    );
}

export default Todolist