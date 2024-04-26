import { searchTaskRequest } from "../../utils"

export const searchTask = (titleTask) => (dispatch) => {
	return searchTaskRequest(titleTask).then((data) =>
		dispatch({ type: 'SEARCH_TASK', payload: data }),
	)
}
