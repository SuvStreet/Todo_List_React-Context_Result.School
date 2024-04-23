export const initialState = {
	todoLists: [],
	isLoading: false,
	resultTextValue: '',
	isNotAvailable: false,
	sort: false,
	sortValue: '',
}

export const reducer = (state = initialState, action) => {
	const { type, payload } = action

	switch (type) {
		// case value:

		//   break;

		default:
			return state
	}
}
