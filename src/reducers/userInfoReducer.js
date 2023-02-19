import { actionTypes } from '../actionTypes'

const initState = {
  userName: ''
}

export const userInfoReducer = (state = initState, action) => {
  const { type, payload } = action
  switch (type) {
    case actionTypes.UPDATE_USERNAME: {
      return {
        ...state,
        userName: payload
      }
    }
  }
  return state
}
