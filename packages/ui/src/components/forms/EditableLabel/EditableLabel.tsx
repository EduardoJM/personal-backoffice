import { useState, MouseEvent } from 'react';
import { Box, IconButton } from '@mui/material';
import { MdEdit } from 'react-icons/md';
import { EditableLabelForm } from './EditableLabelForm';
import './EditableLabel.scss';

export interface EditableLabelProps {
  label: string;
  onSave: (value: string) => void;
}

export const EditableLabel = ({ label, onSave }: EditableLabelProps) => {
  const [isEditing, setIsEditing] = useState(false);

  const handleEdit = (e: MouseEvent) => {
    e.preventDefault();
    e.stopPropagation();
    setIsEditing(true);
  };

  const handleSave = (value: string) => {
    onSave(value);
    setIsEditing(false);
  };

  if (!isEditing) {
    return (
      <Box className="editable-label">
        {label || 'Sem título'}
        <IconButton className="edit-button" aria-label="Editar" onClick={handleEdit}>
          <MdEdit size={16} />
        </IconButton>
      </Box>
    );
  }

  return (
    <EditableLabelForm
      initialValue={label}
      onSave={handleSave}
      onCancel={() => setIsEditing(false)}
    />
  );
};
