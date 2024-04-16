/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable react/prop-types */
import { useContext, useEffect, useState } from 'react'

import { Button } from '../Button/Button'
import { Title, Search } from './components'

import { TodoContext } from '../../context/todoContext'

import { addTaskRequest, getTodoList } from '../../utils'

import { useDebounce } from '../../hooks'

import s from './style.module.css'

export const Create = ({ setIsLoading, setResultTextValue }) => {
	const { todoLists, setTodoLists } = useContext(TodoContext)

	const [value, setValue] = useState('')
	const [isNotAvailable, setIsNotAvailable] = useState(false)
	const [isSort, setIsSort] = useState(false)
	const [isSearch, setIsSearch] = useState(false)
	const [oldTodoLists, setOldTodoLists] = useState([])

	const debouncedSearchTerm = useDebounce(value, 700)

	const sortToggle = () => setIsSort((PrevState) => !PrevState)

	const handleClickAddTask = () => {
		const task = prompt('Введите задачу:')

		if (task?.trim()) {
			addTaskRequest(task, setTodoLists, setIsNotAvailable)
		}
	}

	const handleClickSort = () => {
		sortToggle()

		if (!isSort) {
			setOldTodoLists([...todoLists])
			setTodoLists([...todoLists].toSorted((a, b) => a.title.localeCompare(b.title)))
		} else {
			setTodoLists(oldTodoLists)
		}
	}

	useEffect(() => {
		if (debouncedSearchTerm && debouncedSearchTerm.trim() !== '') {
			setIsSearch(true)
			setIsLoading(true)
			setResultTextValue('')

			fetch(`http://localhost:5000/todos?q=${debouncedSearchTerm}`)
				.then((response) => response.json())
				.then((data) => {
					setTodoLists(data)
					if (data.length === 0) {
						setResultTextValue('Ничего не найдено =(')
					}
				})
				.catch(() => {
					throw new Error('Произошла ошибка при поиске')
				})
				.finally(() => setIsLoading(false))
		} else {
			if (isSearch) {
				setResultTextValue('')
				getTodoList(setIsLoading, setTodoLists, setResultTextValue)
				setIsSearch(false)
			}
		}
	}, [debouncedSearchTerm])

	const onSearch = (value) => {
		setValue(value)
	}

	return (
		<>
			<Title />
			<div className={s.change}>
				<Search onSearch={onSearch} />
				<Button type={'add'} onClick={handleClickAddTask} disabled={isNotAvailable} />

				<Button type={'sort'} onClick={handleClickSort} sort={isSort} />
			</div>
		</>
	)
}
