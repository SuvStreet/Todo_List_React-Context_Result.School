export const editTaskRequest = (id, editTitle, setTitle, setIsNotAvailable) => {
	setIsNotAvailable(true)

	fetch(`http://localhost:5000/todos/${id}`, {
		method: 'PUT',
		headers: {
			'Content-Type': 'application/json',
		},
		body: JSON.stringify({ title: editTitle }),
	})
		.then(() => {
			setTitle(editTitle)
		})
		.catch(() => {
			throw new Error('При редактировании задачи произошла ошибка')
		})
		.finally(() => {
			setIsNotAvailable(false)
		})
}
