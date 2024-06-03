import { useCodeMirror } from '../../hooks/useCodeMirror';

export const Editor: React.FC = () => {
  const { editor } = useCodeMirror({});
  return (
    <div className='bg-white rounded-r-lg rounded-l-lg'>
      <div ref={editor} />
    </div>
  );
};
