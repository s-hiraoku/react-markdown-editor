import { useCodeMirror } from './useCodeMirror';

export type UseMarkdownEditorProps = {
  defaultValue?: string;
  onUpdated?: (value: string) => void;
};

export type UseMarkdownEditorReturnType = {
  editor: React.MutableRefObject<HTMLDivElement | null>;
};

export const useMarkdownEditor = ({
  defaultValue = '',
  onUpdated,
}: UseMarkdownEditorProps): UseMarkdownEditorReturnType => {
  const { editor } = useCodeMirror({ defaultValue, extensions: [], onUpdated });

  return {
    editor,
  };
};
