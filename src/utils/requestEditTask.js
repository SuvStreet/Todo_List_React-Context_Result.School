export const requestEditTask = (task, todoLists, setTodoLists) => {
	const handleClickEditTask = async () => {
		const { title, id } = task

		console.log('task(handleClickEditTask)', todoLists)

		const editTask = prompt('Введите свои изменения:', title)

		if (editTask?.trim() && title !== editTask) {
			// setIsLoading(true)

			const request = await fetch(`http://localhost:5000/todos/${id}`, {
				method: 'PUT',
				headers: {
					'Content-Type': 'application/json',
				},
				body: JSON.stringify({ title: editTask }),
			})

			const response = await request.json()

			if(response !== null) {
				setTodoLists(
					todoLists.map((todoList) => {
						if (todoList.id === id) {
							return { ...todoList, title: editTask }
						}
						return todoList
					})
				)
				// setIsLoading(false)
			}
		}
	}

	return { handleClickEditTask }
}
