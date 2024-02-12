import { useQuery } from 'react-query';
import { getNotes } from '../services';

export const useNotes = () => {
  return useQuery('notes', {
    queryFn: async () => {
      return getNotes();
    },
  });
};
