import React, { useState } from 'react'
import { useTodo } from '../contexts';

function TodoForm() {
    const [todo, setTodo] = useState("")
    const {addTodo} = useTodo()

    const add = (e) => {
        e.preventDefault()

        if(!todo) return

        // addTodo({id: Date.now(), todo: todo, completed: false}) iss tarah se bhi likh skte he ya neeche wali tarah se bhi likh skte he
        //date isliye nhi likha kyuki humne addTodo function ke andar hi id generate kar diya he and todo akela isliye likha kyuki humko pta he ki agar key and value same he to hum sirf ek bar likh skte he
        //yha hume id set isliye nhi ki kyuki vo hum phle hi app.jsx me kar chuke he
        addTodo({todo, completed: false})
        setTodo("")
    }

    return (
        <form onSubmit={add} className="flex">
            <input
                type="text"
                placeholder="Write Todo..."
                className="w-full border border-black/10 rounded-l-lg px-3 outline-none duration-150 bg-white/20 py-1.5"
                value={todo}
                onChange={(e) => setTodo(e.target.value)}
            />
            <button type="submit" className="rounded-r-lg px-3 py-1 bg-green-600 text-white shrink-0">
                Add
            </button>
        </form>
    );
}

export default TodoForm;

