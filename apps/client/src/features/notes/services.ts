import { Note } from './types';
import { PaginatedResponse } from '../pagination/types';
import api from '../../config/axios';

export const getNotes = async () => {
  const { data } = await api.get<PaginatedResponse<Note>>('/api/notes/');
  return data;
};

export const getNoteText = async (id: number | string) => {
  if (!id) {
    return '';
  }
  try {
    const { data } = await api.get<string>(`/api/notes/${id}/text`);
    return data;
  } catch {
    return '';
  }
};

export const createNote = async (title: string) => {
  const { data } = await api.post<Note>('/api/notes/', { title });
  return data;
};

export const saveNoteContent = async (id: number | string, text: string) => {
  const { data } = await api.patch<Note>(`/api/notes/${id}/`, { text });
  return data;
};
