import React from 'react'
import {AiTwotoneDelete} from 'react-icons/ai'
import { HiPencilAlt } from 'react-icons/hi'

const Todoitem = ({ title, deleteItem, edit }) => {

  return (
    <div className='flex justify-center w-full'>
        <div className='w-full flex justify-between bg-white p-2 rounded-md mt-2'>
          
          <p className='text-xl'>{title}</p>
          
          {/* // Delete and edit Icon */}
          <div className='flex items-start'>
          <button className='text-2xl' onClick={edit}><HiPencilAlt/></button>
          <button className='text-2xl ml-2' onClick={deleteItem}><AiTwotoneDelete/></button>
          </div>

        </div>
    </div>

  )
}

export default Todoitem