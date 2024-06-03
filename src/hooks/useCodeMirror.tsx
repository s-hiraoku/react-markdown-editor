import { EditorState, type Extension } from '@codemirror/state';
import { EditorView } from '@codemirror/view';
import { useEffect, useRef, useState } from 'react';

export type UseCodeMirrorProps = {
  defaultValue?: string;
  extensions?: Extension[];
};

export type UseCodeMirrorReturnType = {
  editor: React.MutableRefObject<HTMLDivElement | null>;
};

export const useCodeMirror = ({ defaultValue = '', extensions = [] }: UseCodeMirrorProps): UseCodeMirrorReturnType => {
  const editor = useRef<HTMLDivElement | null>(null);
  const [container, setContainer] = useState<HTMLDivElement>();
  const [editorView, setEditorView] = useState<EditorView>();

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
        extensions: [...extensions],
      });
      const viewCurrent = new EditorView({
        state,
        parent: container,
      });
      setEditorView(viewCurrent);
    }
  }, [editorView, container, defaultValue, extensions]);

  return {
    editor,
  };
};
