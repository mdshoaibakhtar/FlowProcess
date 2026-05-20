import { useState } from 'react';

import type { Editor } from '@tiptap/react';

import {
  AlignCenter,
  AlignLeft,
  AlignRight,
  Bold,
  Heading1,
  Heading2,
  Image,
  Italic,
  Link2,
  List,
  ListOrdered,
  Underline,
} from 'lucide-react';

type EditorToolbarProps = {
  editor: Editor | null;
};

const EditorToolbar = ({ editor }: EditorToolbarProps) => {
  const [linkUrl, setLinkUrl] = useState('');

  if (!editor) {
    return null;
  }

  const buttonClass = (isActive?: boolean) =>
    `flex size-9 items-center justify-center rounded-lg border transition ${
      isActive
        ? 'border-(--accent-primary) bg-(--accent-soft) text-(--accent-strong)'
        : 'border-transparent text-(--muted-text) hover:bg-(--surface-secondary)'
    }`;

  const handleAddLink = () => {
    if (!linkUrl) {
      return;
    }

    editor
      .chain()
      .focus()
      .setLink({
        href: linkUrl,
      })
      .run();

    setLinkUrl('');
  };

  return (
    <div className='flex flex-wrap items-center gap-2 border-b border-(--app-border) p-3'>
      {/* Bold */}
      <button
        type='button'
        onClick={() => editor.chain().focus().toggleBold().run()}
        className={buttonClass(editor.isActive('bold'))}
      >
        <Bold className='size-4' />
      </button>

      {/* Italic */}
      <button
        type='button'
        onClick={() => editor.chain().focus().toggleItalic().run()}
        className={buttonClass(editor.isActive('italic'))}
      >
        <Italic className='size-4' />
      </button>

      {/* Underline */}
      <button
        type='button'
        onClick={() => editor.chain().focus().toggleUnderline().run()}
        className={buttonClass(editor.isActive('underline'))}
      >
        <Underline className='size-4' />
      </button>

      {/* H1 */}
      <button
        type='button'
        onClick={() => editor.chain().focus().toggleHeading({ level: 1 }).run()}
        className={buttonClass(editor.isActive('heading', { level: 1 }))}
      >
        <Heading1 className='size-4' />
      </button>

      {/* H2 */}
      <button
        type='button'
        onClick={() => editor.chain().focus().toggleHeading({ level: 2 }).run()}
        className={buttonClass(editor.isActive('heading', { level: 2 }))}
      >
        <Heading2 className='size-4' />
      </button>

      {/* Bullet */}
      <button
        type='button'
        onClick={() => editor.chain().focus().toggleBulletList().run()}
        className={buttonClass(editor.isActive('bulletList'))}
      >
        <List className='size-4' />
      </button>

      {/* Ordered */}
      <button
        type='button'
        onClick={() => editor.chain().focus().toggleOrderedList().run()}
        className={buttonClass(editor.isActive('orderedList'))}
      >
        <ListOrdered className='size-4' />
      </button>

      {/* Link Input */}
      <div className='ml-2 flex items-center gap-2'>
        <input
          value={linkUrl}
          onChange={(event) => setLinkUrl(event.target.value)}
          placeholder='https://'
          className='h-9 w-44 rounded-lg border border-(--app-border) bg-(--surface-primary) px-3 text-sm outline-none'
        />

        <button
          type='button'
          onClick={handleAddLink}
          className={buttonClass(editor.isActive('link'))}
        >
          <Link2 className='size-4' />
        </button>
      </div>

      <div className='mx-1 h-6 w-px bg-(--app-border)' />

      {/* Align Left */}
      <button
        type='button'
        onClick={() => editor.chain().focus().setTextAlign('left').run()}
        className={buttonClass(editor.isActive({ textAlign: 'left' }))}
      >
        <AlignLeft className='size-4' />
      </button>

      {/* Align Center */}
      <button
        type='button'
        onClick={() => editor.chain().focus().setTextAlign('center').run()}
        className={buttonClass(editor.isActive({ textAlign: 'center' }))}
      >
        <AlignCenter className='size-4' />
      </button>

      {/* Align Right */}
      <button
        type='button'
        onClick={() => editor.chain().focus().setTextAlign('right').run()}
        className={buttonClass(editor.isActive({ textAlign: 'right' }))}
      >
        <AlignRight className='size-4' />
      </button>

      {/* Image */}
      <button
        type='button'
        onClick={() => {
          const url = linkUrl;

          if (!url) {
            return;
          }

          editor.chain().focus().setImage({ src: url }).run();

          setLinkUrl('');
        }}
        className={buttonClass()}
      >
        <Image className='size-4' />
      </button>
    </div>
  );
};

export default EditorToolbar;
