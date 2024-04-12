import { useContext } from 'react'

import { Button } from '../Button/Button'
import { Title, Search } from './components'

import { TodoContext } from '../../context/todoContext'
import { useAddTask } from '../../hooks'

import s from './style.module.css'

export const Create = () => {
	const { todoLists, setTodoLists } = useContext(TodoContext)

	const { handleClickAddTask, isAddRequest } = useAddTask(todoLists, setTodoLists)

	return (
		<>
			<Title />
			<div className={s.change}>
				<Search />
				<Button
					type={'add'}
					onClick={handleClickAddTask}
					disabled={isAddRequest}
				/>

				<Button
					type={'sort'}
					// onClick={handleClickSort}
					// sort={sort}
				/>
			</div>
		</>
	)
}
