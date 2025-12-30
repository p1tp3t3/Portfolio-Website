import React, { useRef, useEffect, useState } from 'react';
import Cropper from 'react-cropper';

const ImageCropper = ({ preview, onCropped, setPreview }) => {
  const cropperRef = useRef(null)
  const [image, setImage] = useState()

  useEffect(() => {
    if(preview) {
        setImage(preview)
    }
  }, [preview])

  const handleCrop = () => {
    const cropper = cropperRef.current?.cropper
    if (!cropper) return

    const canvas = cropper.getCroppedCanvas({
      width: 600,
      height: 600,
    })

    canvas.toBlob((blob) => {
      if(blob) {
        onCropped?.(blob)  // pass blob to parent
      }
    }, 'image/jpeg', 1)
  }

  const handleDiscard = () => {
    alert('discard')
    setImage(null)
    setPreview(null)
  }

  return (
    <div className="space-y-4">
      {image && (
        <>
        <Cropper
            src={image}
            style={{ height: 300, width: '100%' }}
            initialAspectRatio={1}
            aspectRatio={1}
            guides={false}
            viewMode={1}
            ref={cropperRef}
            zoomable={false}
            zoomOnWheel={false}
            zoomOnTouch={false}
        />
        <div className='flex justify-center gap-3 mt-2'>
            <button 
              onClick={handleDiscard} 
              className="px-4 py-2 bg-gray-500 text-white rounded"
            >
              Discard
            </button>
            <button 
              onClick={handleCrop} 
              className="px-4 py-2 bg-blue-600 text-white rounded"
            >
              Save Changes
            </button>
        </div>
        </>
      )}
    </div>
  )
}

export default ImageCropper;
