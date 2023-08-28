import React, { useState } from 'react'
import TodoItem from '../components/Todoitem'
import AddTodo from '../components/Addtodo'
import './Todo.css'

const Todolist = () => {
    // set the item of todo 
    const [items, setItems] = useState([])

    //use for edit title
    const [Title, setTitle] = useState('')    
    const [editId, seteditId] = useState(null)
    const [editIcons, setEditIcons] = useState(false)

    //Add Todo into list
    const addTodoItem = (title) => {
        if (!title) {
            return alert('Please Enter a title')
        }
        const newTask = { id: items.length + 1, title };
        const newItem = [...items, newTask];
        setItems(newItem);
    }

    //delete todo from list
    const deleteTodoItem = (id) => {
        const findIndex = items.findIndex((item) => item.id === id);
        items.splice(findIndex, 1);
        setItems([...items]);
    }

    // Set the editable state of the selected item
    const editTodoItem = (id) => {
        setEditIcons(true)
        seteditId(id)
        const item = items.find(item => item.id === id);
        setTitle(item.title)
    }

    return (
        <div>
            <AddTodo addTodoItem={addTodoItem}
                editTitle={Title}  
                id={editId} 
                items={items} 
                setItems={setItems} 
                setEditIcons={setEditIcons}
                editIcons={editIcons}    
            />

            <div className='mt-4 bg-sky-300 w-[80%] md:w-[70%] lg:w-[60%] mx-auto rounded-md p-2 '>
                <h1 className='text-2xl font-bold'>Todo's</h1>
                {items.map((item) => (
                    <TodoItem
                        key={item.id}
                        title={item.title}
                        
                        deleteItem={() => {
                            deleteTodoItem(item.id)
                        }}
                        
                        edit = {() => {
                            editTodoItem(item.id)
                        }}   
                    />
                ))}
            </div>

        </div>
    )
}

export default Todolist