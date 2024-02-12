import Grid from '@mui/material/Grid';
import List from '@mui/material/List';
import { Button } from '@mui/material';
import { NotesList } from '../components/NotesList';
import { AddNoteDialog } from '../modals/AddNoteDialog';
import { useQueryDialog } from '@backoffice/hooks';
import { EditorArea } from '../components/EditorArea';

const Notes = () => {
  const { onOpen } = useQueryDialog('add');

  return (
    <Grid container spacing={2} sx={{ height: '100vh' }}>
      <Grid item xs={2}>
        <Button variant="contained" onClick={onOpen}>
          Q?
        </Button>

        <List sx={{ width: '100%', maxWidth: '100%', bgcolor: 'background.paper' }}>
          <NotesList />
        </List>
      </Grid>
      <Grid item xs={10}>
        <EditorArea />
      </Grid>

      <AddNoteDialog />
    </Grid>
  );
};

export default Notes;
