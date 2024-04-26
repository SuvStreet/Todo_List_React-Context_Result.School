export const removeTaskRequest = (id) =>
	fetch(`http://localhost:5000/todos/${id}`, {
		method: 'DELETE',
	}).then((response) => {
		if (!response.ok) {
			throw new Error('При удалении задачи произошла ошибка')
		}
	})
