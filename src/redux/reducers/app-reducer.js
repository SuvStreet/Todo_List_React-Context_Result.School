export const initialAppState = {
	isLoading: false,
	isSort: false,
	isSearch: false,
}

export const appReducer = (state = initialAppState, action) => {
	switch (action.type) {
		case 'SET_IS_LOADING':
			// console.log('SET_IS_LOADING')
			return {
				...state,
				isLoading: !state.isLoading,
			}
			
		case 'SET_IS_SORT':
			// console.log('SET_IS_SORT')
			return {
				...state,
				isSort: !state.isSort,
			}

		case 'SET_IS_SEARCH':
			// console.log('SET_IS_SEARCH')
			return {
				...state,
				isSearch: !state.isSearch,
			}

		default:
			return state
	}
}
