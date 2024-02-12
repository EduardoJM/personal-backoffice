import { useNavigate } from 'react-router-dom';
import ListItem from '@mui/material/ListItem';
import ListItemText from '@mui/material/ListItemText';
import { Note } from '../types';

export interface NotesItemProps {
  note: Note;
}

export const NotesItem = ({ note }: NotesItemProps) => {
  const navigate = useNavigate();

  const handleGoTo = () => {
    navigate(`/notes/${note.id}/`);
  };

  return (
    <ListItem alignItems="flex-start" sx={{ cursor: 'pointer' }} onClick={handleGoTo}>
      <ListItemText
        primary={note.title}
        secondary={<>I'll be in your neighborhood doing errands this...</>}
      />
    </ListItem>
  );
};
