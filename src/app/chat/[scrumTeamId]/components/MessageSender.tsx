"use client"

import { Button, Container, FormControl, IconButton, Input, TextField } from "@mui/material";
import { styled } from '@mui/material/styles';
import SendIcon from '@mui/icons-material/Send';
import AttachFileIcon from '@mui/icons-material/AttachFile';
import { useState } from "react";
import { MessageType } from "../mockups/messages";
import { team_members } from "@/common_mockups/team_members";

interface Props {
    onMessageSend: (newMessage: MessageType) => void;
}

const VisuallyHiddenInput = styled('input')({
    clip: 'rect(0 0 0 0)',
    clipPath: 'inset(50%)',
    height: 1,
    overflow: 'hidden',
    position: 'absolute',
    bottom: 0,
    left: 0,
    whiteSpace: 'nowrap',
    width: 1,
});

const MessageSenderContainer = styled(Container)({
    flexGrow: 1,
    padding: 0,
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'centert',
    alignItems: 'center',
    gap: '5px',
})

const TextFieldContainer = styled(Container)({
    display: 'flex',
    margin: 0,
    padding: 0,
    width: '100%',
    justifyContent: 'center',
    gap: 0
})

export default function MessageSender({onMessageSend}: Props) {
    const [message, setMessage] = useState<string>("");
    
    const handleSendButtonClick = () => {
        if (message.length > 0) {
            const members_except_me = team_members.map((member) => Number(member.id)).filter((id) => id !== 1);
            const newMessage: MessageType = {
                content: message,
                senderId: 1,    // temp
                unreadMembersId: members_except_me,
                sendTime: new Date()
            }
            onMessageSend(newMessage);
            setMessage("");
        }
    }

    return (
        <MessageSenderContainer>
            <TextFieldContainer>
                <Button
                    component="label"
                    role={undefined}
                    startIcon={<AttachFileIcon/>}
                    sx={{
                        display: 'flex',
                        justifyContent: 'center',
                        alignItems: 'center',
                        padding: 0,
                        color: '#757575',
                        margin: 0
                    }}
                    >
                    <VisuallyHiddenInput type="file" />
                </Button>
                <TextField
                    placeholder="Sending Messages"
                    variant="outlined"
                    value={message}
                    onChange={(event) => setMessage(event.target.value)}
                    fullWidth
                    margin="normal"
                />
                <IconButton aria-label="send" size="large" sx={{
                      margin: 0
                    }}>
                    <SendIcon onClick={handleSendButtonClick} />
                </IconButton>
            </TextFieldContainer>
        </MessageSenderContainer>
    )
}