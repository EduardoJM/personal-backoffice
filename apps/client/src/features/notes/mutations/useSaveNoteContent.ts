import { useMutation } from 'react-query';
import { saveNoteContent } from '../services';
import { Note } from '../types';

interface Variables {
  id: number | string;
  text: string;
}

export const useSaveNoteContent = () => {
  return useMutation<Note, unknown, Variables>({
    mutationFn: ({ id, text }) => saveNoteContent(id, text),
  });
};
