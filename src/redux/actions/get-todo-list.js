import { getTodoListRequest } from '../../utils/getTodoListRequest'

export const getTodoList = () => (dispatch) =>
	getTodoListRequest().then((todoListFromServer) => {
		dispatch({
			type: 'GET_TODO_LIST',
			payload: todoListFromServer,
		})
	})

// запись с return
// export const getTodoList = () => {
// 	return (dispatch) => {
// 		return getTodoListRedux().then((todoListFromServer) => {
// 			dispatch({
// 				type: 'GET_TODO_LIST',
// 				payload: todoListFromServer,
// 			})
// 		})
// 	}
// }
