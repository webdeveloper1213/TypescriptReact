import React,{useState} from 'react'

const Todo = () => {
    const [todo , setTodo] = useState("");
    const [todoList , setTodoList] = useState<string[]>([]);
    const [remove , setRemove] = useState(false);

    const changeHandler = (e:React.ChangeEvent<HTMLInputElement>) => {
        console.log(e.target.value);
        setTodo(e.target.value);
        
    }
    const addHandler = () => {
    setTodoList([...todoList , todo]);
    setTodo("");
    }
    const removeHandler = (index:any) => {
        console.log("Remove button clicked")
      const filteredList = todoList.filter((todoIndex) => todoIndex !== index);
     const ans = setTodoList(filteredList);
     console.log(ans,"filtered List");
    }

  return (
    <>
    <div>Todo</div>
    <div>
    <input 
    type="text"
    value={todo}
    onChange = {changeHandler}
    />
    <button onClick={addHandler}>Add</button>
<ul>
{todoList.map((item,index) => (
    <>
    <div style={{display:'flex',gap:'0.5rem'}} >
    <li key={index}>{item}</li>
        <button onClick={() =>removeHandler(item)}>Remove</button>
    </div>
       
        </>
    ))}
</ul>
  </div>
    </>
    
  )
}

export default Todo