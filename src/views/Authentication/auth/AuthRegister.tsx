import React from 'react';
import { Box, Typography, Button, styled, TextField, Stack } from '@mui/material';
import { Link } from 'react-router-dom';




interface AuthRegisterProps{
    title?:any,
    subtitle?:any,
    subtext?:any
}

const CustomTextField = styled((props:any) => <TextField {...props} />)(({ theme }) => ({
    '& .MuiOutlinedInput-input::-webkit-input-placeholder': {
      color: theme.palette.text.secondary,
      opacity: '0.8',
    },
    '& .MuiOutlinedInput-input.Mui-disabled::-webkit-input-placeholder': {
      color: theme.palette.text.secondary,
      opacity: '1',
    },
    '& .Mui-disabled .MuiOutlinedInput-notchedOutline': {
      borderColor: theme.palette.grey[200],
    },
  }));

const AuthRegister = ({ title, subtitle, subtext }:AuthRegisterProps) => (
    <>
        {title ? (
            <Typography fontWeight="700" variant="h2" mb={1}>
                {title}
            </Typography>
        ) : null}

        {subtext}

        <Box>
            <Stack mb={3}>
                <Typography variant="subtitle1"
                    fontWeight={600} component="label" htmlFor='name' mb="5px">Name</Typography>
                <CustomTextField id="name" variant="outlined" fullWidth />

                <Typography variant="subtitle1"
                    fontWeight={600} component="label" htmlFor='email' mb="5px" mt="25px">Email Address</Typography>
                <CustomTextField id="email" variant="outlined" fullWidth />

                <Typography variant="subtitle1"
                    fontWeight={600} component="label" htmlFor='password' mb="5px" mt="25px">Password</Typography>
                <CustomTextField id="password" variant="outlined" fullWidth />
            </Stack>
            <Button color="primary" variant="contained" size="large" fullWidth component={Link} to="/auth/login">
                Sign Up
            </Button>
        </Box>
        {subtitle}
    </>
);

export default AuthRegister;
