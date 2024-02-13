import { useLocation, useNavigate } from 'react-router-dom';
import ListItem from '@mui/material/ListItem';
import ListItemText from '@mui/material/ListItemText';
import { EditableLabel } from '@backoffice/ui';
import { Note } from '../types';
import { useSaveNoteTitle } from '../mutations/useSaveNoteTitle';

export interface NotesItemProps {
  note: Note;
}

export const NotesItem = ({ note }: NotesItemProps) => {
  const navigate = useNavigate();
  const { hash, search } = useLocation();
  const saveNoteTitle = useSaveNoteTitle();

  const handleGoTo = () => {
    navigate({ pathname: `/notes/${note.id}/`, hash, search });
  };

  return (
    <ListItem alignItems="flex-start" sx={{ cursor: 'pointer' }} onClick={handleGoTo}>
      <ListItemText
        primary={
          <EditableLabel
            label={note.title}
            onSave={value => saveNoteTitle.mutate({ id: note.id, title: value })}
          />
        }
      />
    </ListItem>
  );
};
