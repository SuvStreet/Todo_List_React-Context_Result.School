export const removeTaskRequest = (id, setIsNotAvailable, setTodoLists) => {
	setIsNotAvailable(true)

	fetch(`http://localhost:5000/todos/${id}`, {
		method: 'DELETE',
	}).then(() => {
		setTodoLists((prevState) => prevState.filter((todoList) => todoList.id !== id))
	}).catch(() => {
		throw new Error('При удалении задачи произошла ошибка')
	}).finally(() => {
		setIsNotAvailable(false)
	})
}