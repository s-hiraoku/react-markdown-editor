import { EditorState } from "@codemirror/state";
import { EditorView } from "@codemirror/view";
import { useEffect, useRef, useState } from "react";

export const useMarkdownEditor = () => {
  const editor = useRef(null);
  const [container, setContainer] = useState<HTMLDivElement>();
  const [view, setView] = useState<EditorView>();

  // editorのrefをcontainerに設定する
  useEffect(() => {
    if (editor.current) {
      setContainer(editor.current);
    }
  }, []);

  // viewを初期化する
  useEffect(() => {
    if (!view && container) {
      const state = EditorState.create();
      const viewCurrent = new EditorView({
        state,
        parent: container,
      });
      setView(viewCurrent);
    }
  }, [view, container]);

  return {
    editor,
  };
};
