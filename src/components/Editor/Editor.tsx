import { useCallback, useState } from 'react';
import { useMarkdownEditor } from '../../hooks/useMarkdownEditor';

export const Editor: React.FC = () => {
  const [doc, setDoc] = useState<null | string>(null);

  const save = useCallback(() => {

  }, [doc]);

  const { editor } = useMarkdownEditor({doc,setDoc});
  return (
    <div className='bg-white rounded-r-lg rounded-l-lg'>
      <div ref={editor} />
    </div>
  );
};
