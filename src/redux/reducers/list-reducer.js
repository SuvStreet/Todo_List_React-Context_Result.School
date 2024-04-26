export const initialListState = {
	todoList: [],
	sortList: [],
}

export const listReducer = (state = initialListState, action) => {
	const { type, payload } = action

	switch (type) {
		case 'GET_TODO_LIST':
			// console.log('GET_TODO_LIST')
			return {
				...state,
				todoList: payload,
			}

		case 'ADD_TASK':
			// console.log('ADD_TASK')
			return {
				...state,
				todoList: [...state.todoList, payload],
			}

		case 'SORT_LIST':
			// console.log('SORT_LIST')
			return {
				...state,
				sortList: state.todoList.toSorted((a, b) => a.title.localeCompare(b.title)),
			}

		case 'SEARCH_TASK':
			// console.log('SEARCH_TASK')
			return {
				...state,
				todoList: payload,
			}

		case 'EDIT_TASK':
			// console.log('EDIT_TASK')
			return {
				...state,
				todoList: state.todoList.map((task) => {
					if (task.id === payload.id) {
						return payload
					}
					return task
				}),
			}

		case 'REMOVE_TASK':
			// console.log('REMOVE_TASK')
			return {
				...state,
				todoList: state.todoList.filter((task) => task.id !== payload),
			}

		default:
			return state
	}
}
