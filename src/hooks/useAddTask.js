import { useState } from 'react'

export const useAddTask = (todoLists, setTodoLists) => {
	const [isAddRequest, setIsAddRequest] = useState(false)

	const handleClickAddTask = async () => {
		const task = prompt('Введите задачу:')

		if (task?.trim()) {
			setIsAddRequest(true)

			try {
				const request = await fetch('http://localhost:5000/todos', {
					method: 'POST',
					headers: {
						'Content-Type': 'application/json',
					},
					body: JSON.stringify({ title: task }),
				})

				if (!request.ok) {
					throw new Error('При добавлении задачи произошла ошибка')
				}

				const response = await request.json()

				setTodoLists([...todoLists, response])
			} catch (error) {
				console.error(error)
			}

			setIsAddRequest(false)
		}
	}

	return { handleClickAddTask, isAddRequest }
}
