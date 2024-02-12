import { useMutation, useQueryClient } from 'react-query';
import { createNote } from '../services';
import { Note } from '../types';

interface Variables {
  title: string;
}

export const useCreateNote = () => {
  const client = useQueryClient();

  return useMutation<Note, unknown, Variables>({
    mutationFn: async ({ title }) => {
      const data = await createNote(title);
      await client.invalidateQueries('notes');
      await client.refetchQueries('notes');
      return data;
    },
  });
};
