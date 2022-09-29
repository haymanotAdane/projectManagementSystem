import {Box, Button, Container, Fab} from '@mui/material';
import React, {useState} from 'react';
import TaskItem from './TaskItem';
import {Link} from 'react-router-dom';

const taskItems = [{
    "id": 1,
    "taskTitle": "task 1",
    "taskDescription": "task 1 description",
    "taskStatus": "TODO",
    "assignee": "Jack",
    "createdBy": "Anjana",
    "createdOn": new Date(),
    "dueDate": new Date(2022, 10, 12)
}, {
    "id": 2,
    "taskTitle": "task 2",
    "taskDescription": "task 1 description",
    "taskStatus": "TODO",
    "assignee": "Jack",
    "createdBy": "Anjana",
    "createdOn": new Date(),
    "dueDate": new Date(2022, 10, 12)
}, {
    "id": 3,
    "taskTitle": "task 3",
    "taskDescription": "task 1 description",
    "taskStatus": "TODO",
    "assignee": "Jack",
    "createdBy": "Anjana",
    "createdOn": new Date(),
    "dueDate": new Date(2022, 10, 12)
}]
const Task = () => {

    const [taskListFlag, setTaskListFlag] = useState(false);
    const handleTaskButton = ()=>{
        setTaskListFlag(true);
    }

    return (

        <Container>
            <Box>
                {/* <Fab color="primary" data-testid="add-fab">  */}
                <Button variant="contained" sx={{mt: 10, mr: 5}} onClick ={handleTaskButton}>
                Assigned Tasks
                </Button>
                 {/* </Fab>  */}
            </Box>
            {taskListFlag?(
            <Box>
                {
                    taskItems?.map((item) => {
                        return <TaskItem
                            key={item.id}
                            taskItem={item}
                            component={Link}
                            to="/taskItem"/>
                        //   onLedgerDelete={handleLedgerItemDelete}/>
                    })
                }
            </Box>):(()=>{setTaskListFlag(true)})
}
        </Container>

    )
}
export default Task;