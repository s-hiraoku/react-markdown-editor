import { defaultKeymap } from '@codemirror/commands';
import type { Extension } from '@codemirror/state';
import { EditorView, keymap, lineNumbers } from '@codemirror/view';
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
  const extensions: Extension[] = [
    keymap.of(defaultKeymap),
    EditorView.baseTheme({ '&': { height: '95dvh' } }),
    lineNumbers(),
  ];

  const { editor } = useCodeMirror({ defaultValue, extensions, onUpdated });

  return {
    editor,
  };
};
