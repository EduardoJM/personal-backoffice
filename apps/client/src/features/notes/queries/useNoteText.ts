import { useQuery } from 'react-query';
import { getNoteText } from '../services';

export const useNoteText = (id: number | string) => {
  return useQuery(['notes-text', id], () => getNoteText(id), {
    cacheTime: 0,
    retry: false,
  });
};
