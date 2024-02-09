import { Theme, alpha } from '@mui/material';

export const createInputRootStyles = (theme: Theme) => {
  return {
    '& .MuiInputBase-root': {
      overflow: 'hidden',
      borderRadius: 4,
      backgroundColor: theme.palette.mode === 'light' ? '#F3F6F9' : '#080a23',
      border: '1px solid',
      borderColor: theme.palette.mode === 'light' ? '#E0E3E7' : '#2D3843',
      transition: theme.transitions.create(['border-color', 'background-color', 'box-shadow']),
      '&:hover': {
        backgroundColor: 'transparent',
      },
      '&.Mui-error': {
        borderColor: theme.palette.error.main,
      },
      '&.Mui-focused': {
        backgroundColor: 'transparent',
        boxShadow: `${alpha(theme.palette.primary.main, 0.25)} 0 0 0 2px`,
        borderColor: theme.palette.primary.main,
      },
    },
  };
};
