import React,{useState} from 'react'

function TodoForm ({addTodo}) {
    const [inputText , setInputText] = useState('');
    const handleInputChange = (e) => {
        setInputText(e.target.value)
    };
    const handleAddTodo = () => {
        if (inputText.trim() !== '') {
            addTodo(inputText);
            setInputText('');
        }
    }
    const handleKeyPress = (e) => {
        if (e.key === 'Enter') {
            handleAddTodo();
        }
    }

    return (
        <div > 
            <input
            text = "text"
            placeholder='Add Item'
            value={inputText}
            onChange={handleInputChange}
            onKeyDown={handleKeyPress}
            className="border p-2 w-64 mr-6 text-lg"
            />
            <button className="font-bold text-3xl text-gray-900" onClick={handleAddTodo}>Add Item</button>
        </div>
    )
}



export default TodoForm;