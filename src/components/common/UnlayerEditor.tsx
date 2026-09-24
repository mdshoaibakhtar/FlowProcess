import { Download } from 'lucide-react';
import { useRef } from 'react';
import EmailEditor from 'react-email-editor';
import templateJSON from '../../assets/template.json';

const EmailBuilder = () => {
  const emailEditorRef = useRef(null);

  // Triggered when the Unlayer editor is fully loaded
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const onReady = (unlayer: any) => {
    unlayer.loadDesign(templateJSON);
  };

  // const onLoad = () => {
  //   // Look inside your wrapper container for the generated iframe
  //   const iframe = document.getElementById('editor');
  //   console.log('iframe', iframe);
  //   if (iframe) {
  //     iframe.setAttribute('allow', 'unload');
  //   }
  // };
  // Export the design as HTML and JSON
  // Need to check if the role is not satisfied.
  //
  const exportHtml = () => {
    // toast.success('Exporting HTML', { autoClose: 3000 });
    // if (emailEditorRef.current) {
    //   emailEditorRef.current.editor.exportHtml((data) => {
    // const { design, html } = data;
    // console.log('Exported Design JSON:', design);
    // console.log('Exported HTML:', html);
    // alert('HTML exported to console log!');
    // });
    // }
  };

  return (
    <div className='border border-gray-100 rounded-md overflow-hidden'>
      <div className='flex justify-between items-center px-1 py-2 bg-gray-200'>
        <input
          type='text'
          className='flex w-1/4 border border-(--app-border) bg-(--surface-secondary) text-(--app-text) placeholder:text-(--muted-text) px-2 h-10 rounded-md text-sm focus:outline-none focus:ring-1 focus:ring-(--accent-strong)'
          placeholder='Enter Template Name'
        />
        <button
          onClick={exportHtml}
          className='px-4 py-2 w-1/8 bg-white text-(--accent-strong) rounded-md border transition cursor-pointer'
        >
          Export HTML
          <Download className='inline-block ml-2 w-4 h-4' />
        </button>
      </div>

      <div className='flex-1'>
        <EmailEditor
          ref={emailEditorRef}
          onReady={onReady}
          // onLoad={onLoad}
          options={{
            displayMode: 'email',
            version: 'latest',
            appearance: {
              theme: 'modern_light', // Free tier theme
            },
          }}
        />
      </div>
      <div className='flex justify-between px-2 py-4'>
        <p className='text-xs text-gray-500'>
          Note: The Unlayer editor is a third-party library. Please refer to their documentation for
          more details.
        </p>
        <div className='flex gap-2 w-1/2 justify-end'>
          <button className='flex justify-center items-center py-2 border w-1/4 rounded-md transition cursor-pointer bg-(--accent-strong) text-white border-(--accent-strong)'>
            Save
          </button>
          <button className='flex justify-center items-center py-2 border w-1/4 rounded-md text-(--accent-strong) bg-(--accent-light) transition cursor-pointer'>
            Cancel
          </button>
        </div>
      </div>
    </div>
  );
};

export default EmailBuilder;
