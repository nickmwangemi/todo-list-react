import { useState } from 'react'
import './App.css'
import Todo from './components/Todo'

function App() {
	const [todos, setTodos] = useState([
		{
			text: 'Learn about React',
			isCompleted: false,
		},
		{
			text: 'Meet friend for lunch',
			isCompleted: false,
		},
		{
			text: 'Build really cool todo app',
			isCompleted: false,
		},
	])

	const addTodo = (text) => {
		const newTodos = [...todos, { text }]
		setTodos(newTodos)
	}

	function TodoForm() {
		const [value, setValue] = useState('')

		const handleSubmit = (e) => {
			e.preventDefault()
			if (!value) return
			addTodo(value)
			setValue('')
		}
		return (
			<form onSubmit={handleSubmit}>
				<input
					type='text'
					className='input'
					value={value}
					onChange={(e) => setValue(e.target.value)}
				/>
			</form>
		)
	}

	const completeTodo = (index) => {
		const newTodos = [...todos]
		newTodos[index].isCompleted = true
		setTodos(newTodos)
	}
	return (
		<div className='app'>
			<div className='todo-list'>
				{todos.map((todo, index) => (
					<Todo
						key={index}
						index={index}
						todo={todo}
						completeTodo={completeTodo}
					/>
				))}
				<TodoForm addTodo={addTodo} />
			</div>
		</div>
	)
}

export default App
