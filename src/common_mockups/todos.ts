export interface TaskType {
    content: string,
    relatedSchedule?: number,   // related schedule number

    // for Todo
    responsibleParties?: number[], //member id list
    reviewer?: number[], // member id list

    // for InProgress
    taskDuration?: Date[],

    // for OnReview
    membersWorkOn?: number[],    // member id list
    endDate?: Date

}


export const product_backlogs: TaskType[] = [
    { content: "Write user stories for new feature" },
    { content: "Refactor authentication module" },
    { content: "Research new technology for implementation" },
    { content: "Update product documentation" },
    { content: "Conduct user interviews for feedback" }
];

export const todo_list: TaskType[] = [
    { content: "Implement user authentication logic", responsibleParties: [1, 2], reviewer: [3] },
    { content: "Design UI components for dashboard", responsibleParties: [4], reviewer: [2] },
    { content: "Write unit tests for user registration feature", responsibleParties: [1], reviewer: [3] }
];

export const inprogress_list: TaskType[] = [
    { content: "Develop backend API endpoints", responsibleParties: [1], reviewer: [2], taskDuration: [new Date()] },
    { content: "Create database schema for new module", responsibleParties: [3], reviewer: [1], taskDuration: [new Date()] }
];

export const onreview_list: TaskType[] = [
    { content: "Code review for authentication module", responsibleParties: [2], reviewer: [3], taskDuration: [new Date()], membersWorkOn: [1], endDate: new Date() },
    { content: "Review UI mockups for user interface", responsibleParties: [4], reviewer: [2], taskDuration: [new Date()], membersWorkOn: [3], endDate: new Date() }
];

export const done_list: TaskType[] = [
    { content: "Complete user authentication feature", responsibleParties: [1], reviewer: [2], taskDuration: [new Date()], membersWorkOn: [3], endDate: new Date() },
    { content: "Deploy application to production server", responsibleParties: [2, 3], reviewer: [1], taskDuration: [new Date()], membersWorkOn: [4], endDate: new Date() }
];
