import { combineReducers } from 'redux'
import { userInfoReducer } from './userInfoReducer'

export const reducers = combineReducers({
  userInfo: userInfoReducer
})
