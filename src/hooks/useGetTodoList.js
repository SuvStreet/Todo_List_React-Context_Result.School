import { useEffect, useState } from 'react'

export const useGetTodoList = (setIsLoading) => {
	const [todoLists, setTodoLists] = useState([])

	useEffect(() => {
		fetch('http://localhost:5000/todos')
			.then((response) => response.json())
			.then((data) => {
				console.log('data', data)
				setTodoLists(data)
			})
			.finally(() => setIsLoading(false))
	}, [])

	return { todoLists, setTodoLists }
}
