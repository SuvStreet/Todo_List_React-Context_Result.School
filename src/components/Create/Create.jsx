import { Button } from '../Button/Button'
import { Title, Search } from './components'

import s from './style.module.css'

export const Create = () => {
	return (
		<>
			<Title />
			<div className={s.change}>
				<Search />
				<Button
					type={'add'}
					// onClick={handleClickAddTask}
					// disabled={isLoading}
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
