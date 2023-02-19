import { actionTypes } from '../actionTypes'

const initState = {
  todo: []
}

export const todoListReducer = (state = initState, action) => {
  const { type, payload } = action

  switch (type) {
    case actionTypes.ADD_TODO: {
      return {
        ...state,
        todo: [
          ...state.todo,
          {
            title: payload.title,
            hasFinished: false
          }
        ]
      }
    }
  }

  return state
}
