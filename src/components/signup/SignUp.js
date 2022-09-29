import React, {useState} from "react";
import {Box, Button, TextField} from '@mui/material'

const SignUp = () => {

    let initialUser = {
        firstName: '',
        lastName: '',
        email: '',
        country: '',
        state: '',
        city: '',
        password: '',
        confirmPassword: ''

    }

    const [userState, setUserState] = useState(initialUser);

    const handleUserInput = (event) => {

        const name = event.target.name;
//   setState({
//     ...state,
//     [evt.target.name]: value
        //const namee = event.target.name;
        // const { name, value } = event.target;
        setUserState({...userState, [name]: event.target.value});
    }


    const handleFormSubmit = (event) => {
        event.preventDefault();
        console.log("handle form submit clicked");
        let isSuccess = false;
        if (userState.password === userState.confirmPassword) {
            isSuccess = true;
        }
        console.log(isSuccess);
        console.log(userState);

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
                id="firstName"
                name="firstName"
                label="FirstName"
                required
                type="text"
                inputProps={{"data-testid": "firstName"}}
                value={userState.firstName}
                onChange={handleUserInput}
                sx={{mb: 3}}
            />
            <TextField
                id="lastName"
                name="lastName"
                label="LastName"
                required
                type="text"
                inputProps={{"data-testid": "lastName"}}
                value={userState.lastName}
                onChange={handleUserInput}
                sx={{mb: 3}}
            />


            <TextField
                id="email"
                name="email"
                label="Email"
                required
                type="email"
                inputProps={{"data-testid": "email"}}
                value={userState.email}
                onChange={handleUserInput}
                sx={{mb: 3}}
            />

            <TextField
                id="country"
                name="country"
                label="Country"
                required
                type="text"
                inputProps={{"data-testid": "country"}}
                value={userState.country}
                onChange={handleUserInput}
                sx={{mb: 3}}
            />
            <TextField
                id="state"
                name="state"
                label="State"
                required
                type="text"
                inputProps={{"data-testid": "state"}}
                value={userState.state}
                onChange={handleUserInput}
                sx={{mb: 3}}
            />

            <TextField
                id="city"
                name="city"
                label="City"
                required
                type="text"
                inputProps={{"data-testid": "city"}}
                value={userState.city}
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
                value={userState.password}
                onChange={handleUserInput}
                sx={{mb: 3}}
            />

            <TextField
                id="confirmPassword"
                name="confirmPassword"
                label="ConfirmPassword"
                required
                type="password"
                inputProps={{"data-testid": "confirm-password"}}
                value={userState.confirmPassword}
                onChange={handleUserInput}
                sx={{mb: 3}}
            />
            <Button variant="contained" type="submit" data-testid="submit-btn">
                SignUp
            </Button>
        </Box>
    );
};

export default SignUp;
