const TodoListIteam = (props) =>
{
            const iterator = props.iterator
            return <li key={iterator.id}>
                    
            { 
            iterator.completed == true ? 
            <><input type="checkbox" onChange={()=>props.completeTodo(iterator.id)} checked/>
                <s>{iterator.todo}</s>
            </>:

            <>
                {props.editingFlag === iterator.id ?
                <>
                    <input type="checkbox" onChange={()=>props.completeTodo(iterator.id)}/>
                    <input type="text" defaultValue={iterator.todo} id="editingTodo"/>
                    <button onClick={()=>props.deleteTodo(iterator.id)}>Delete</button>
                    <button onClick={props.saveEditedTodo}>save</button>
                </> :
                <>
                    <input type="checkbox" onChange={()=>props.completeTodo(iterator.id)}/>
                    {iterator.todo}  
                    <button onClick={()=>props.deleteTodo(iterator.id)}>Delete</button>
                    <button onClick={()=>props.editTodo(iterator.id)}>Edit</button>
                </>
                } 
            </>
            }


        </li>
            // return <li>listiteam</li>
}
    export default TodoListIteam ;