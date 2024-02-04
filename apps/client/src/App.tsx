import { useState } from 'react'

import { MarkdownEditor } from '@backoffice/md-editor';

function App() {
  const [markdown, setMarkdown] = useState('# hello world');

  return (
    <>
      <MarkdownEditor
        value={markdown}
        onChange={setMarkdown}
      />
    </>
  );
};

export default App
