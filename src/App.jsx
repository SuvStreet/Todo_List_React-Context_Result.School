import { useEffect, useState } from 'react'

import { Create, Loader, List } from './components'

import { getTodoList } from './utils/getTodoList'

import { AppContextProvider } from './context/appContextProvider'

function App() {
	const [todoLists, setTodoLists] = useState([])
	const [isLoading, setIsLoading] = useState(true)
	const [resultTextValue, setResultTextValue] = useState('')

	useEffect(() => {
		getTodoList(setIsLoading, setTodoLists, setResultTextValue)
	}, [])

	return (
		<div className='container'>
			<AppContextProvider
				todoListValue={{ todoLists, setTodoLists }}
			>
				<Create setIsLoading={setIsLoading} setResultTextValue={setResultTextValue} />

				{isLoading ? <Loader /> : <List resultTextValue={resultTextValue} />}
			</AppContextProvider>
		</div>
	)
}

export default App
