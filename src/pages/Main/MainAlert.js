import { Alert, Box } from '@mui/material'
import React from 'react'
import PropTypes from 'prop-types'

function MainAlert ({ msg }) {
  return (
    <Box style={{
      marginTop: '10px'
    }}>
      <Alert severity="error">{msg}</Alert>
    </Box>
  )
}

MainAlert.protoTypes = {
  msg: PropTypes.string.isRequired
}

export { MainAlert }
