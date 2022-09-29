import {
  Button,
  Card,
  CardActions,
  CardContent,
  IconButton,
  Typography,
} from "@mui/material";
import React from "react";

const TaskItem = (props) => {
  return (
    <Card sx={{ maxWidth: 275, mb: 3 }} data-testid="notes-item">
      <CardContent>
        <Typography variant="h5" component="div">
          {props.taskItem.taskTitle}
        </Typography>
      </CardContent>
      {/* {props.taskItem.taskDescription} */}
      <CardActions>
        <IconButton
          size="large"
          edge="start"
          // onClick={handleDeleteClick}
        >
          {/* <DeleteForeverIcon>



                   </DeleteForeverIcon> */}

          <Button variant="contained" sx={{ mt: 10, mr: 5 }}>
            Detail
          </Button>
          <Button variant="contained" sx={{ mt: 10, mr: 5 }}>
            Status
          </Button>
        </IconButton>
      </CardActions>
    </Card>
  );
};

export default TaskItem;
