export const editTaskRequest = (id, titleTask) => {
	return fetch(`http://localhost:5000/todos/${id}`, {
		method: 'PUT',
		headers: {
			'Content-Type': 'application/json',
		},
		body: JSON.stringify({ title: titleTask }),
	}).then((response) => {
		if (response.ok) {
			return response.json()
		} else {
			throw new Error('При редактировании задачи произошла ошибка')
		}
	})
}
