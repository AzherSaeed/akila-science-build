import { createTheme } from '@mui/material/styles';
import palette from './palette';
import typography from './typography';
import components from './components';

const themeOptions = {
  mode: 'light',
  palette,
  typography,
  components,
};

const theme = createTheme(themeOptions);

export default theme;
