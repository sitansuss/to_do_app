import React,{useState} from "react";
import TodoItem from "./ToDoItem";
import TodoForm from "./TodoForm";



function TodoApp (){
    const [todoListItems , setTodoListItems] = useState([]);

    // function to add new todo list 

    const addTodo = (description) => {
        const newTodo = {description , completed:false}
        setTodoListItems([...todoListItems , newTodo])
    }

    // funtion to check completetion status

    const toggleTodo = (index) => {
        const updatedtodoListItems = [...todoListItems];
        updatedtodoListItems[index].completed = !updatedtodoListItems[index].completed;
        setTodoListItems(updatedtodoListItems)
    }

    // funtion to remove todo list

    const removeTodo = (index) => {
        const updatedtodoListItems = [...todoListItems]
        updatedtodoListItems.splice(index,1)
        setTodoListItems(updatedtodoListItems)
    }
    return (
        <div className="bg-blue-400 h-screen flex flex-col items-center  ">
            <h1 className="text-3xl mb-4 mt-2 text-gray-900 mr-32 font-bold">Todo App</h1>
            <TodoForm addTodo={addTodo}/>
            <ul>
                {todoListItems.map((todoListItems,index) => (
                    <TodoItem
                    key={index}
                    index={index}
                    todoListItems={todoListItems}
                    toggleTodo={toggleTodo}
                    removeTodo={removeTodo}
                    />
                ))}
            </ul>
        </div>
    )
}




export default TodoApp;