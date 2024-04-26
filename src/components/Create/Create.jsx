import { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'

import {
	addTask,
	SET_IS_SEARCH,
	SET_IS_SORT,
	SORT_LIST,
	searchTask,
	SET_IS_LOADING,
	getTodoList,
} from '../../redux/actions'
import { selectIsSearch, selectIsSort } from '../../redux/selectors'

import { Button } from '../Button/Button'
import { Title, Search } from './components'

import { useDebounce } from '../../hooks'

import s from './style.module.css'

export const Create = () => {
	const dispatch = useDispatch()
	const [isNotAvailable, setIsNotAvailable] = useState(false)
	const isSort = useSelector(selectIsSort)
	const isSearch = useSelector(selectIsSearch)

	const [value, setValue] = useState('')

	const debouncedSearchTerm = useDebounce(value, 700)

	const handleClickAddTask = () => {
		const task = prompt('Введите задачу:')

		if (task?.trim()) {
			setIsNotAvailable(true)
			dispatch(addTask(task))
				.then(() => {
					if (isSort) {
						dispatch(SORT_LIST)
					}
				})
				.catch((error) => {
					console.error(error)
				})
				.finally(() => {
					setIsNotAvailable(false)
				})
		}
	}

	const handleClickSort = () => {
		if (!isSort) {
			dispatch(SORT_LIST)
			dispatch(SET_IS_SORT)
		} else {
			dispatch(SET_IS_SORT)
		}
	}

	useEffect(() => {
		if (debouncedSearchTerm && debouncedSearchTerm.trim() !== '') {
			if (!isSearch) {
				dispatch(SET_IS_SEARCH)
			}
			dispatch(SET_IS_LOADING)
			dispatch(searchTask(debouncedSearchTerm))
				.catch((error) => {
					console.error(error)
				})
				.then(() => {
					if (isSort) {
						dispatch(SORT_LIST)
					}
				})
				.finally(() => {
					dispatch(SET_IS_LOADING)
				})
		} else {
			if (isSearch) {
				dispatch(SET_IS_SEARCH)
				dispatch(SET_IS_LOADING)
				dispatch(getTodoList())
					.catch((error) => console.error(error))
					.then(() => {
						if (isSort) {
							dispatch(SORT_LIST)
						}
					})
					.finally(() => dispatch(SET_IS_LOADING))
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
