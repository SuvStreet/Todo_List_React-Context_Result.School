/* eslint-disable react/prop-types */
import { useState } from 'react'

import { Button } from '../Button/Button'

import { useDispatch, useSelector } from 'react-redux'
import { editTask, removeTask, SORT_LIST } from '../../redux/actions'
import { selectIsSort } from '../../redux/selectors'

import s from './style.module.css'

export const Task = ({ id, title }) => {
	const dispatch = useDispatch()
	const isSort = useSelector(selectIsSort)

	const [isNotAvailable, setIsNotAvailable] = useState(false)

	const handleClickEditTask = () => {
		const editTitle = prompt('Введите свои изменения:', title)

		if (editTitle?.trim() && title !== editTitle) {
			setIsNotAvailable(true)
			dispatch(editTask(id, editTitle))
				.catch((error) => console.error(error))
				.finally(() => setIsNotAvailable(false))
				.then(() => {
					if (isSort) dispatch(SORT_LIST)
				})
		}
	}

	const handleClickRemoveTask = () => {
		const textTask = title.length < 50 ? title : title.substring(0, 50) + '...'

		if (confirm(`Вы уверены, что хотите удалить задачу - "${textTask}" ?`)) {
			setIsNotAvailable(true)
			dispatch(removeTask(id)).catch((error) => console.error(error)).then(() => {
				setIsNotAvailable(false)
				if(isSort) dispatch(SORT_LIST)
			})
		}
	}

	return (
		<div className={s.task + ' ' + (isNotAvailable ? s.not_available : '')}>
			<span className={s.text}>{title}</span>

			<div className={s.section_button}>
				<Button type={'edit'} onClick={handleClickEditTask} disabled={isNotAvailable} />
				<Button
					type={'remove'}
					onClick={handleClickRemoveTask}
					disabled={isNotAvailable}
				/>
			</div>
		</div>
	)
}
