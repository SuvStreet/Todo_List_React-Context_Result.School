import { useContext } from 'react'

import { Button } from '../Button/Button'
import { TodoContext } from '../../context'

import s from './style.module.css'

export const Task = () => {
	const { todoLists } = useContext(TodoContext)

	return todoLists.map(({ title, id }) => (
		<div key={id} className={s.task} id={id}>
			<span className={s.text}>{title}</span>

			<div className={s.section_button}>
				<Button type={'edit'} />
				<Button type={'remove'} />
			</div>
		</div>
	))
}
