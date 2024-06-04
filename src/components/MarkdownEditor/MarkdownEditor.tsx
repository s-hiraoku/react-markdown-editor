import { useCallback, useState } from 'react';
import { useMarkdownEditor } from '../../hooks/useMarkdownEditor';

export const MarkdownEditor: React.FC = () => {
  const [value, setValue] = useState<null | string>(null);

  const handleUpdated = useCallback((value: string) => {
    setValue(value);
  }, []);

  const { editor } = useMarkdownEditor({ defaultValue: value ?? '', onUpdated: handleUpdated });
  return (
    <>
      <div className='bg-white rounded-r-lg rounded-l-lg'>
        <div ref={editor} />
      </div>
    </>
  );
};
