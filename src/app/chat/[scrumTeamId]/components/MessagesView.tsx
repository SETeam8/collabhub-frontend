"use client"

import { Box, Container } from "@mui/material";
import { styled } from '@mui/material/styles';
import { MessageType } from "../mockups/messages";
import { useEffect, useRef } from "react";
import MyMessageBox from "./MessageBoxes/MyMessageBox";
import OthersMessageBox from "./MessageBoxes/OthersMessageBox";

interface Props {
    messages: MessageType[];
}

const BorderedContainer = styled(Container)(({ theme }) => ({
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    width: '100%',
    border: '0.5px solid #EDEDED',
    borderRadius: '5px',
    boxShadow: '0px 4px 6px rgba(0, 0, 0, 0.1)',
    height: '60vh',
    overflow: 'scroll',
    gap: '20px'
}));

const MessageContainer = styled(Container)(({ theme }) => ({
    display: 'flex',
    alignItems: 'left'
}));


export default function MessagesView({messages}: Props) {
    const borderedContainerRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        const container = borderedContainerRef.current;

        const handleScroll = () => {
            // 스크롤이 가장 아래에 있지 않은 경우에만 스크롤을 아래로 이동
            if (container && container.scrollTop + container.clientHeight < container.scrollHeight) {
                container.scrollTop = container.scrollHeight;
            }
        };

        if (container) {
            // 처음 컴포넌트가 마운트될 때 스크롤을 아래로 이동
            container.scrollTop = container.scrollHeight;
            container.addEventListener('scroll', handleScroll);
        }

        // 컴포넌트가 언마운트될 때 이벤트 리스너를 제거
        return () => {
            if (container) {
                container.removeEventListener('scroll', handleScroll);
            }
        };
    }, [messages]);
    
    return (
        <BorderedContainer ref={borderedContainerRef}>
            {messages.map((message, index) => {
                if (message.senderId === 1) {   // 임시로 1로 설정
                    return <MessageContainer key={index}><MyMessageBox message={message}/></MessageContainer>
                } else {
                    return <MessageContainer key={index}><OthersMessageBox message={message}/></MessageContainer>
                }
            })}
        </BorderedContainer>
    )
}