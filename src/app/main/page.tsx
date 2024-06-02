import React from 'react';
import { Box, Typography, Paper, List, ListItem, ListItemText, BottomNavigation, BottomNavigationAction } from '@mui/material';
import HomeIcon from '@mui/icons-material/Home';
import GroupsIcon from '@mui/icons-material/Groups';
import PersonIcon from '@mui/icons-material/Person';

const Main = () => {
  return (
    <Box sx={{ display: 'flex', flexDirection: 'column', height: '100vh' }}>

      {/* Welcome greeting */}
      <Box sx={{ p: 2, borderBottom: 1, borderColor: 'divider' }}>
        <Paper elevation={3} sx={{ p: 2 }}>
          <Typography variant="h5">Welcome greeting</Typography>
          <Typography>Manage your team project efficiently</Typography>
        </Paper>
      </Box>

      {/* Major Schedule */}
      <Box sx={{ p: 2, borderBottom: 1, borderColor: 'divider' }}>
        <Paper elevation={3} sx={{ p: 2 }}>
          <Typography variant="h5">Major Schedule</Typography>
          <List>
            <ListItem>
              <ListItemText primary="SRS document submission" secondary="Due date: 2024.05.26" />
              <Typography color="error">D-day</Typography>
            </ListItem>
            <ListItem>
              <ListItemText primary="Final Presentation" secondary="Due date: 2024.06.13" />
              <Typography color="textSecondary">D-17</Typography>
            </ListItem>
          </List>
        </Paper>
      </Box>

      <Box sx={{ p: 2, flexGrow: 1, borderBottom: 1, borderColor: 'divider' }}>
        <Paper elevation={3} sx={{ p: 2 }}>
          <Typography variant="h5">Teams Overview</Typography>
          <Box sx={{ mt: 2 }}>
            <Paper elevation={1} sx={{ p: 2, borderLeft: 5, borderColor: 'primary.main' }}>
              <Typography variant="h6">Team 8</Typography>
              <Typography>Introduction to Software Engineering_차수영</Typography>
              <Typography variant="caption">2024년 1학기</Typography>
            </Paper>
          </Box>
        </Paper>
      </Box>
    </Box>
  );
};

export default Main;
