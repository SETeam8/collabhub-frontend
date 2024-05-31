import React, { useState, useEffect } from 'react';
import { Box, Button, Modal, TextField } from '@mui/material';

interface NewEventModalProps {
  isOpen: boolean;
  onClose: () => void;
  addEvent: (event: Event) => void;
}

interface Event {
  title: string;
  date: string;
  type: string;
  responsible: string;
}

const NewEventModal: React.FC<NewEventModalProps> = ({ isOpen, onClose, addEvent }) => {
  const [name, setName] = useState<string>('');
  const [type, setType] = useState<string>('');
  const [date, setDate] = useState<string>('');
  const [responsible, setResponsible] = useState<string>('');
  const [error, setError] = useState<string>('');

  useEffect(() => {
    if (!isOpen) {
      setName('');
      setType('');
      setDate('');
      setResponsible('');
      setError('');
    }
  }, [isOpen]);

  const handleSubmit = () => {
    if (!name || !type || !date || !responsible) {
      setError('All fields are required');
      return;
    }
    const newEvent: Event = { title: name, date, type, responsible };
    addEvent(newEvent);
    onClose(); // 유효할 경우 모달 닫기
  };

  return (
    <Modal open={isOpen} onClose={onClose} aria-labelledby="new-event-modal-title" aria-describedby="new-event-modal-description">
      <Box sx={{
        position: 'absolute',
        top: '50%',
        left: '50%',
        transform: 'translate(-50%, -50%)',
        bgcolor: 'background.paper',
        boxShadow: 24,
        p: 4,
        width: 400,
        maxWidth: '60%'
      }}>
        <h2 id="new-event-modal-title">New Event</h2>
        <TextField
          label="Event Name"
          variant="outlined"
          fullWidth
          margin="normal"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
        <TextField
          label="Event Type"
          variant="outlined"
          fullWidth
          margin="normal"
          value={type}
          onChange={(e) => setType(e.target.value)}
        />
        <TextField
          label="Date"
          type="date"
          variant="outlined"
          fullWidth
          margin="normal"
          InputLabelProps={{ shrink: true }}
          value={date}
          onChange={(e) => setDate(e.target.value)}
        />
        <TextField
          label="Responsible Members"
          variant="outlined"
          fullWidth
          margin="normal"
          value={responsible}
          onChange={(e) => setResponsible(e.target.value)}
        />
        {error && <p style={{ color: 'red' }}>{error}</p>}
        <Box sx={{ display: 'flex', justifyContent: 'flex-end', mt: 2 }}>
          <Button onClick={handleSubmit} color="primary" variant="contained">Save</Button>
        </Box>
      </Box>
    </Modal>
  );
};

export default NewEventModal;
