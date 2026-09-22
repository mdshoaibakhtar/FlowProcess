import { Download } from 'lucide-react';
import { useRef } from 'react';
import EmailEditor from 'react-email-editor';

const EmailBuilder = () => {
  const emailEditorRef = useRef(null);

  // Triggered when the Unlayer editor is fully loaded
  const onReady = (unlayer) => {
    console.warn('Unlayer Editor is ready', unlayer);
    // console.log('Unlayer Editor is ready', unlayer);
    // You can load a design JSON here if you have saved templates
    // unlayer.loadDesign(templateJson);
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
    <div className='border border-gray-100 rounded-xl overflow-hidden'>
      <div className='flex justify-end items-center px-1 py-2 bg-gray-200'>
        <button
          onClick={exportHtml}
          className='px-4 py-2 bg-white text-(--accent-strong) rounded border transition cursor-pointer'
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
    </div>
  );
};

export default EmailBuilder;
