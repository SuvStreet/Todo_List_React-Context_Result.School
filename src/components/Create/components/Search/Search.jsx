import { useContext, useState } from 'react'

import { TodoContext } from '../../../../context/todoContext'

import s from './style.module.css'

export const Search = () => {
	const [value, setValue] = useState('')

	const { todoLists, setTodoLists } = useContext(TodoContext)

	const handleEnterSearch = (e) => {
		setValue(e.target.value)
		setTodoLists([...todoLists].filter(({title}) => title.includes(value)))
	}


	return (
		<input
			className={s.search}
			type='text'
			placeholder='Поиск'
			onChange={handleEnterSearch}
		/>
	)
}