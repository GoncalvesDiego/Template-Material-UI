import React, { useState } from 'react';
import { FormControl, InputLabel, Input, FormHelperText, Grid } from '@mui/material';

const Login = () => {
  const [login, setLogin] = useState('');

  return (
    <Grid item xs={12}>
      <FormControl fullWidth>
        <InputLabel htmlFor="login-nome">Login</InputLabel>
        <Input
          id="login-nome"
          aria-describedby="login_nome_helper_text"
          value={login}
          onChange={(e) => {
            setLogin(e.target.value);
          }}
        />
        <FormHelperText id="login_nome_helper_text">Login.</FormHelperText>
      </FormControl>
    </Grid>
  );
};

export default Login;
