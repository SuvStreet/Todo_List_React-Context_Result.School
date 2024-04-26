import { useEffect } from 'react'

import { Create, Loader, List } from './components'

import { SET_IS_LOADING, getTodoList } from './redux/actions'
import { selectIsLoading } from './redux/selectors'

import { useDispatch, useSelector } from 'react-redux'

function App() {
	const dispatch = useDispatch()
	const isLoading = useSelector(selectIsLoading)

	useEffect(() => {
		dispatch(SET_IS_LOADING)

		dispatch(getTodoList())
			.catch((error) => {
				console.error(error)
			})
			.finally(() => dispatch(SET_IS_LOADING))
	}, [])

	return (
		<div className='container'>
			<Create />

			{isLoading ? <Loader /> : <List />}
		</div>
	)
}

export default App
