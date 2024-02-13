import { useMutation, useQueryClient } from 'react-query';
import { updateNoteTitle } from '../services';
import { Note } from '../types';

interface Variables {
  id: number | string;
  title: string;
}

export const useSaveNoteTitle = () => {
  const client = useQueryClient();

  return useMutation<Note, unknown, Variables>({
    mutationFn: async ({ id, title }) => {
      const data = await updateNoteTitle(id, title);

      await client.invalidateQueries('notes');
      await client.refetchQueries('notes');

      return data;
    },
  });
};
