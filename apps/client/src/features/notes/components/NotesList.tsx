import { Fragment } from 'react';
import Divider from '@mui/material/Divider';
import { useNotes } from '../queries/useNotes';
import { NotesItem } from './NotesItem';

export const NotesList = () => {
  const { data } = useNotes();

  console.log(data);

  return (
    <>
      {data?.results.map((item, index) => (
        <Fragment key={item.id}>
          <NotesItem note={item} />
          {index !== data.results.length - 1 && <Divider component="li" />}
        </Fragment>
      ))}
    </>
  );
};
