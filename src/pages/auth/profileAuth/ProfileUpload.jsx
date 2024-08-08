import React, { useState } from 'react';
import { MenuItem, Select, Box, Modal, Button, Typography, Alert, IconButton } from '@mui/material';
import idcard from '../../../assets/images/idcard.png';
import idcard1 from '../../../assets/images/idcard.png';
import CancelIcon from '@mui/icons-material/Cancel';
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';

const idDocuments = ['ID Card', 'Passport', 'Driver\'s License'];

const ProfileUpload = () => {
    const [selectedDocument, setSelectedDocument] = useState('');
    const [openModal, setOpenModal] = useState(false);
    const [uploadedFiles, setUploadedFiles] = useState([null, null]);
    const [fileNames, setFileNames] = useState(['', '']);
    const [error, setError] = useState('');

    const handleDocumentChange = (event) => {
        setSelectedDocument(event.target.value);
        setOpenModal(true);
    };

    const handleFileUpload = (index, event) => {
        const file = event.target.files[0];
        if (file) {
            const newUploadedFiles = [...uploadedFiles];
            const newFileNames = [...fileNames];
            newUploadedFiles[index] = file;
            newFileNames[index] = file.name;
            setUploadedFiles(newUploadedFiles);
            setFileNames(newFileNames);
        }
    };

    const handleFileRemove = (index) => {
        const newUploadedFiles = [...uploadedFiles];
        const newFileNames = [...fileNames];
        newUploadedFiles[index] = null;
        newFileNames[index] = '';
        setUploadedFiles(newUploadedFiles);
        setFileNames(newFileNames);
    };

    const handleSave = () => {
        if (uploadedFiles.filter(file => file).length !== 2) {
            setError('You must upload exactly two documents.');
            return;
        }
        setError('');
        setOpenModal(false);
    };

    return (
        <Box>
            <div className='mt-[52px] w-full max-w-full md:w-[383px]'>
                <Select
                    value={selectedDocument}
                    onChange={handleDocumentChange}
                    displayEmpty
                    fullWidth
                >
                    <MenuItem value="" disabled>Select Document</MenuItem>
                    {idDocuments.map((doc) => (
                        <MenuItem key={doc} value={doc}>{doc}</MenuItem>
                    ))}
                </Select>
            </div>

            {fileNames.filter(name => name).length > 0 && (
                <div className='flex flex-col mt-[37px] gap-[15px]'>
                    {fileNames.filter(name => name).map((name, index) => (
                        <div key={index} className='flex items-center justify-between w-[399px] pl-[15px] py-[13px] h-[56px] radius-[5px] bg-[#FBECEC]'>
                            <Typography className='text-[15px] font-medium text-[#000000]'>{name}</Typography>
                            <IconButton onClick={() => handleFileRemove(index)} color="error">
                                <CancelIcon />
                            </IconButton>
                        </div>
                    ))}
                </div>
            )}

            <Modal
                open={openModal}
                onClose={() => setOpenModal(false)}
            >
                <Box
                    sx={{
                        position: 'absolute',
                        top: '50%',
                        left: '50%',
                        transform: 'translate(-50%, -50%)',
                        width: 900,
                        bgcolor: 'background.paper',
                        boxShadow: 24,
                        p: 4,
                        borderRadius: 5,
                        display: 'flex',
                        flexDirection: 'column',
                        gap: 2,
                    }}
                >
                    <p className='text-2xl font-bold text-[#000000] text-center'>GV3N MARKET PLACE</p>
                    <hr className='w-full h-[0.5px] mt-[27px] bg-[#000000]'></hr>
                    <div className='mt-[52px]'>
                        <Typography variant="h6" component="h2" mb={2}>
                            Kindly upload your means of identification
                        </Typography>
                        <div
                        className='md:flex gap-2 justify-between'
                        >
                            <div
                               
                            >
                              <div>
                              <Typography variant="subtitle1" sx={{ display: { xs: 'none', sm: 'block' } }}>
                                    Front View
                                </Typography>
                                <div
                                   
                                >
                                    <img
                                        src={uploadedFiles[0] ? URL.createObjectURL(uploadedFiles[0]) : idcard}
                                        alt="Front View"
                                       className='w-full max-w-full md:w-[312px]'
                                    />
                                    <input
                                        type="file"
                                        accept="image/*"
                                        style={{ display: 'none' }}
                                        onChange={(event) => handleFileUpload(0, event)}
                                    />
                                </div>
                              </div>
                            </div>
                            <div
                              
                            >
                                <Typography variant="subtitle1" sx={{ display: { xs: 'none', sm: 'block' } }}>
                                    Back View
                                </Typography>
                                <div
                                   
                                >
                                    <img
                                        src={uploadedFiles[1] ? URL.createObjectURL(uploadedFiles[1]) : idcard1}
                                        alt="Back View"
                                       className='w-full max-w-full md:w-[312px]'
                                    />
                                    <input
                                        type="file"
                                        accept="image/*"
                                        style={{ display: 'none' }}
                                        onChange={(event) => handleFileUpload(1, event)}
                                    />
                                </div>
                                
                            </div>
                            
                        </div>

                        <div className='p-[14px] radius-[10px] bg-[#E6E6E6] flex items-center mt-6 md:mt-[50px]'>
                            <LockOutlinedIcon fontSize='4px'/>
                            <p className='text-sm font-normal text-[#000000]'>The data you share will be encrypted, stored securely, and only used to verify your identity</p>
                        </div>
                        {error && (
                            <Alert severity="error" sx={{ mt: 2 }}>
                                {error}
                            </Alert>
                        )}
                        <div className='flex gap-2 mt-[55px]'>
                            <button
                                onClick={handleSave}
                                className='w-[145px] h-[56px] bg-[#DB4444] rounded text-base font-medium text-[#FFFFFF]'
                            >
                                Save
                            </button>
                            <button
                                onClick={() => setOpenModal(false)}
                                className='w-[145px] h-[56px] border border-[#FB1314] rounded text-base font-medium text-[#000000]'
                            >
                                Cancel
                            </button>
                        </div>
                        
                    </div>
                </Box>
            </Modal>
        </Box>
    );
};

export default ProfileUpload;
