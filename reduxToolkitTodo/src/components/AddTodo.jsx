import { useEffect, useRef, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { addTodo, updateTodo } from '../features/todo/todoSlice'

function AddTodo() {

  const [input, setInput] = useState('')
  // const [editingId, setEditingId] = useState(null)
  const editingTodo = useSelector(state => state.editingTodo)
  const inputRef = useRef(null)
  const dispatch = useDispatch()

  //-----------------------------------------------------
  // if ((editingTodo?.id ?? null) !== editingId) {
  //     setEditingId(editingTodo?.id ?? null)
  //     setInput(editingTodo?.text ?? '')
  // }  //simplified version iss code ka niche he
//-----------------------------------------------------
  // const currentEditingId = editingTodo ? editingTodo.id : null

  // if (currentEditingId !== editingId) {
  //   setEditingId(currentEditingId)

  //   if (editingTodo) {
  //     setInput(editingTodo.text)
  //   } else {
  //     setInput('')
  //   }
  // }

  // useEffect(() => {
  //   if (editingTodo) {
  //     inputRef.current?.focus()
    
  //   }
  // }, [editingTodo])


   useEffect(() => {
    if (editingTodo) {
      inputRef.current?.focus()
      setInput(editingTodo?.text ?? '')
    }
  }, [editingTodo])

  const addTodoHandler = (e) => {
    e.preventDefault()

    const todoText = input.trim()

    if (!todoText) return

    if (editingTodo) {
      dispatch(updateTodo({ ...editingTodo, text: todoText }))
    } else {
      dispatch(addTodo(todoText))
    }

    setInput('')
  }

  return (
    <form onSubmit={addTodoHandler} className="space-x-3 mt-12">
      <input
        ref={inputRef}
        type="text"
        className="bg-gray-800 rounded border border-gray-700 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-900 text-base outline-none text-gray-100 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
        placeholder="Enter a Todo..."
        value={input}
        onChange={(e) => setInput(e.target.value)}
      />
      <button
        type="submit"
        className="text-white bg-indigo-500 border-0 py-2 px-6 focus:outline-none hover:bg-indigo-600 rounded text-lg"
      >
        {editingTodo ? 'Update Todo' : 'Add Todo'}
      </button>
    </form>
  )
}

export default AddTodo
