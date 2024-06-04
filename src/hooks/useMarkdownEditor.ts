import { useMemo } from "react";
import { useCodeMirror } from "./useCodeMirror";
import { EditorView , ViewUpdate} from '@codemirror/view';

export type UseMarkdownEditorProps = {
  doc: string | null;
  setDoc: (doc: string) => void;
};

export type UseMarkdownEditorReturnType = {
  editor: React.MutableRefObject<HTMLDivElement | null>;
};

export const useMarkdownEditor = ({ doc, setDoc }: UseMarkdownEditorProps): UseMarkdownEditorReturnType => {

  // Editorの状態が更新されたときの処理
  const updateListener = useMemo(() => {
    return EditorView.updateListener.of((update: ViewUpdate) => {
      if (update.docChanged) {
        // エディタのテキストが更新されるたびにdocを更新する
        setDoc(update.state.doc.toString());
      }
    });
  }, [setDoc]);

  const { editor } = useCodeMirror({defaultValue: doc ?? '', extensions: [updateListener] });

  return {
    editor,
  };
};