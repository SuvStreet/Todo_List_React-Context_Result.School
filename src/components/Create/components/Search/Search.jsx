import s from './style.module.css'

export const Search = () => {
	return (
		<input
			className={s.search}
			type='text'
			placeholder='Поиск'
			// onChange={(e) => setValueSearch(e.target.value)}
		/>
	)
}