import { useMemo } from 'react';
import { useSearchParams } from 'react-router-dom';

export const useQueryDialog = (parameter: string) => {
  const [params, setParams] = useSearchParams();

  const isOpen = useMemo(() => {
    return !!params.get(parameter);
  }, [params]);

  const onOpen = () => {
    const newParams = new URLSearchParams(params);
    newParams.set(parameter, '1');
    setParams(newParams);
  };

  const onClose = () => {
    const newParams = new URLSearchParams(params);
    newParams.delete(parameter);
    setParams(newParams);
  };

  return { isOpen, onOpen, onClose };
};
