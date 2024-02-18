import { Suspense } from 'react';
import { Outlet } from 'react-router-dom';
import Grid from '@mui/material/Grid';
import List from '@mui/material/List';
import Typography from '@mui/material/Typography';
import { Box, Button, Stack } from '@mui/material';
import { useQueryDialog } from '@backoffice/hooks';
import { QueryTextField } from '@backoffice/ui';
import { NotesList } from './NotesList';
import { AddNoteDialog } from '../modals/AddNoteDialog';

const NotesLayout = () => {
  const { onOpen } = useQueryDialog('add');

  return (
    <Grid container spacing={2} sx={{ height: '100vh' }}>
      <Grid item xs={12} sm={6} md={5} lg={3}>
        <Stack sx={{ position: 'sticky', top: 0, left: 0, height: '100vh' }}>
          <Typography variant="h3" mb={5}>
            Anotações
          </Typography>

          <Box sx={{ display: 'flex', alignItems: 'stretch', gap: 2 }}>
            <QueryTextField label="Buscar..." queryName="search" />

            <Button variant="contained" onClick={onOpen}>
              +
            </Button>
          </Box>

          <List sx={{ flex: 1, width: '100%', maxWidth: '100%', overflowY: 'auto' }}>
            <NotesList />
          </List>
        </Stack>
      </Grid>

      <Grid item xs={12} sm={6} md={7} lg={9}>
        <Suspense fallback={<>Carregando...</>}>
          <Outlet />
        </Suspense>
      </Grid>

      <AddNoteDialog />
    </Grid>
  );
};

export default NotesLayout;
