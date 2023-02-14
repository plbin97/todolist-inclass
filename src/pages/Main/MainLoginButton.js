import { Box, Button } from '@mui/material'
import React from 'react'

export function MainLoginButton ({ onClick }) {
  return (
    <Box style={{
      width: '100%',
      marginTop: '4px'
    }}>
      <Button onClick={onClick} size='large' variant='contained' fullWidth>
        Login
      </Button>
    </Box>
  )
}
