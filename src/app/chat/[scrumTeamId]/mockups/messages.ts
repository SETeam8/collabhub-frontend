import { MemberType } from "@/common_mockups/team_members";

export interface MessageType {
    senderId: number;
    content: string;
    sendTime: Date;
    unreadMembersId: number[];
}

export const message_list: MessageType[] = [
    {
        senderId: 1,
        sendTime: new Date('2023-05-01T10:00:00Z'),
        unreadMembersId: [],
        content: "Hey team, let's get started on the new project!",
    },
    {
        senderId: 2,
        sendTime: new Date('2023-05-01T11:00:00Z'),
        unreadMembersId: [],
        content: "Don't forget to submit your reports by EOD.",
    },
    {
        senderId: 1,
        sendTime: new Date('2023-05-01T12:00:00Z'),
        unreadMembersId: [],
        content: "The client meeting has been rescheduled to tomorrow.",
    },
    {
        senderId: 3,
        sendTime: new Date('2023-05-01T13:00:00Z'),
        unreadMembersId: [],
        content: "Here are the notes from the last sprint review.",
    },
    {
        senderId: 2,
        sendTime: new Date('2023-05-01T14:00:00Z'),
        unreadMembersId: [],
        content: "Please review the new design mockups.",
    },
    {
        senderId: 1,
        sendTime: new Date('2023-05-01T15:00:00Z'),
        unreadMembersId: [],
        content: "Any updates on the bug fixes?",
    },
    {
        senderId: 3,
        sendTime: new Date('2023-05-01T16:00:00Z'),
        unreadMembersId: [2],
        content: "The development environment has been updated.",
    },
    {
        senderId: 4,
        sendTime: new Date('2023-05-01T17:00:00Z'),
        unreadMembersId: [2, 3],
        content: "Let's have a quick sync-up call at 3 PM.",
    },
    {
        senderId: 1,
        sendTime: new Date('2023-05-01T18:00:00Z'),
        unreadMembersId: [2, 3, 4],
        content: "The new feature has been deployed to production.",
    },
    {
        senderId: 5,
        sendTime: new Date('2023-05-01T19:00:00Z'),
        unreadMembersId: [3, 2, 4],
        content: "Reminder: Team lunch tomorrow at 1 PM.",
    },
];