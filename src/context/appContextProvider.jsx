/* eslint-disable react/prop-types */
import { TodoContext } from './todoContext'

export const AppContextProvider = ({ todoListValue, children }) => {
	return <TodoContext.Provider value={todoListValue}>{children}</TodoContext.Provider>
}
