import StarterKit from '@tiptap/starter-kit';
import Image from '@tiptap/extension-image';
import Link from '@tiptap/extension-link';
import Placeholder from '@tiptap/extension-placeholder';
import TextAlign from '@tiptap/extension-text-align';
import Underline from '@tiptap/extension-underline';

import { EditorContent, useEditor } from '@tiptap/react';

import EditorToolbar from './EditorToolbar';

type TemplateEditorProps = {
  content?: string;
  onChange?: (value: string) => void;
};

const TemplateEditor = ({ content = '', onChange }: TemplateEditorProps) => {
  const editor = useEditor({
    extensions: [
      StarterKit,

      Underline,

      Link.configure({
        openOnClick: false,
        autolink: true,
        linkOnPaste: true,
      }),

      Image,

      Placeholder.configure({
        placeholder: 'Write your template here...',
      }),

      TextAlign.configure({
        types: ['heading', 'paragraph'],
      }),
    ],

    content,

    editorProps: {
      attributes: {
        class:
          'prose prose-sm dark:prose-invert max-w-none min-h-[350px] px-4 py-4 outline-none text-(--app-text)',
      },
    },

    onUpdate: ({ editor }) => {
      onChange?.(editor.getHTML());
    },
  });

  return (
    <div className='overflow-hidden rounded-xl border border-(--app-border) bg-(--surface-primary)'>
      <EditorToolbar editor={editor} />

      <EditorContent editor={editor} />
    </div>
  );
};

export default TemplateEditor;
