import { useSelector } from 'react-redux'

import { Task } from '../Task/Task'

import {
	selectTodoList,
	selectIsSort,
	selectSortList,
	selectIsSearch,
} from '../../redux/selectors'

import s from './style.module.css'

export const List = () => {
	const todoList = useSelector(selectTodoList)
	const sortList = useSelector(selectSortList)
	const isSort = useSelector(selectIsSort)
	const isSearch = useSelector(selectIsSearch)

	return (
		<div className={s.taskList}>
			{todoList.length !== 0 ? (
				(isSort ? sortList : todoList).map(({ title, id }) => (
					<Task key={id} title={title} id={id} />
				))
			) : (
				<small className={s.emptyTodoList}>
					{isSearch ? 'Ничего не нашли!' : 'На сегодня дел нет, может добавим?'}
				</small>
			)}
		</div>
	)
}
