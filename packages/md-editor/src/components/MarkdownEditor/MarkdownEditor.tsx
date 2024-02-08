import {
  MDXEditor,
  headingsPlugin,
  listsPlugin,
  quotePlugin,
  thematicBreakPlugin,
  toolbarPlugin,
  diffSourcePlugin,
} from '@mdxeditor/editor';
import { Toolbar } from './Toolbar';
import '@mdxeditor/editor/style.css';

export interface MarkdownEditorProps {
  value: string;
  onChange: (value: string) => void;
}

export const MarkdownEditor = (props: MarkdownEditorProps) => {
  const { value, onChange } = props;

  return (
    <MDXEditor
      markdown={value}
      onChange={onChange}
      plugins={[
        headingsPlugin(),
        listsPlugin(),
        quotePlugin(),
        thematicBreakPlugin(),
        toolbarPlugin({
          toolbarContents: () => <Toolbar />,
        }),
        diffSourcePlugin({
          viewMode: 'rich-text',
        }),
      ]}
    />
  );
};
