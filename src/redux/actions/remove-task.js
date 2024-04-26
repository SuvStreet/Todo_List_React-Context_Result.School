import { removeTaskRequest } from '../../utils'

export const removeTask = (id) => (dispatch) =>
	removeTaskRequest(id).then(() => dispatch({ type: 'REMOVE_TASK', payload: id }))
