import { createTheme } from '@mui/material/styles';

const theme = createTheme({
  components: {
    MuiOutlinedInput: {
      styleOverrides: {
        root: {
          '&$focused $notchedOutline': {
            borderColor: 'red',
          },
        },
      },
    },
    MuiInputLabel: {
      styleOverrides: {
        outlined: {
          '&$focused': {
            color: 'red',
          },
        },
      },
    },
  },
});

export default theme;