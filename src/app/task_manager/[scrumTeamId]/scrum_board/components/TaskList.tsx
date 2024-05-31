import { TaskType, done_list, inprogress_list, onreview_list, todo_list } from "@/common_mockups/todos"
import { team_members } from "@/common_mockups/team_members";
import { List, ListItem, ListItemText, Typography } from "@mui/material"
import React, { useEffect, useState } from "react";

interface Props {
    selectedTab: number
}

export default function TaskList({ selectedTab }:Props) {
    const [tasks, setTasks] = useState<TaskType[]>([]);

    useEffect(() => {
        switch (selectedTab) {
            case 1:
                setTasks(inprogress_list);
                break;
            case 2:
                setTasks(onreview_list);
                break;
            case 3:
                setTasks(done_list);
                break;
            default:
                setTasks(todo_list);
                break;
        }
    }, [selectedTab])

    return (
        <List sx={{width: '100%'}}>
            {tasks.map((task, index) => (
                <ListItem key={index} alignItems="flex-start" sx={{borderBottom: '0.5px solid #999999', width: '100%'}}>
                     <ListItemText
                        primary={
                            <Typography noWrap variant="body2" sx={{overflow: 'hidden', textOverflow: 'ellipsis'}}>
                                {task.content}
                            </Typography>
                        }
                        secondary={
                            <Typography noWrap variant="body2" sx={{color: '#757575', fontSize: '', overflow: 'hidden', textOverflow: 'ellipsis'}}>
                                {task.responsibleParties?.map((memberId, index) => {
                                    const member = team_members.find(m => m.id === memberId.toString());
                                    return member ? member.name : `Unknown (ID: ${memberId})`;
                                }).join(', ')}
                            </Typography>
                        }
                        />
                </ListItem>
            ))}
        </List>
    )
}