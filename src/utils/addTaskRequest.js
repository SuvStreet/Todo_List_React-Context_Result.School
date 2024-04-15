export const addTaskRequest = (task, setTodoLists, setIsNotAvailable) => {
	setIsNotAvailable(true)

	fetch('http://localhost:5000/todos', {
		method: 'POST',
		headers: {
			'Content-Type': 'application/json',
		},
		body: JSON.stringify({ title: task }),
	})
		.then((response) => {
      return response.json()
    }).then((data) => {
      setTodoLists(prevState => [...prevState, data])
    })
		.catch(() => {
			throw new Error('При добавлении задачи произошла ошибка')
		})
		.finally(() => {
			setIsNotAvailable(false)
		})
}
