import { RefObject } from 'react';
import { MDXEditor, MDXEditorMethods } from '@mdxeditor/editor';
import { getPlugins } from './Plugins';
import '@mdxeditor/editor/style.css';

export interface MarkdownEditorMethods extends MDXEditorMethods {}

export interface MarkdownEditorProps {
  value: string;
  lastSaved: string;
  onChange: (value: string) => void;
  editorRef?: RefObject<MarkdownEditorMethods>;
}

export const MarkdownEditor = (props: MarkdownEditorProps) => {
  const { value, onChange, editorRef, lastSaved } = props;

  return (
    <MDXEditor
      markdown={value}
      ref={editorRef}
      onChange={onChange}
      plugins={getPlugins(lastSaved)}
    />
  );
};
