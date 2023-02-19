import AppBar from '@mui/material/AppBar'
import Box from '@mui/material/Box'
import Toolbar from '@mui/material/Toolbar'
import Container from '@mui/material/Container'
import FormatListBulletedIcon from '@mui/icons-material/FormatListBulleted'
import React from 'react'

function NavBar () {
  return (
    <AppBar position="static">
      <Container maxWidth="xl">
        <Toolbar disableGutters>
          <FormatListBulletedIcon />
          <Box>
            Todo List
          </Box>
          <Box>
            123
          </Box>
        </Toolbar>
      </Container>
    </AppBar>
  )
}
export default NavBar
