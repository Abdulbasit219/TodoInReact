import React, { useEffect, useState } from 'react'
import { BsPlus } from 'react-icons/bs'
import { HiPencilAlt } from 'react-icons/hi'


const Addtodo = ({ addTodoItem, editTitle, id, items, setItems, editIcons, setEditIcons }) =>{
    
    const [newtask, setNewtask] = useState( '' )
    const onchange = (e) => {
        setNewtask(e.target.value);
    }

    //AddTodo Function
    const addTodo = () => {
        addTodoItem(newtask)
        setNewtask('')
    }

    // editTodo Function
    const editTodo = () => {
        if(!newtask){
           alert('Please Add a task')
           setEditIcons(false)
           return
        }
        setItems(items.map(item => {
            if(item.id === id){
                return {...item, title: newtask}
            }
            return item;
        }))
        setEditIcons(false)
        setNewtask('')
    }

    //set the title when click on Todolist components
    useEffect(() => {
        setNewtask(editTitle)
    },[editTitle])

    return (
        <div className='w-full'>
                <div className='w-[80%] md:w-[70%] lg:w-[60%] mx-auto mt-10 bg-sky-300 p-4 rounded-md flex'>
             
                    <input type="text" className='w-full outline-none rounded-md h-[30px]' value={newtask} placeholder='  Add Text Here...' onChange={onchange} />
             
                    {/* If else condition when then edit button click icon will be change  */}
                    {
                    editIcons ? <button className='ml-2 text-3xl text-white bg-black rounded-md px-3 font-bold ' onClick={editTodo}><HiPencilAlt/></button>
                    : <button className='ml-2 text-3xl text-white bg-black rounded-md px-1 font-bold '  onClick={addTodo}><BsPlus/></button>
                    }

                </div>
        </div>
    )
}

export default Addtodo