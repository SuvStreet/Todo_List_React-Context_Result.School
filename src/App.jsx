import { useState } from 'react'

import { Create, Loader, List } from './components'

import { useGetTodoList } from './hooks/useGetTodoList'

import { TodoContext } from './context'

function App() {
	const [isLoading, setIsLoading] = useState(true)

	const { todoLists, setTodoLists } = useGetTodoList(setIsLoading)

	return (
		<div className='container'>
			<Create />

			<TodoContext.Provider value={{ todoLists, setTodoLists }}>
				{isLoading ? <Loader /> : <List />}
			</TodoContext.Provider>
		</div>
	)
}

export default App
