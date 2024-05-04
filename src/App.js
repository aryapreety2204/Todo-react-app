// import logo from './logo.svg';
import './App.css';
import { useState } from 'react';

var count = 0
const INCOMPLETED = "INCOMPLETED"
const COMPLETED="COMPLETED"
const ALL ="ALL"
var countOfTodos = 0

function App() {
  
  const [editingFlag, setEditingFlag]=useState(-1)
  const [filter,setFilter] = useState(COMPLETED)
  const [todoList, setTodoList] = useState([
    {
      id: count++,
      todo:"need to complete Home",
      completed: true
    },
    {
      id: count++,
      todo:"need to buy groceries",
      completed: true
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
  const filterTodo = (action) =>
    {
      console.log("filterTodo",action);
      switch (action) 
      {
        case INCOMPLETED:
          setFilter(INCOMPLETED)
          break;
        case COMPLETED:
          setFilter(COMPLETED)
          break;
        case ALL:
          setFilter(ALL)
          break;
        default:
      }
    }
    // const myStyle={
    //   backgroundColor: "#E4C2FF",
    //   color: "red"
    // style={myStyle} // passing in div this line
    // }

    return ( 
    <div>
     <h1 className='heading'>Todo Application</h1>
     <h4 className='sub-heading'>(by Preety Arya)</h4>
     
      <div className='incomplete'>
        <label onClick={()=> filterTodo(INCOMPLETED)}>Incomplete &nbsp;|</label> &nbsp;
        <label onClick={()=> filterTodo(COMPLETED)}>complete &nbsp; |</label> &nbsp;
        <label onClick={()=>filterTodo(ALL)}>All</label>
      </div>

      <input type="text"  id="input" placeholder="Enter to-do here..."/>
      <button onClick={addTodo}>Add to-do</button>
      
      <div>
         <ul className='Liststyle'>
          {
            todoList.map(iterator =>
            {
              if(todoList[0].id === iterator.id)
              countOfTodos = 0

              switch(filter)
              {
                case INCOMPLETED:
                {
                  if (!iterator.completed)
                  {
                     countOfTodos +=1
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
                    break;

                  }

                }
                case COMPLETED:
                {
                  if(iterator.completed){
                    countOfTodos +=1
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
                    break;
                  }
                }
               case ALL:
               {
                countOfTodos +=1
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
                    break;
               }

              default:
            }
            })
          }
          </ul>
       </div>
          <div>
            count: {countOfTodos}
          </div>
    </div>

);
}

export default App;
