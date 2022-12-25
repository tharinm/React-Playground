function Todoitem({ name , status})
{
    return (
        <div>
            {status === true && <div>{name} -complete</div>}
            {!status === true && <div>{name} -pending</div>}
        </div>
    
    );

}

export default Todoitem