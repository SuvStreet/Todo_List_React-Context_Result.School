/* eslint-disable react/prop-types */
import s from './style.module.css'

export const Search = ({ onSearch }) => {

	return (
		<input
			className={s.search}
			type='text'
			placeholder='Поиск'
			onChange={e => onSearch(e.target.value)}
		/>
	)
}
