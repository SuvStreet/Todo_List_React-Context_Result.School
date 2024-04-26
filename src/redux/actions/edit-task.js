import { editTaskRequest } from '../../utils'

export const editTask = (id, titleTask) => (dispatch) =>
	editTaskRequest(id, titleTask).then((data) =>
		dispatch({ type: 'EDIT_TASK', payload: data }),
	)
