function Todoitem({ name , status})
{
    if (status === true) {
        return (
            <div>
                <div>
                     {name} - Completed
             
                </div>
            </div>
        );
    }
   
   
        return (
    <div>
        <div>
             {name} {status} - Pending
     
        </div>
            </div>
        )
        
}

export default Todoitem