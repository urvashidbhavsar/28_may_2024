import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { faPen, faTrash, faCheck } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { removeTodo, updateTodo } from '../Feature/todoSlice'

const Showtodo = () => {
    const todo = useSelector(state => state.todos.todos)
    const dispatch = useDispatch()
    const [editid, setEditid] = useState(null)
    const [edittext, setEditText] = useState("")

    const removeData = (id) => {
        dispatch(removeTodo(id))
    }

    const handleFetch = (id, text) => {
        setEditid(id)
        setEditText(text)
    }

    const handleUpdate = (id) => {
        dispatch(updateTodo({ id, updateText: edittext }))
        setEditid(null)
        setEditText("")
    }

    return (
        <>
            <div className="container">
                <table className='table'>
                    <thead className='bg-primary'>
                        <tr>
                            <th>Todo List Actions</th>
                            <th className='text-end'>Action</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            todo.map(items =>
                                <tr key={items.id}>
                                    <td>
                                        {
                                            editid === items.id ?
                                                <input type="text" className='form-control' value={edittext} onChange={(e) => setEditText(e.target.value)} />
                                                :
                                                items.text
                                        }
                                    </td>

                                    <td className='text-end'>
                                        {
                                            editid === items.id ?
                                                <button className='btn btn-primary mx-1' onClick={() => handleUpdate(items.id)}>
                                                    <FontAwesomeIcon icon={faCheck} />
                                                </button>
                                                :
                                                <div>
                                                    <button className='btn btn-primary mx-1' onClick={() => handleFetch(items.id, items.text)}>
                                                        <FontAwesomeIcon icon={faPen} />
                                                    </button>

                                                    <button className='btn btn-danger mx-1' onClick={() => removeData(items.id)}>
                                                        <FontAwesomeIcon icon={faTrash} />
                                                    </button>
                                                </div>
                                        }
                                    </td>
                                </tr>
                            )
                        }
                    </tbody>
                </table>
            </div>
        </>
    )
}

export default Showtodo
