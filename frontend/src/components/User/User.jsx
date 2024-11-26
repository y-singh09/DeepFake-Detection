import React, { useState, useEffect } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import axios from 'axios';
import { toast } from 'react-toastify';
import { Avatar, Button, CssBaseline, Grid, InputAdornment, TextField, Typography, Box, Container } from '@mui/material';
import { MdLockOutline } from 'react-icons/md';
import { RiEyeFill, RiEyeOffFill } from 'react-icons/ri';

const AdminRegister = () => {
  const [credentials, setCredentials] = useState({
    firstName: '',
    lastName: '',
    email: '',
    phoneNumber: '',
    password: '',
    userId: '' // Renamed key to userId
  });
  const [showPassword, setShowPassword] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    let auth = localStorage.getItem('Authorization');
    if (auth) {
      navigate('/');
    }
  }, [navigate]);

  const handleOnChange = (e) => {
    setCredentials({ ...credentials, [e.target.name]: e.target.value });
  };

  const handleClickShowPassword = () => {
    setShowPassword(!showPassword);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const apiUrl = process.env.REACT_APP_ADMIN_REGISTER;

    // Regex for validating phone number and email
    let phoneRegex = /^(?:(?:\+|0{0,2})91(\s*[\-]\s*)?|[0]?)?[789]\d{9}$/gm;
    let emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;

    // Form validation
    if (!credentials.firstName || !credentials.lastName || !credentials.email || !credentials.phoneNumber || !credentials.password || !credentials.userId) {
      toast.error("All fields are required!", { autoClose: 500, theme: 'colored' });
      return;
    }
    if (credentials.firstName.length <= 3 || credentials.lastName.length <= 3) {
      toast.error("Name must be more than 3 characters!", { autoClose: 500, theme: 'colored' });
      return;
    }
    if (!emailRegex.test(credentials.email)) {
      toast.error("Please enter a valid email address!", { autoClose: 500, theme: 'colored' });
      return;
    }
    if (!phoneRegex.test(credentials.phoneNumber)) {
      toast.error("Please enter a valid phone number!", { autoClose: 500, theme: 'colored' });
      return;
    }
    if (credentials.password.length < 5) {
      toast.error("Password must be at least 5 characters!", { autoClose: 500, theme: 'colored' });
      return;
    }

    try {
      // API call for registration
      const response = await axios.post(process.env.REACT_APP_ADMIN_REGISTER, {
        firstName: credentials.firstName,
        lastName: credentials.lastName,
        email: credentials.email,
        phoneNumber: credentials.phoneNumber,
        password: credentials.password,
        userId: credentials.userId,
      });

      console.log(response.data); // Log the response to check if the signup was successful

      if (response.data.success) {
        // On successful registration, save credentials in localStorage
        const userData = {
          userId: credentials.userId,
          password: credentials.password,
        };

        // Save the credentials in localStorage (preferably hash the password for real apps)
        localStorage.setItem('userCredentials', JSON.stringify(userData));
        toast.success("Sign up successful! You can now log in.", { autoClose: 500, theme: 'colored' });

        // Redirect to login page
        navigate('/login');
      } else {
        toast.error("Signup failed! Please try again.", { autoClose: 500, theme: 'colored' });
      }
    } catch (error) {
      console.error("Error during signup:", error);
      toast.error("An error occurred during signup. Please try again later.", { autoClose: 500, theme: 'colored' });
    }
  };

  return (
    <Container component="main" maxWidth="xs" sx={{ marginBottom: 10 }}>
      <CssBaseline />
      <Box sx={{ marginTop: 8, display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
        <Avatar sx={{ m: 1, bgcolor: '#1976d2' }}>
          <MdLockOutline />
        </Avatar>
        <Typography component="h1" variant="h5">Sign up</Typography>
        <Box component="form" noValidate onSubmit={handleSubmit} sx={{ mt: 3 }}>
          <Grid container spacing={2}>
            <Grid item xs={12} sm={6}>
              <TextField
                autoComplete="given-name"
                name="firstName"
                value={credentials.firstName}
                onChange={handleOnChange}
                required
                fullWidth
                id="firstName"
                label="First Name"
                autoFocus
              />
            </Grid>
            <Grid item xs={12} sm={6}>
              <TextField
                required
                fullWidth
                id="lastName"
                label="Last Name"
                name="lastName"
                value={credentials.lastName}
                onChange={handleOnChange}
                autoComplete="family-name"
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                required
                fullWidth
                id="email"
                label="Email Address"
                name="email"
                value={credentials.email}
                onChange={handleOnChange}
                autoComplete="email"
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                required
                fullWidth
                id="phoneNumber"
                label="Contact Number"
                name="phoneNumber"
                value={credentials.phoneNumber}
                onChange={handleOnChange}
                inputMode="numeric"
              />
            </Grid>

            {/* Move userId (Admin Code) above password */}
            <Grid item xs={12}>
              <TextField
                required
                fullWidth
                value={credentials.userId}
                name="userId"
                onChange={handleOnChange}
                label="User ID (Admin Code)"
                type="text"
              />
            </Grid>

            <Grid item xs={12}>
              <TextField
                required
                fullWidth
                name="password"
                label="Password"
                value={credentials.password}
                onChange={handleOnChange}
                type={showPassword ? "text" : "password"}
                InputProps={{
                  endAdornment: (
                    <InputAdornment position="end" onClick={handleClickShowPassword} sx={{ cursor: 'pointer' }}>
                      {showPassword ? <RiEyeFill /> : <RiEyeOffFill />}
                    </InputAdornment>
                  ),
                }}
                autoComplete="new-password"
              />
            </Grid>
          </Grid>
          <Button type="submit" fullWidth variant="contained" sx={{ mt: 3, mb: 2 }}>
            Sign Up
          </Button>
          <Grid container justifyContent="flex-end">
            <Grid item>
              Already have an account?
              <Link to="/login" style={{ color: '#1976d2', marginLeft: 3 }}>
                Sign in
              </Link>
            </Grid>
          </Grid>
        </Box>
      </Box>
    </Container>
  );
};

export default AdminRegister;
