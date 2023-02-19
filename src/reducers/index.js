import { combineReducers } from 'redux'
import { userInfoReducer } from './userInfoReducer'
import { todoListReducer } from './todoListReducer'

export const reducers = combineReducers({
  userInfo: userInfoReducer,
  todoList: todoListReducer
})
