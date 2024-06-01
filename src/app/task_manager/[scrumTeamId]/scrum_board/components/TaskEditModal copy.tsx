import React from 'react';
import { Modal, Box, Button, TextField, Typography, Select, MenuItem, InputLabel, FormControl } from '@mui/material';
import { useForm, Controller, SubmitHandler } from 'react-hook-form';
import { TaskType } from '@/common_mockups/todos';
import { team_members } from '@/common_mockups/team_members'; // Assuming the team_members are defined in this path
import dayjs from 'dayjs';
import { MobileDatePicker } from '@mui/x-date-pickers';

interface Props {
    open: boolean;
    handleClose: () => void;
    task: TaskType;
    onSave: (data: TaskType) => void;
}

const style = {
    position: 'absolute' as 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: 400,
    bgcolor: 'background.paper',
    border: '2px solid #000',
    boxShadow: 24,
    p: 4,
};

const TaskEditModal: React.FC<Props> = ({ open, handleClose, task, onSave }) => {
    const { control, handleSubmit } = useForm<TaskType>({
        defaultValues: {
            responsibleParties: task.responsibleParties || [],
            reviewers: task.reviewers || [],
            taskDuration: task.taskDuration || [],
            endDate: task.endDate || undefined,
        },
    });

    const onSubmit: SubmitHandler<TaskType> = data => {
        onSave(data);
        handleClose();
    };

    return (
        <Modal
            open={open}
            onClose={handleClose}
            aria-labelledby="edit-task-modal-title"
            aria-describedby="edit-task-modal-description"
        >
            <Box sx={style} component="form" onSubmit={handleSubmit(onSubmit)}>
                <Typography id="edit-task-modal-title" variant="h6" component="h2">
                    Edit Task
                </Typography>
                <Controller
                    name="content"
                    control={control}
                    rules={{ required: 'Content is required' }}
                    render={({ field }) => (
                        <TextField
                            {...field}
                            label="Content"
                            variant="outlined"
                            fullWidth
                            margin="normal"
                            required
                        />
                    )}
                />
                <Controller
                    name="responsibleParties"
                    control={control}
                    render={({ field }) => (
                        <FormControl fullWidth margin="normal">
                            <InputLabel>Responsible Parties</InputLabel>
                            <Select
                                {...field}
                                multiple
                                value={field.value || []}
                                onChange={field.onChange}
                                renderValue={(selected) =>
                                    (selected as number[])
                                        .map((id) => team_members.find((member) => member.id === id.toString())?.name)
                                        .join(', ')
                                }
                            >
                                {team_members.map((member) => (
                                    <MenuItem key={member.id} value={Number(member.id)}>
                                        {member.name} ({member.studentId})
                                    </MenuItem>
                                ))}
                            </Select>
                        </FormControl>
                    )}
                />
                <Controller
                    name="reviewers"
                    control={control}
                    render={({ field }) => (
                        <FormControl fullWidth margin="normal">
                            <InputLabel>Reviewers</InputLabel>
                            <Select
                                {...field}
                                multiple
                                value={field.value || []}
                                onChange={field.onChange}
                                renderValue={(selected) =>
                                    (selected as number[])
                                        .map((id) => team_members.find((member) => member.id === id.toString())?.name)
                                        .join(', ')
                                }
                            >
                                {team_members.map((member) => (
                                    <MenuItem key={member.id} value={Number(member.id)}>
                                        {member.name}
                                    </MenuItem>
                                ))}
                            </Select>
                        </FormControl>
                    )}
                />
                <Controller
                    name="taskDuration"
                    control={control}
                    render={({ field }) => (
                        <div style={{ display: 'flex', gap: '10px', marginTop: '10px' }}>
                            <MobileDatePicker
                                label="Start Date"
                                format="YYYY.MM.DD"
                                // value={field?.value ? dayjs(field.value[0]) : null}
                                onChange={(date) => field.onChange([date ? date : null, field.value ? field.value[1] : null])}
                                //renderInput={(params:any) => <TextField {...params} fullWidth />}
                            />
                            <MobileDatePicker
                                label="End Date"
                                format="YYYY.MM.DD"
                                //value={field.value ? dayjs(field.value[1]) : null}
                                onChange={(date) => field.onChange([field.value ? field.value[0] : null, date ? date : null])}
                                //renderInput={(params:any) => <TextField {...params} fullWidth />}
                            />
                        </div>
                    )}
                />
                <Controller
                    name="endDate"
                    control={control}
                    render={({ field }) => (
                        <MobileDatePicker
                            label="End Date"
                            format="YYYY.MM.DD"
                            //value={field.value ? dayjs(field.value) : null}
                            onChange={(date) => field.onChange(date ? date : null)}
                            //renderInput={(params) => <TextField {...params} fullWidth margin="normal" />}
                        />
                    )}
                />
                <div style={{ display: 'flex', gap: '20px', alignItems: 'center', justifyContent: 'center', marginTop: '20px' }}>
                    <Button variant="outlined" sx={{ fontSize: '15px', width: '80px' }} onClick={handleClose}>
                        CLOSE
                    </Button>
                    <Button type="submit" variant="contained" sx={{ fontSize: '15px', width: '80px' }}>
                        SAVE
                    </Button>
                </div>
            </Box>
        </Modal>
    );
};

export default TaskEditModal;
