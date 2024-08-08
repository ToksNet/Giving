import React, { useState } from 'react';
import { useDropzone } from 'react-dropzone';
import uploads from '../../assets/images/document-upload.png';
import HighlightOffIcon from '@mui/icons-material/HighlightOff';

const ProductImageUpload = ({ onImageSelect }) => {
    const [image, setImage] = useState(null);

    const onDrop = (acceptedFiles) => {
        const file = acceptedFiles[0];
        if (file) {
            if (file.size > 5 * 1024 * 1024) {
                alert('File size exceeds 5MB limit.');
                return;
            }
            const reader = new FileReader();
            reader.onload = () => {
                const img = new Image();
                img.onload = () => {
                    setImage({
                        file,
                        preview: reader.result,
                    });
                    onImageSelect(file); 
                };
                img.src = reader.result;
            };
            reader.readAsDataURL(file);
        }
    };

    const { getRootProps, getInputProps } = useDropzone({
        accept: { 'image/jpeg': ['.jpeg', '.jpg'], 'image/png': ['.png'], 'image/gif': ['.gif'] },
        onDrop,
    });

    const removeImage = (e) => {
        e.stopPropagation(); 
        setImage(null);
        onImageSelect(null); 
    };

    return (
        <div {...getRootProps()} style={{ cursor: 'pointer' }}>
            <input {...getInputProps()} />
            {image ? (
                <div className='w-full max-w-full flex items-center justify-center'>
                    <div className='flex flex-col items-center justify-center mt-[30px] w-full max-w-full md:w-[600px]'>
                        <button
                            className='text-[red] self-end'
                            onClick={removeImage}
                        >
                            <HighlightOffIcon />
                        </button>
                        <img
                            src={image.preview}
                            alt="Uploaded"
                            className='mt-4 w-full'
                            style={{ maxWidth: '100%', maxHeight: '300px' }}
                        />
                    </div>
                </div>
            ) : (
                <div className='w-full flex justify-center mt-[30px] h-[258px]'>
                    <div className='bg-[#FBECEC] w-full justify-center  flex flex-col items-center rounded-[10px]'>
                        <img src={uploads} alt='upload icon' />
                        <div className='mt-6'>
                            <p className='text-[12px] text-center font-normal opacity-[50%] text-[#000000]'>Drag or drop image</p>
                            <p className='text-[12px] text-center font-normal opacity-[50%] text-[#000000]'>Recommended dimension: 930px x 1163px</p>
                            <p className='text-[12px] text-center font-normal opacity-[50%] text-[#000000]'>Max file size: 5mb</p>
                        </div>
                    </div>
                </div>
            )}
        </div>
    );
};

export default ProductImageUpload;
