/* eslint-disable react/prop-types */
import { useState } from 'react'

import { Button } from '../Button/Button'

import { editTaskRequest, removeTaskRequest } from '../../utils'

import s from './style.module.css'

export const Task = ({ id, title, setTodoLists }) => {
	const [isNotAvailable, setIsNotAvailable] = useState(false)
	const [_title, setTitle] = useState(title)

	const handleClickEditTask = () => {
		const editTitle = prompt('Введите свои изменения:', _title)

		if (editTitle?.trim() && _title !== editTitle) {
			editTaskRequest(id, editTitle, setTitle, setIsNotAvailable)
		}
	}

	const handleClickRemoveTask = () => {
		const textTask = _title.length < 50 ? _title : _title.substring(0, 50) + '...'

		if (confirm(`Вы уверены, что хотите удалить задачу - "${textTask}" ?`)) {
			removeTaskRequest(id, setIsNotAvailable, setTodoLists)
		}
	}

	return (
		<div className={s.task + ' ' + (isNotAvailable ? s.not_available : '')}>
			<span className={s.text}>{_title}</span>

			<div className={s.section_button}>
				<Button
					type={'edit'}
					onClick={handleClickEditTask}
					disabled={isNotAvailable}
				/>
				<Button
					type={'remove'}
					onClick={handleClickRemoveTask}
					disabled={isNotAvailable}
				/>
			</div>
		</div>
	)
}
