export const getTodoListRequest = () => {
	return fetch('http://localhost:5000/todos').then((response) => {
		if (response.ok) {
			return response.json()
		} else {
			throw new Error('При получении списка дел произошла ошибка!')
		}
	})
}
