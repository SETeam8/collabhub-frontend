// app/team/[teamId]/components/TeamInfo.tsx

"use client"

import React, { useState } from 'react';
import { Box, Button, Typography, IconButton, Tooltip, List, ListItem, ListItemAvatar, Avatar } from '@mui/material';
import ContentCopyIcon from '@mui/icons-material/ContentCopy';
import NewTeamModal from '../../create/components/NewTeamModal';

interface Member {
  name: string;
  photo: string;
  studentId: string;
}

interface TeamInfoProps {
  teamName: string;
  description: string;
  subject: string;
  membersLimit: number;
  creationDate: string;
  members: Member[];
}

const TeamInfo: React.FC = () => {
  const [isModalOpen, setModalOpen] = useState<boolean>(false);

  const teamInfo = {
    teamName: 'Awesome Team',
    subject: 'Computer Science',
    description: 'A team working on amazing projects.',
    membersLimit: 5,
    creationDate: '2024-06-01',
    members: [
      { name: 'Tony Stark', photo: 'https://example.com/photo-tony.jpg', studentId: '2021010101' },
      { name: 'Steve Rogers', photo: 'https://example.com/photo-steve.jpg', studentId: '2021010102' }
    ]
  };

  const handleOpenModal = () => setModalOpen(true);
  const handleCloseModal = () => setModalOpen(false);
  const handleSave = (updatedInfo: any) => {
    // Handle save logic here
    handleCloseModal();
  };

  const copyAccessCodeToClipboard = () => {
    const teamLink = window.location.href;
    const fullText = `Access Code: ${teamInfo.teamAccessCode || 'No Code Generated'}\nLink: ${teamLink}`;
    navigator.clipboard.writeText(fullText);
  };

  return (
    <Box sx={{ p: 2 }}>
      <NewTeamModal
        open={isModalOpen}
        handleClose={handleCloseModal}
        handleSave={handleSave}
        teamInfo={{
          teamName: '',
          subject: '',
          description: '',
          membersLimit: 0,
          teamAccessCode: '',
          creationDate: '',
          members: []
        }}
      />
      <Typography variant="h4" sx={{ mb: 2 }}>{teamInfo.teamName}</Typography>
      <Typography variant="body1"><strong>Subject:</strong> {teamInfo.subject}</Typography>
      <Typography variant="body1"><strong>Description:</strong> {teamInfo.description}</Typography>
      <Typography variant="body1"><strong>Members Limit:</strong> {teamInfo.membersLimit}</Typography>
      <Typography variant="body1"><strong>Creation Date:</strong> {teamInfo.creationDate}</Typography>
      <Typography variant="h6" sx={{ mt: 2 }}>Members</Typography>
      <List>
        {teamInfo.members.map((member, index) => (
          <ListItem key={index}>
            <ListItemAvatar>
              <Avatar src={member.photo} />
            </ListItemAvatar>
          </ListItem>
        ))}
      </List>
      <Button variant="contained" color="primary" onClick={handleOpenModal} sx={{ mt: 2 }}>
        Create New Team
      </Button>
    </Box>
  );
};

export default TeamInfo;
