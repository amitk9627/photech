import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { Box, TextField, FormControl, InputLabel, OutlinedInput, InputAdornment, IconButton, Button } from '@mui/material';
import Visibility from '@mui/icons-material/Visibility';
import VisibilityOff from '@mui/icons-material/VisibilityOff';
import axios from 'axios';
import { SET_AUTH_STATE } from 'store/actions';
import { useDispatch } from 'react-redux';
import toast, { Toaster } from 'react-hot-toast';
// import { BackendUrl } from 'utils/config';

// function validateEmail(email) {
//   const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
//   return re.test(email);
// }
export const AuthLogin = () => {
  const [showPassword, setShowPassword] = useState(false);
  const [loginForm, setLoginForm] = useState({ userName: '', password: '' });
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const handleLogin = async (e) => {
    navigate('/dashboard');
  };
  return (
    <>
      <div>
        <Toaster />
      </div>
      <Box className="flex justify-center items-center py-4">
        <form className="w-full" onSubmit={handleLogin}>
          <div className="grid grid-cols-1 gap-8">
            <div>
              <FormControl fullWidth>
                <TextField
                  label="User Name"
                  // required
                  // value={loginForm.userName}
                  // onChange={(e) => setLoginForm({ ...loginForm, userName: e.target.value })}
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
                  // value={loginForm.password}
                  // onChange={(e) => setLoginForm({ ...loginForm, password: e.target.value })}
                  // required
                  autoComplete=""
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
