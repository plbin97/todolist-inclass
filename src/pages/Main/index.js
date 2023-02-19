import React, { useRef, useState } from 'react'
import { Box } from '@mui/material'
import { MainTitle } from './MainTitle'
import MainNameInput from './MainNameInput'
import { MainLoginButton } from './MainLoginButton'
import { MainAlert } from './MainAlert'
import { useNavigate } from 'react-router-dom'
import { useDispatch } from 'react-redux'
import { actionTypes } from '../../actionTypes'

export function Main () {
  const [displayAlert, setDisplayAlert] = useState('')
  const nameInput = useRef(null)
  const navigate = useNavigate()
  const dispatch = useDispatch()
  const loginEvent = () => {
    const inputValue = nameInput.current.value
    if (inputValue === '') {
      setDisplayAlert('You need to input your name')
    } else {
      const action = {
        type: actionTypes.UPDATE_USERNAME,
        payload: inputValue
      }
      dispatch(action)
      navigate('/todo')
    }
  }
  return (
        <Box style={{
          display: 'flex',
          justifyContent: 'center'
        }}>
            <Box style={{
              width: '300px',
              marginTop: '100px'
            }}>
              <MainTitle />
              <MainNameInput ref={nameInput} />
              <MainLoginButton onClick={loginEvent} />
              {displayAlert !== '' && (
                <MainAlert msg={displayAlert}/>
              )}
            </Box>
        </Box>
  )
}
