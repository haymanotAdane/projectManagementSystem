import React, {useState} from "react";
import {Box, Button, TextField} from '@mui/material'


const Login = (props) => {

    const [loginState, setLoginState] = useState({userName: '', password: ''});

    const handleUserInput = (event) => {
        const {name, value} = event.target;
        setLoginState({[name]: value});
    }
    const validPassword = 'guest';

    const handleFormSubmit = (event) => {
        event.preventDefault();
        console.log("handle form submit clicked");
        let isSuccess = false;
        if (loginState.password === validPassword) {
            isSuccess = true;
        }
        console.log(isSuccess);
        // setLoginState({ authStatus: isSuccess ? 'success' : 'error' });
    }

    return (
        <Box
            component="form"
            autoComplete="off"
            onSubmit={handleFormSubmit}
            sx={{
                minWidth: "500px",
                backgroundColor: "white",
                padding: "16px",
                display: "flex",
                flexDirection: "column",
                flewWrap: "nowrap",
            }}
        >
            <TextField
                id="email"
                name="email"
                label="Email"
                required
                type="email"
                inputProps={{"data-testid": "email"}}
                onChange={handleUserInput}
                sx={{mb: 3}}
            />

            <TextField
                id="password"
                name="password"
                label="Password"
                required
                type="password"
                inputProps={{"data-testid": "password"}}
                onChange={handleUserInput}
                sx={{mb: 3}}
            />
            <Button variant="contained" type="submit" data-testid="submit-btn">
                Login
            </Button>
        </Box>
    );
};
export default Login;
