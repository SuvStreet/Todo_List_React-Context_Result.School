import { useState } from 'react'

import { Create, Loader, List } from './components'

import { useGetTodoList } from './hooks/useGetTodoList'

import { AppContextProvider } from './context/appContextProvider'

function App() {
	const [isLoading, setIsLoading] = useState(true)

	const { todoLists, setTodoLists } = useGetTodoList(setIsLoading)

	return (
		<div className='container'>
			<Create />

			<AppContextProvider todoListValue={{ todoLists, setTodoLists }}>
				{isLoading ? <Loader /> : <List />}
			</AppContextProvider>
		</div>
	)
}

export default App
