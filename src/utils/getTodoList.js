export const getTodoList = (setIsLoading, setTodoLists, setResultTextValue) => {
	setIsLoading(true)

	fetch('http://localhost:5000/todos')
		.then((response) => response.json())
		.then((data) => {
			setTodoLists(data)

			if (data.length === 0) {
				setResultTextValue('На сегодня дел нет, может добавим?')
			}
		})
		.finally(() => setIsLoading(false))
}
