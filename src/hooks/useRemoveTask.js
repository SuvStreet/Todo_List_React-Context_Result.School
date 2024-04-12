import { useState } from 'react'

export const useRemoveTask = (todoLists, setTodoLists) => {
	const [isRemoveRequest, setIsRemoveRequest] = useState({ id: null, isRemove: false })

	const handleClickRemoveTask = async (event) => {
		if (!isRemoveRequest.isRemove) {
			const taskId = Number(event.target.closest('div[id]').id)
			const task = todoLists.find(({ id }) => id === taskId)

			const { title, id } = task

			const textTask = title.length < 50 ? title : title.substring(0, 50) + '...'

			if (confirm(`Вы уверены, что хотите удалить задачу - "${textTask}" ?`)) {
				setIsRemoveRequest({ id, isRemove: true })

				try {
					const request = await fetch(`http://localhost:5000/todos/${id}`, {
						method: 'DELETE',
					})

					if (!request.ok) {
						throw new Error('При удалении задачи произошла ошибка')
					}

					setTodoLists(todoLists.filter((todoList) => todoList.id !== id))
				} catch (error) {
					console.error(error)
				}

				setIsRemoveRequest({ id, isRemove: false })
			}
		}
	}

	return { handleClickRemoveTask, isRemoveRequest }
}
