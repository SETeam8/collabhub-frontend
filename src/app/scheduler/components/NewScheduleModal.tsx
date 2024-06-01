"use client"

import React, { useState, useEffect } from 'react';
import { Box, Button, Modal, TextField } from '@mui/material';

interface NewScheduleModalProps {
  isOpen: boolean;
  onClose: () => void;
  addSchedule: (schedule: Schedule) => void;
}

interface Schedule {
  title: string;
  participants: string;
  date: string;
  time: string;
  place: string;
}

const NewScheduleModal: React.FC<NewScheduleModalProps> = ({ isOpen, onClose, addSchedule }) => {
  const [topic, setTopic] = useState<string>('');
  const [participants, setParticipants] = useState<string>('');
  const [date, setDate] = useState<string>('');
  const [time, setTime] = useState<string>('');
  const [place, setPlace] = useState<string>('');
  const [error, setError] = useState<string>('');

  useEffect(() => {
    if (!isOpen) {
      setTopic('');
      setParticipants('');
      setDate('');
      setTime('');
      setPlace('');
      setError('');
    }
  }, [isOpen]);

  const handleSubmit = () => {
    if (!topic || !participants || !date || !time || !place) {
      setError('All fields are required');
      return;
    }
    const newSchedule: Schedule = { title: topic, participants, date, time, place };
    addSchedule(newSchedule);
    onClose(); // 유효할 경우 모달 닫기
  };

  return (
    <Modal open={isOpen} onClose={onClose} aria-labelledby="new-schedule-modal-title" aria-describedby="new-schedule-modal-description">
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
        <h2 id="new-schedule-modal-title">New Schedule</h2>
        <TextField
          label="Topic"
          variant="outlined"
          fullWidth
          margin="normal"
          value={topic}
          onChange={(e) => setTopic(e.target.value)}
        />
        <TextField
          label="Participants"
          variant="outlined"
          fullWidth
          margin="normal"
          value={participants}
          onChange={(e) => setParticipants(e.target.value)}
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
          label="Time"
          type="time"
          variant="outlined"
          fullWidth
          margin="normal"
          InputLabelProps={{ shrink: true }}
          value={time}
          onChange={(e) => setTime(e.target.value)}
        />
        <TextField
          label="Place"
          variant="outlined"
          fullWidth
          margin="normal"
          value={place}
          onChange={(e) => setPlace(e.target.value)}
        />
        {error && <p style={{ color: 'red' }}>{error}</p>}
        <Box sx={{ display: 'flex', justifyContent: 'flex-end', mt: 2 }}>
          <Button onClick={handleSubmit} color="primary" variant="contained">Save</Button>
        </Box>
      </Box>
    </Modal>
  );
};

export default NewScheduleModal;
