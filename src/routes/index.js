import { useRoutes, useNavigate } from 'react-router-dom';
import { useEffect, useState } from 'react';
// routes
import MainRoutes from './MainRoutes';
import AuthenticationRoutes from './AuthenticationRoutes';
import { useSelector, useDispatch } from 'react-redux';
import axios from 'axios';
import { LOGOUT } from 'store/actions';

import { BackendUrl } from 'utils/config';
// ==============================|| ROUTING RENDER ||============================== //

export default function ThemeRoutes() {
  const customization = useSelector((state) => state.customization);
  const dispatch = useDispatch();
  const localRole = !!window?.atob(localStorage.getItem('role'));
  const navigate = useNavigate();
  const [redirected, setRedirected] = useState(false);

  const handleLogout = async () => {
    localStorage.removeItem('role');
    console.log('logout');
    navigate('/login');
    dispatch({
      type: LOGOUT
    });
  };

  useEffect(() => {
    if (!localStorage.getItem('role')) {
      handleLogout();
      setRedirected(false);
    } else {
      setRedirected(true);
    }
  }, [navigate, localRole]);

  const routes = redirected ? [MainRoutes] : [AuthenticationRoutes];

  return useRoutes(routes);
}
