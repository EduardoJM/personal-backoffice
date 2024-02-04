import {
  UndoRedo,
  BoldItalicUnderlineToggles,
  CodeToggle,
  Separator
} from '@mdxeditor/editor';

export const Toolbar = () => {

  return (
    <>
      <UndoRedo />
      <Separator />
      <BoldItalicUnderlineToggles />
      <Separator />
      <CodeToggle />
    </>
  );
};
