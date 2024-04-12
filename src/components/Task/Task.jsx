import { useContext } from 'react'

import { Button } from '../Button/Button'
import { TodoContext } from '../../context'
import { requestEditTask } from '../../utils'

import s from './style.module.css'

export const Task = () => {
	const { todoLists, setTodoLists } = useContext(TodoContext)

	const handleClickIdTask = (event) => {
		const taskId = Number(event.target.closest('div[id]').id)
		const task = todoLists.find(({ id }) => id === taskId)

		const { handleClickEditTask } = requestEditTask(task, todoLists, setTodoLists)

		return handleClickEditTask()
	}

	return todoLists.map(({ title, id }) => (
		<div key={id} className={s.task} id={id}>
			<span className={s.text}>{title}</span>

			<div className={s.section_button}>
				<Button type={'edit'} onClick={handleClickIdTask} />
				<Button type={'remove'} />
			</div>
		</div>
	))
}
