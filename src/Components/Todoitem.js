function Todoitem({ name , status})
{
    return (
        <div>
            {name} - {status === true ? "Completed" : "Pending"}
        </div>
    )
}

export default Todoitem