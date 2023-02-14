import { Box, TextField } from '@mui/material'
import React, { forwardRef } from 'react'

function MainNameInput (props, ref) {
  return (
    <Box style={{
      marginTop: '10px'
    }}>
      <TextField inputRef={ref} variant='outlined' label='Your Name' fullWidth/>
    </Box>
  )
}

export default forwardRef(MainNameInput)
