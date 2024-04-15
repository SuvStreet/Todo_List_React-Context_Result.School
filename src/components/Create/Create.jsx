import { useContext, useState } from 'react'

import { Button } from '../Button/Button'
import { Title, Search } from './components'

import { TodoContext } from '../../context/todoContext'

import { addTaskRequest } from '../../utils'

import s from './style.module.css'

export const Create = () => {
	const { todoLists, setTodoLists } = useContext(TodoContext)
	const [isNotAvailable, setIsNotAvailable] = useState(false)
	const [isSort, setIsSort] = useState(false)
	const [oldTodoLists, setOldTodoLists] = useState([])

	const sortToggle = () => setIsSort(PrevState => !PrevState)

	const handleClickAddTask = () => {
		const task = prompt('Введите задачу:')

		if (task?.trim()) {
			addTaskRequest(task, setTodoLists, setIsNotAvailable)
		}
	}

	const handleClickSort = () => {
		sortToggle()

		if(!isSort) {
			setOldTodoLists([...todoLists])
			setTodoLists([...todoLists].toSorted((a, b) => a.title.localeCompare(b.title)))
		} else {
			setTodoLists(oldTodoLists)
		}
	}

	return (
		<>
			<Title />
			<div className={s.change}>
				<Search />
				<Button type={'add'} onClick={handleClickAddTask} disabled={isNotAvailable} />

				<Button
					type={'sort'}
					onClick={handleClickSort}
					sort={isSort}
				/>
			</div>
		</>
	)
}
