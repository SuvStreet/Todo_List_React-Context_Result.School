export const addTaskRequest = (task) => {
	return fetch('http://localhost:5000/todos', {
		method: 'POST',
		headers: {
			'Content-Type': 'application/json',
		},
		body: JSON.stringify({ title: task }),
	}).then((response) => {
		if (response.ok) {
			return response.json()
		} else {
			throw new Error('При добавлении задачи произошла ошибка!')
		}
	})
}
