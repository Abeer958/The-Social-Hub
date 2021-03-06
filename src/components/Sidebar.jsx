import { Group } from '@mui/icons-material';
import { Article } from '@mui/icons-material';
import { Storefront } from '@mui/icons-material';
import { Settings } from '@mui/icons-material';
import { ModeNight } from '@mui/icons-material';
import { AccountBox } from '@mui/icons-material';
import { Person } from '@mui/icons-material';
import { Home } from '@mui/icons-material';
import { List, ListItem, ListItemButton, ListItemIcon, ListItemText, Switch } from '@mui/material';
import Box from '@mui/material/Box';
import React from 'react'

const Sidebar = ({mode, setMode}) => {
  return (
    <Box 
    flex={1} 
    padding={2} 
    sx={{display: {xs: 'none', sm: 'block' }}}
    >
    <Box position='fixed'>
    <List>
          <ListItem disablePadding>
            <ListItemButton component='a' href='#Home'>
              <ListItemIcon>
               <Home />
              </ListItemIcon>
              <ListItemText primary="Homepage" />
            </ListItemButton>
          </ListItem>

          <ListItem disablePadding>
            <ListItemButton component='a' href='#pages'>
              <ListItemIcon>
               <Article />
              </ListItemIcon>
              <ListItemText primary="Pages" />
            </ListItemButton>
          </ListItem>

          <ListItem disablePadding>
            <ListItemButton component='a' href='#groups'>
              <ListItemIcon>
               <Group />
              </ListItemIcon>
              <ListItemText primary="Groups" />
            </ListItemButton>
          </ListItem>

          <ListItem disablePadding>
            <ListItemButton component='a' href='#marketplace'>
              <ListItemIcon>
               <Storefront />
              </ListItemIcon>
              <ListItemText primary="Marketplace" />
            </ListItemButton>
          </ListItem>

          <ListItem disablePadding>
            <ListItemButton component='a' href='#friends'>
              <ListItemIcon>
               <Person />
              </ListItemIcon>
              <ListItemText primary="Friends" />
            </ListItemButton>
          </ListItem>

          <ListItem disablePadding>
            <ListItemButton component='a' href='#settings'>
              <ListItemIcon>
               <Settings />
              </ListItemIcon>
              <ListItemText primary="Settings" />
            </ListItemButton>
          </ListItem>

          <ListItem disablePadding>
            <ListItemButton component='a' href='#profile'>
              <ListItemIcon>
               <AccountBox />
              </ListItemIcon>
              <ListItemText primary="Profile" />
            </ListItemButton>
          </ListItem>
    </List>

    <ListItem disablePadding>
            <ListItemButton component='a' href='#darkmode'>
              <ListItemIcon>
               <ModeNight />
              </ListItemIcon>
              <Switch  onChange={e=> setMode(mode === 'light' ? 'dark' : 'light')}/>
            </ListItemButton>
          </ListItem>
          </Box>
    </Box>
  )
}

export default Sidebar