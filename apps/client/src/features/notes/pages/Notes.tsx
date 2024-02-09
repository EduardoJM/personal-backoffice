import { useState } from 'react';
import Grid from '@mui/material/Grid';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import Divider from '@mui/material/Divider';
import ListItemText from '@mui/material/ListItemText';
import { MarkdownEditor } from '@backoffice/md-editor';

const Notes = () => {
  const [markdown, setMarkdown] = useState('# hello world');

  return (
    <Grid container spacing={2} sx={{ height: '100vh' }}>
      <Grid item xs={2}>
        <List sx={{ width: '100%', maxWidth: '100%', bgcolor: 'background.paper' }}>
          <ListItem alignItems="flex-start">
            <ListItemText
              primary="Brunch this weekend?"
              secondary={<>I'll be in your neighborhood doing errands this...</>}
            />
          </ListItem>
          <Divider component="li" />
          <ListItem alignItems="flex-start">
            <ListItemText
              primary="Brunch this weekend?"
              secondary={<>I'll be in your neighborhood doing errands this...</>}
            />
          </ListItem>
          <Divider component="li" />
          <ListItem alignItems="flex-start">
            <ListItemText
              primary="Brunch this weekend?"
              secondary={<>I'll be in your neighborhood doing errands this...</>}
            />
          </ListItem>
        </List>
      </Grid>
      <Grid item xs={10}>
        <MarkdownEditor value={markdown} onChange={setMarkdown} />
      </Grid>
    </Grid>
  );
};

export default Notes;
