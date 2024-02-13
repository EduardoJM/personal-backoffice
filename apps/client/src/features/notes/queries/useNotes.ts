import { useQuery } from 'react-query';
import { useSearchParams } from 'react-router-dom';
import { getNotes } from '../services';

export const useNotes = () => {
  const [searchParams] = useSearchParams();

  const search = searchParams.get('search') || '';

  return useQuery(['notes', search], {
    queryFn: async () => {
      return getNotes({ search });
    },
  });
};
