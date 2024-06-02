"use client";

import React from 'react';
import { Box, Typography, Paper, List, ListItem, ListItemText, Divider, Button, IconButton } from '@mui/material';
import { Chat, ExitToApp, Home, People, Person } from '@mui/icons-material';
import styled from '@emotion/styled';

const Container = styled(Box)({
  padding: '16px',
  backgroundColor: '#f5f5f5',
  minHeight: '100vh'
});

const Section = styled(Paper)({
  marginBottom: '16px',
  padding: '16px'
});


const Team = () => {
  return (
    <Container>
      <Section>
        <Box display="flex" justifyContent="flex-end" marginBottom="16px">
          <Button variant="outlined">Team Management</Button>
        </Box>
        <Box display="flex" justifyContent="space-between" alignItems="center" marginBottom="8px">
          <Typography variant="subtitle1" gutterBottom color="textSecondary">
            Subject
          </Typography>
          <Typography variant="body1">Introduction to Software Engineering</Typography>
        </Box>

        <Box display="flex" justifyContent="space-between" alignItems="center">
          <Typography variant="subtitle1" gutterBottom color="textSecondary">
            Description
          </Typography>
          <Typography variant="body2">This part is description of the team.</Typography>
        </Box>
      </Section>

      <Section>
        <Box display="flex" alignItems="center" justifyContent="space-between">
          <Box display="flex" alignItems="center">
            <Chat />
            <Typography variant="body1" marginLeft={1}>Team 8's Chat room</Typography>
          </Box>
          <Typography variant="h6">8</Typography>
        </Box>
        <Typography variant="body2">Lastest message content...</Typography>
      </Section>

      <Section>
        <Box display="flex" justifyContent="space-between" alignItems="center" marginBottom="8px">
          <Typography variant="h6">Upcoming events</Typography>
          <IconButton color="primary">
            <ExitToApp />
          </IconButton>
        </Box>
        <List>
          <ListItem>
            <ListItemText
              primary="SRS document submission"
              secondary="Due date: 2024.05.26"
            />
            <Typography variant="body2" color="error">
              D-day
            </Typography>
          </ListItem>
          <ListItem>
            <ListItemText
              primary="Final Presentation"
              secondary="Due date: 2024.06.13"
            />
            <Typography variant="body2" color="textSecondary">
              D-17
            </Typography>
          </ListItem>
        </List>
      </Section>

      <Section>
        <Box display="flex" justifyContent="space-between" alignItems="center" marginBottom="8px">
          <Typography variant="h6">Scheduled meeting</Typography>
          <IconButton color="primary">
            <ExitToApp />
          </IconButton>
        </Box>
        <List>
          <ListItem>
            <ListItemText
              primary="Final Presentation"
              secondary="Due date: 2024.06.13"
            />
            <Typography variant="body2" color="textSecondary">
              D-17
            </Typography>
          </ListItem>
        </List>
      </Section>

      <Section>
        <Box display="flex" justifyContent="space-between" alignItems="center" marginBottom="8px">
          <Typography variant="h6">My todos</Typography>
          <IconButton color="primary">
            <ExitToApp />
          </IconButton>
        </Box>
        <List>
          <ListItem>
            <ListItemText
              primary="SRS document writing"
              secondary="Due date: 2024.05.26"
            />
            <Typography variant="body2" color="success">
              Done
            </Typography>
          </ListItem>
          <ListItem>
            <ListItemText
              primary="Task Manager implementation"
              secondary="Due date: 2024.06.13"
            />
            <Typography variant="body2" color="primary">
              In progress
            </Typography>
          </ListItem>
        </List>
      </Section>


    </Container>
  );
};

export default Team;
