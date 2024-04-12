import { useContext } from 'react'

import { Button } from '../Button/Button'

import { TodoContext } from '../../context/todoContext'
import { useEditTask, useRemoveTask } from '../../hooks'

import s from './style.module.css'

export const Task = () => {
	const { todoLists, setTodoLists } = useContext(TodoContext)

	const { handleClickEditTask, isEditRequest } = useEditTask(todoLists, setTodoLists)
	const { handleClickRemoveTask, isRemoveRequest } = useRemoveTask(
		todoLists,
		setTodoLists,
	)

	const disabled = (id) => {
		return (
			(isEditRequest.isEdit && id === isEditRequest.id) ||
			(isRemoveRequest.isRemove && id === isRemoveRequest.id)
		)
	}

	return todoLists.map(({ title, id }) => (
		<div key={id} className={s.task + ' ' + (disabled(id) && s.activeLoading)} id={id}>
			<span className={s.text}>{title}</span>

			<div className={s.section_button}>
				<Button type={'edit'} onClick={handleClickEditTask} />
				<Button type={'remove'} onClick={handleClickRemoveTask} />
			</div>
		</div>
	))
}
