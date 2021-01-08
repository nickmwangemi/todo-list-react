import { useState } from 'react'
import './App.css'

function App() {
	const [todos, setTodos] = useState([
		{ text: 'Learn about React' },
		{ text: 'Meet friend for lunch' },
		{ text: 'Build really cool todo app' },
	])

	return <div></div>
}

export default App
