import React from "react";
import {Link} from "react-router-dom";
import Task from "../task/Task";

const Dashboard = () => {
    return <Task component={Link} to="/task"/>;
};
export default Dashboard;
