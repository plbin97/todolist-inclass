import React from 'react'
import { useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import { Box } from '@mui/material'

export function Todo () {
  const userName = useSelector(state => state.userInfo.userName)
  const navigate = useNavigate()
  if (userName === '') {
    navigate('/')
  }
  return (
        <Box>Hi, {userName}</Box>
  )
}
