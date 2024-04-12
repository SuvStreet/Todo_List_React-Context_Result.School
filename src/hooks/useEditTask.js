import { useState } from 'react'

export const useEditTask = (todoLists, setTodoLists) => {
	const [isEditRequest, setIsEditRequest] = useState({ id: null, isEdit: false })

	const handleClickEditTask = async (event) => {
		if (!isEditRequest.isEdit) {
			const taskId = Number(event.target.closest('div[id]').id)
			const task = todoLists.find(({ id }) => id === taskId)

			const { title, id } = task

			const editTask = prompt('Введите свои изменения:', title)

			if (editTask?.trim() && title !== editTask) {
				setIsEditRequest({ id, isEdit: true })

				try {
					const request = await fetch(`http://localhost:5000/todos/${id}`, {
						method: 'PUT',
						headers: {
							'Content-Type': 'application/json',
						},
						body: JSON.stringify({ title: editTask }),
					})

					if (!request.ok) {
						throw new Error('При редактировании задачи произошла ошибка')
					}

					const response = await request.json()

					if (response !== null) {
						setTodoLists(
							todoLists.map((todoList) => {
								if (todoList.id === id) {
									return { ...todoList, title: editTask }
								}
								return todoList
							}),
						)
					}
				} catch (error) {
					console.error(error)
				}

				setIsEditRequest({ id, isEdit: false })
			}
		}
	}

	return { handleClickEditTask, isEditRequest }
}
