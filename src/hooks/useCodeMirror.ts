import { EditorState, type Extension } from '@codemirror/state';
import { EditorView, type ViewUpdate } from '@codemirror/view';
import { useEffect, useMemo, useRef, useState } from 'react';

export type UseCodeMirrorProps = {
  defaultValue?: string;
  extensions?: Extension[];
  onUpdated?: (value: string) => void;
};

export type UseCodeMirrorReturnType = {
  editor: React.MutableRefObject<HTMLDivElement | null>;
};

export const useCodeMirror = ({
  defaultValue = '',
  extensions = [],
  onUpdated,
}: UseCodeMirrorProps): UseCodeMirrorReturnType => {
  const editor = useRef<HTMLDivElement | null>(null);
  const [container, setContainer] = useState<HTMLDivElement>();
  const [editorView, setEditorView] = useState<EditorView>();

  const updateListener = useMemo(() => {
    return onUpdated
      ? EditorView.updateListener.of((update: ViewUpdate) => {
          if (update.docChanged) {
            onUpdated(update.state.doc.toString());
          }
        })
      : null;
  }, [onUpdated]);

  // editorのrefをcontainerに設定
  useEffect(() => {
    if (editor.current) {
      setContainer(editor.current);
    }
  }, []);

  // editorViewの初期化
  useEffect(() => {
    if (!editorView && container) {
      const state = EditorState.create({
        doc: defaultValue,
        extensions: updateListener ? [...extensions, updateListener] : extensions,
      });
      const viewCurrent = new EditorView({
        state,
        parent: container,
      });
      setEditorView(viewCurrent);
    }
  }, [editorView, container, defaultValue, extensions, updateListener]);

  return {
    editor,
  };
};
