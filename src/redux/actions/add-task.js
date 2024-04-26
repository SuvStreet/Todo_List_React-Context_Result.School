import { addTaskRequest } from '../../utils'

export const addTask = (task) => (dispatch) =>
	addTaskRequest(task).then((data) => {
		dispatch({ type: 'ADD_TASK', payload: data })
	})
