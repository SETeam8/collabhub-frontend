"use client"

import StyledFullContainer from "./components/StyledFullContainer";
import SearchBar from "./components/SearchBar";
import MessagesView from "./components/MessagesView";
import MessageSender from "./components/MessageSender";
import MembersStatusView from "./components/MembersStatusView";
import { useState } from "react";
import { MessageType, message_list } from "./mockups/messages";

export default function ChatMainPage() {
    const [messages, setMessages] = useState<MessageType[]>(message_list);

    const handleMessageSend = (newMessage: MessageType) => {
        setMessages(list => list.concat([newMessage]));
    }

    return (
        <StyledFullContainer>
            <SearchBar />
            <MembersStatusView />
            <MessagesView messages={messages}/>
            <MessageSender onMessageSend={handleMessageSend}/>
        </StyledFullContainer>
    )
}