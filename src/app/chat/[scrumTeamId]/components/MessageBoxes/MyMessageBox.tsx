import { Box, Container, Typography } from "@mui/material";
import { MessageType } from "../../mockups/messages";

interface Props {
    message: MessageType;
}

export default function MyMessageBox({message}: Props) {
    return (
        <Box
            sx={{
                width: '90%',
                display: 'flex',
                gap: '5px'
            }}
        >
            <Container
                sx={{
                    display: 'flex',
                    flexDirection: 'column',
                    justifyContent: 'flex-end',
                    padding: 0,
                    margin: 0,
                    color: '#999999',
                    textAlign: 'right'
                }}
            >
                <Typography fontSize={8}>{
                    message.sendTime.toLocaleString('en-US', {
                        year: 'numeric',
                        month: 'long',
                        day: 'numeric',
                    })
                }</Typography>
                <Typography fontSize={8}>{
                    message.sendTime.toLocaleString('en-US', {
                        hour: 'numeric',
                        minute: 'numeric',
                        hour12: true
                    })
                }</Typography>
                {message.unreadMembersId.length > 0 && <Typography fontSize={10}>{message.unreadMembersId.length}</Typography>}
            </Container>
            <Box
                sx={{
                    borderRadius: '5px',
                    backgroundColor: '#ECF5EF',
                    color: '#092412',
                    padding: '10px',
                    flexGrow: 1,
                    fontSize: '13px'
                    
                }}
            >
            {message.content}
            </Box>
        </Box>
    )
}