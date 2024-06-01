import { Box } from "@mui/material";
import { MessageType } from "../../mockups/messages";

interface Props {
    message: MessageType;
}

export default function OthersMessageBox({message}: Props) {
    return (
        <Box>{message.content}</Box>
    )
}