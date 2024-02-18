import { useEffect, useRef, useState } from 'react';
import { useParams } from 'react-router-dom';
import { MarkdownEditor, MarkdownEditorMethods } from '@backoffice/md-editor';
import { useNoteText } from '../queries/useNoteText';
import { useSaveNoteContent } from '../mutations/useSaveNoteContent';

const NotesEdit = () => {
  const { id } = useParams();
  const { data: initialText } = useNoteText(id || '');
  const [text, setText] = useState(initialText || '\r\n\r\n');
  const editorRef = useRef<MarkdownEditorMethods>(null);
  const { mutate: saveContent } = useSaveNoteContent();

  useEffect(() => {
    editorRef.current?.setMarkdown(initialText || '');
  }, [initialText]);

  useEffect(() => {
    if (!id) {
      return;
    }

    const debounceTimer = setTimeout(() => {
      saveContent({ id, text });
    }, 300);

    return () => {
      clearTimeout(debounceTimer);
    };
  }, [text, id, saveContent]);

  return (
    <MarkdownEditor
      editorRef={editorRef}
      value={text}
      onChange={setText}
      lastSaved={initialText || ''}
    />
  );
};

export default NotesEdit;
