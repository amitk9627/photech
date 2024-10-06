// material-ui
import { Link, Typography, Stack } from '@mui/material';

// ==============================|| FOOTER - AUTHENTICATION 2 & 3 ||============================== //

const AuthFooter = () => (
  <Stack direction="row" justifyContent="space-between">
    <Typography variant="subtitle2" component={Link} href="https://photech.in/" target="_blank" underline="hover">
      PhoTech IT Solution 
    </Typography>
  </Stack>
);

export default AuthFooter;
