import { useContext } from 'react'
import { TodoContext } from '../../context/todoContext'

import { Task } from '../Task/Task'

import s from './style.module.css'

export const List = () => {
	const { todoLists, setTodoLists } = useContext(TodoContext)

	return (
		<div className={s.taskList}>
			{todoLists.map(({ title, id }) => (
				<Task key={id} title={title} id={id} setTodoLists={setTodoLists} />
			))}

			{/* {(debouncedSearchTerm && resultSearch.length === 0) || todoLists.length === 0 ? (
				<small className={s.emptyTodoList}>
					{todoLists.length === 0
						? 'На сегодня дел нет, может добавим?'
						: 'Ничего не нашли!'}
				</small>
			) : (
				(debouncedSearchTerm ? resultSearch : sort ? sortTodoLists : todoLists).map(
					({ title, id }) => (
						<div key={id} className={s.task} id={id}>
							<span className={s.text} onClick={handleClickTask}>
								{title}
							</span>
						</div>
					),
				)
			)} */}
		</div>
	)
}
