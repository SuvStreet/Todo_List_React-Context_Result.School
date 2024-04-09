import { Task } from '../Task/Task'

import s from './style.module.css'

export const List = () => {

	return (
		<div className={s.taskList}>
				<Task />

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
