import {
  headingsPlugin,
  listsPlugin,
  quotePlugin,
  thematicBreakPlugin,
  toolbarPlugin,
  diffSourcePlugin,
} from '@mdxeditor/editor';
import { Toolbar } from './Toolbar';

export const getPlugins = (lastSavedText: string) => {
  return [
    headingsPlugin(),
    listsPlugin(),
    quotePlugin(),
    thematicBreakPlugin(),
    toolbarPlugin({
      toolbarContents: () => <Toolbar />,
    }),
    diffSourcePlugin({
      viewMode: 'rich-text',
      diffMarkdown: lastSavedText,
    }),
  ];
};
