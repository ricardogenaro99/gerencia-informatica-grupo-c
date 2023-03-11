import { ContentState, convertToRaw, EditorState } from "draft-js";
import draftToHtml from "draftjs-to-html";
import htmlToDraft from "html-to-draftjs";
import { useEffect, useState } from "react";
import { Editor } from "react-draft-wysiwyg";
import "/node_modules/react-draft-wysiwyg/dist/react-draft-wysiwyg.css";

const RichText = ({
  name,
  onChange,
  initialValue = "<p></p>\n",
  initialValueEdit,
}) => {
  const [editorState, setEditorState] = useState(EditorState.createEmpty());

  useEffect(() => {
    if (initialValue === "<p></p>\n") {
      const valueHtml = htmlToDraft(initialValue);
      const valueContentState = ContentState.createFromBlockArray(
        valueHtml.contentBlocks,
        valueHtml.entityMap
      );
      const res = EditorState.createWithContent(valueContentState);
      setEditorState(res);
    }
  }, [initialValue]);

  useEffect(() => {
    if (initialValueEdit) {
      const valueHtml = htmlToDraft(initialValueEdit);
      const valueContentState = ContentState.createFromBlockArray(
        valueHtml.contentBlocks,
        valueHtml.entityMap
      );
      const res = EditorState.createWithContent(valueContentState);
      setEditorState(res);
    }
  }, [initialValueEdit]);

  useEffect(() => {
    const valueHtml = draftToHtml(
      convertToRaw(editorState.getCurrentContent())
    );
    onChange({ target: { name, value: valueHtml } });
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [editorState]);

  return (
    <div className="form-control">
      <Editor
        editorState={editorState}
        wrapperClassName="rich-text-wrapper"
        editorClassName="rich-text-editor"
        onEditorStateChange={setEditorState}
        initialContentState={initialValue}
      />
    </div>
  );
};

export default RichText;
