// import {useState} from 'react'

// function CrudToDo() {
//     const[todoList,setTodoList] =useState([]);
//     // initially this value is empty array
//     const[newTask, setNewTask]=useState(" ");
//     // we need to take user input and store, it will be a string

//     const handleChange = (event) => {
// // by using event we can grab value of input
//     setNewTask(event.target.value);
//     };

//     // when user clicks on button we call addtask func
//     const addTask =() =>{
//         // spread operator
//      setTodoList([...todoList, newTask]);
//      };

//      //delete task now
//      const deleteTask = (taskName) => {
//         // how we can delete task
//         // we need to use filter method
//         // filter() doesnt change the original array, it creates a new array filled with elements
//      const arr =
//         setTodoList()
//      };

//   return (
//     <div>
//         <h3>React CRUD TODOLIST</h3>
//         <input onChange={handleChange}/>
//         {/* when user click on button it will add todolist */}
//         <button onClick={addTask}> Add Task</button>
//         {/* {newTask} it will show text user will enter */}
//         {todoList.map((task) => {
//             return (
//                 <div>
//                   <h2>{task}</h2> 
//                   {/* to delete task */}
//                   <button onClick={() => deleteTask(task)}> X </button>  
//                 </div>
//             );
//         })}
//     </div>
//   )
// }

// export default CrudToDo;