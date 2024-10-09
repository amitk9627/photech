// material-ui
// import { useTheme } from '@mui/material/styles';

/**
 * if you want to use image instead of <svg> uncomment following.
 *
 * import logoDark from 'assets/images/logo-dark.svg';
 * import logo from 'assets/images/logo.svg';
 *
 */

// ==============================|| LOGO SVG ||============================== //

const Logo = () => {
  // const theme = useTheme();

  return (
    <svg width="150" height="100" xmlns="http://www.w3.org/2000/svg">
      <text x="10" y="50" fontFamily="Arial" fontSize="35" fill="#49c401">
        PhoTech
      </text>
    </svg>
  );
};

export default Logo;
