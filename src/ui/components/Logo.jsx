import './logo.css';
import AddOnStore from 'https://new.express.adobe.com/static/add-on-sdk/sdk.js';
import React, { useRef, useEffect } from 'react';
import { toPng } from 'html-to-image';

// Assuming you have the toPng and dataURLtoBlob functions from your previous code
// Ensure that you import or define them properly

function Logo({ data }) {
  const elementRef = useRef(null);

  useEffect(() => {
    dragLogo();
  }, []); // Use useEffect to call dragLogo when the component mounts

  async function htmlToImageConvert() {
    try {
      const dataUrl = await toPng(elementRef.current, { cacheBust: false });
      console.log(dataUrl);
      return dataUrl;
    } catch (err) {
      console.error(err);
      return null;
    }
  }

  async function dragLogo() {
    const image = await htmlToImageConvert();
    if (image) {
      const elementRefBlob = await getImageBlob(image);

      AddOnStore.ready.then(() => {
        AddOnStore.app.enableDragToDocument(elementRef.current, {
          previewCallback: () => new URL(image),
          completionCallback: async () => {
            return [{ blob: elementRefBlob }];
          },
        });
      });
    } else {
      console.error('Failed to get image data.');
    }
  }

  async function getImageBlob(url) {
    return await fetch(url).then((response) => response.blob());
  }

  return (
    <div>
         <div className='container1' ref={elementRef}>
            <img className='image' src={data.logo} alt='Logo' />
            <div className='provider_name_and_company_container'>
                <label className='provider_name'>{data.name}</label>
                <label className='provider_company'>{data.company}</label>
            </div>
            <div className='provider_name_and_company_container'>
                <label className='provider_name'>{data.phoneNumber}</label>
                <label className='provider_company'>{data.email}</label>
            </div>
        </div>
        <div class="divider"/>
    </div>
   
  );
}

export default Logo;
