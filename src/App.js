import logo from './logo.svg';
import './App.css';
import { useState } from 'react';

var count = 0
function App() {
  
  const [editingFlag, setEditingFlag]=useState(-1)
  const [todoList, setTodoList] = useState([
    {
      id: count++,
      todo:"need to complete homwork",
      completed: true
    },
    {
      id: count++,
      todo:"need to buy groceries",
      completed: false
    },
    {
      id: count++,
      todo:"have to fix vehcile",
      completed: false
    },
    {
      id: count++,
      todo:"Complete project",
      completed: false
    }
  ])

  const addTodo = () =>{
    // console.log("add todo");
    // console.log("text reded:",document.getElementById("input").value);
    // console.log("todoList",todoList);
    // setTodoList(todoList)
    // console.log("todoList",todoList);

    const text=document.getElementById("input").value
    const todoObject = {
      id: count++,
      todo: text,
      completed: false
      
    }
    setTodoList([...todoList, todoObject])
  }
  
  const deleteTodo = (id) =>{
    console.log("deleteTodo:",id)
    var tempTodoList = todoList.filter(iterator =>{
         return id != iterator.id 
      // if(id == iterator.id)
      //   {
      //     return false
      //   }
      //   else{
      //     return  true
      //   }
    })
    setTodoList([...tempTodoList])
  }
  const completeTodo = (id) =>{
    console.log("completeTodo:",id);
    var tempTodoList = todoList.map(iterator =>
      {
        if(id == iterator.id)
        {
             iterator.completed = !iterator.completed
             return iterator
        }
        else{
          return iterator
        }
      })
      setTodoList([...tempTodoList])
    
  }
  const editTodo = (id) =>{
    console.log("edittodo",id)
    setEditingFlag(id)
  }
  const saveEditedTodo = () =>{
    console.log("saveTodo");
    const updatedTodoText = document.getElementById("editingTodo").value
    console.log("updatedTodoText:", updatedTodoText);
    var tempTodoList = todoList.map(iterator => 
      {
        if(editingFlag == iterator.id)
          {
            iterator.todo = updatedTodoText
            return iterator
          }
          else
          {
            return iterator
          }
      })
      setTodoList(tempTodoList)
      setEditingFlag(-1)
  }

  return (
    <div>
     <h1>To-Do Application</h1>
     <h4>(by Preety Arya)</h4>
     <input type="text"  id="input" placeholder="Enter to-do here..."/>
     <button onClick={addTodo}>Add to-do</button>
      
      <div>
         <ul>
          {
            todoList.map(iterator=>{
              return <li key={iterator.id}>
              
                { 
                  iterator.completed == true ? 
                  <><input type="checkbox" onChange={()=>completeTodo(iterator.id)} checked/>
                    <s>{iterator.todo}</s>
                  </>:

                  <>
                    { editingFlag === iterator.id ?
                     <>
                        <input type="checkbox" onChange={()=>completeTodo(iterator.id)}/>
                        <input type="text" defaultValue={iterator.todo} id="editingTodo"/>
                        <button onClick={()=>deleteTodo(iterator.id)}>Delete</button>
                        <button onClick={saveEditedTodo}>save</button>
                      </> :
                      <>
                        <input type="checkbox" onChange={()=>completeTodo(iterator.id)}/>
                        {iterator.todo}  
                        <button onClick={()=>deleteTodo(iterator.id)}>Delete</button>
                        <button onClick={()=>editTodo(iterator.id)}>Edit</button>
                      </>
                    } 
                  </>
                }
                
               
                </li>
            })
          }
         </ul>
      </div>
    </div>
  );
}

export default App;
