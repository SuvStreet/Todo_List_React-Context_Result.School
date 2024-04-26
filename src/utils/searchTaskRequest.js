export const searchTaskRequest = (titleTask) => {
	return fetch(`http://localhost:5000/todos?q=${titleTask}`).then((response) => {
		if (response.ok) {
			return response.json()
		} else {
			throw new Error('При поиске задач произошла ошибка!')
		}
	})
}
