import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { Box, TextField, FormControl, InputLabel, OutlinedInput, InputAdornment, IconButton, Button } from '@mui/material';
import Visibility from '@mui/icons-material/Visibility';
import VisibilityOff from '@mui/icons-material/VisibilityOff';
import axios from 'axios';
import { SET_AUTH_STATE } from 'store/actions';
import { useDispatch } from 'react-redux';
import { BackendUrl } from 'utils/config';
import LoaderCircular from 'ui-component/LoaderCircular';
export const AuthLogin = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [showPassword, setShowPassword] = useState(false);
  const [loginForm, setLoginForm] = useState({ userName: '', password: '' });
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const funcSetRole = (role) => {
    if (role) {
      localStorage.setItem('role', window.btoa(role));

      dispatch({
        type: SET_AUTH_STATE,
        payload: { role }
      });
    }
  };

  const handleLogin = async (e) => {
    e.preventDefault();
    try {
      if (loginForm.userName == '' || loginForm.password == '') {
        window.alert('Missing Field .... ');
        return;
      }
      setIsLoading(true);
      const body = {
        userName: String(loginForm.userName).trim(),
        password: loginForm.password
      };

      const response = await axios.post(`${BackendUrl}/user/login`, body);
      console.log(response.data);
      if (response.status == 200) {
        setIsLoading(false);
        funcSetRole(response.data.role);
        navigate('/dashboard');
      }
    } catch (err) {
      setIsLoading(false);
      window.alert(err.response.data.message);
      console.log(err.response.data.message);
    }
  };
  return (
    <>
      {isLoading && (
        <div>
          <LoaderCircular />
        </div>
      )}
      <Box className="flex justify-center items-center py-4">
        <form className="w-full" onSubmit={handleLogin}>
          <div className="grid grid-cols-1 gap-8">
            <div>
              <FormControl fullWidth>
                <TextField
                  label="User Name"
                  required
                  value={loginForm.userName}
                  onChange={(e) => setLoginForm({ ...loginForm, userName: e.target.value })}
                />
              </FormControl>
            </div>
            <div>
              <FormControl fullWidth variant="outlined">
                <InputLabel htmlFor="outlined-adornment-password">Password</InputLabel>
                <OutlinedInput
                  id="outlined-adornment-password"
                  type={showPassword ? 'text' : 'password'}
                  endAdornment={
                    <InputAdornment position="end">
                      <IconButton aria-label="toggle password visibility" onClick={() => setShowPassword((show) => !show)} edge="end">
                        {showPassword ? <VisibilityOff /> : <Visibility />}
                      </IconButton>
                    </InputAdornment>
                  }
                  label="Password"
                  value={loginForm.password}
                  onChange={(e) => setLoginForm({ ...loginForm, password: e.target.value })}
                  required
                />
              </FormControl>
            </div>
            <div>
              <Button type="submit" variant="contained" className="bg-blue-700 text-lg" fullWidth>
                Login
              </Button>
            </div>
          </div>
        </form>
      </Box>
    </>
  );
};
