import {Button} from "@mui/material";
import React from "react";
import {Link} from "react-router-dom";

const Home = (props) => {
    return (
        <div>
            <Button component={Link} to="/login" variant="contained" sx={{mt: 10, mr: 5}}>
                Login
            </Button>

            <Button component={Link} to="/signup" variant="contained" sx={{mt: 10, mr: 5}}>
                SignUp
            </Button>
        </div>
    );
};

export default Home;
