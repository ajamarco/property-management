import React from 'react';
import Avatar from '@material-ui/core/Avatar';
import Button from '@material-ui/core/Button';
import CssBaseline from '@material-ui/core/CssBaseline';
import TextField from '@material-ui/core/TextField';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Checkbox from '@material-ui/core/Checkbox';
import Paper from '@material-ui/core/Paper';
import Box from '@material-ui/core/Box';
import Grid from '@material-ui/core/Grid';
import LockOutlinedIcon from '@material-ui/icons/LockOutlined';
import Typography from '@material-ui/core/Typography';
import useStyles from './styleSide/StyleSignUp'
import {Link} from 'react-router-dom'
import Radio from '@material-ui/core/Radio';
import RadioGroup from '@material-ui/core/RadioGroup';

import FormControl from '@material-ui/core/FormControl';
import FormLabel from '@material-ui/core/FormLabel';





export default function SignUpSide({setValueAccess, password_confirmation, first_name, last_name, email, password, handleChange, handleSubmit}) {
  const classes = useStyles();

  const [value, setValue] = React.useState( 'landlord');

  const handleClick = (event) => {
    setValue(event.target.value);
    setValueAccess(event.target.value)
   
  };

  return (
    
    <Grid container component="main" className={classes.root}>
      <CssBaseline />
      <Grid item xs={false} sm={4} md={7} className={classes.image} />
      <Grid item xs={12} sm={8} md={5} component={Paper} elevation={6} square>
        <div className={classes.paper}>
          <Avatar className={classes.avatar}>
            <LockOutlinedIcon />
          </Avatar>
          <Typography component="h1" variant="h5">
            Sign Up
          </Typography>
          <form className={classes.form} noValidate onSubmit={handleSubmit}>
          <TextField
              variant="outlined"
              margin="normal"
              required
              fullWidth
              id="first-name"
              label="First Name"
              name="first_name"
              value={first_name}
              onChange={handleChange}
            />
              <TextField
              variant="outlined"
              margin="normal"
              required
              fullWidth
              id="last-name"
              label="Last Name"
              name="last_name"
              value={last_name}
              onChange={handleChange}
            />
            <TextField
              variant="outlined"
              margin="normal"
              required
              fullWidth
              id="email"
              label="Email Address"
              name="email"
              autoComplete="email"
              autoFocus
              value={email}
              onChange={ handleChange}
            />
            <TextField
              variant="outlined"
              margin="normal"
              required
              fullWidth
              name="password"
              label="Password"
              type="password"
              id="password"
              autoComplete="current-password"
              value={password}
              onChange={handleChange}
            />
            <TextField
              variant="outlined"
              margin="normal"
              required
              fullWidth
              name="password_confirmation"
              label="Password confirmation"
              type="password"
              id="password-confirmation"
              autoComplete="current-password"
              value={password_confirmation}
              onChange={handleChange}
            />
           <FormControl component="fieldset">
      <FormLabel component="legend">Sign In as:</FormLabel>
      <RadioGroup aria-label="gender" name="gender1" value={value} onChange={handleClick}>
        <FormControlLabel value="landlord" control={<Radio />} label="landlord" />
        <FormControlLabel value="tenant" control={<Radio />} label="tenant" />
      </RadioGroup>
    </FormControl>
            <Button
              type="submit"
              fullWidth
              variant="contained"
              color="primary"
              className={classes.submit}
            >
              Sign Up
            </Button>
            <Grid container>
              <Grid item>
                <Link to='/login' variant="body2">
                  {"Don't have an account? Sign Up"}
                </Link>
              </Grid>
            </Grid>
            <Box mt={5}>
         
            </Box>
          </form>
        </div>
      </Grid>
    </Grid>
  );
}