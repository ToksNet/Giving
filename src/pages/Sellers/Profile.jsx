import "../../index.css"
import DeleteForeverIcon from '@mui/icons-material/DeleteForever';
import React, { useState } from 'react';
import Button from '@mui/material/Button';
import { styled } from '@mui/material/styles';
import { Formik, Form } from 'formik';
import { useDispatch } from 'react-redux';
import Dialog from '@mui/material/Dialog';
import DialogTitle from '@mui/material/DialogTitle';
import DialogContent from '@mui/material/DialogContent';
import DialogActions from '@mui/material/DialogActions';
import IconButton from '@mui/material/IconButton';
import CloseIcon from '@mui/icons-material/Close';
import { Checkbox, FormControlLabel } from '@mui/material';
import * as Yup from 'yup';
import BasicSelect from '../../components/DropdownInput';
import ProductImageUpload from "../../components/uploads/ProductImageUpload";
import InputField from "../../components/InputField";
import AuthButton from "../../components/AuthButton";
import { addProfile } from "../../features/profileSlice";



const validationSchema = Yup.object({
    productName: Yup.string().required('Product name is required'),
    quantity: Yup.string(),
    price: Yup.string(),
    shortDescription: Yup.string(),
    productDescription: Yup.string(),
    color: Yup.string(),
    size: Yup.string(),
    image: Yup.string(),
    inventory: Yup.number().required('Inventory is required').min(0, 'Inventory cannot be negative')
});

const BootstrapDialog = styled(Dialog)(({ theme }) => ({
    '& .MuiDialogContent-root': {
        padding: theme.spacing(2),
    },
    '& .MuiDialogActions-root': {
        padding: theme.spacing(1),
    },
}));

const options = [
    { value: 10, label: 'Ten' },
    { value: 20, label: 'Twenty' },
    { value: 30, label: 'Thirty' },
];

function Profile() {

    const [open, setOpen] = useState(false);
    const [selectedValue, setSelectedValue] = useState('');
    const [hasVariations, setHasVariations] = useState(false);
    const [image, setImage] = useState(null);
    const dispatch = useDispatch();

    const handleSelectChange = (event) => {
        setSelectedValue(event.target.value);
    };

    const handleImageSelect = (file) => {
        setImage(file);
    };

    const handleSubmit = (values, { setSubmitting, resetForm }) => {
        const profileData = {
            image: image ? `../../../public/${image.name}` : null,
            name: values.productName,
            price: values.price,
            shortDescription: values.shortDescription,
            productDescription: values.productDescription,
            color: values.color,
            size: selectedValue,
            inventory: values.inventory,
            collect: 0,
            variation: 0,
            inStock: 0,
        };

        dispatch(addProfile(profileData));

        setSubmitting(false);
        resetForm();
        setImage(null);
        setOpen(false);
    };

    const handleClickOpen = () => {
        setOpen(true);
    };

    const handleClose = () => {
        setOpen(false);
    };

    const handleVariationChange = (event) => {
        setHasVariations(event.target.checked);
    };

    return (
        <>
            <div className="p-4 md:mt-20  mt-8 md:mx-10">
                <div className="lg:flex flex-col ">
                    <div className="flex-col lg:flex-row gap-3 flex justify-between">
                        <h1 className="md:text-2xl text-lg font-bold">
                            Analytics
                        </h1>
                        <div className="md:flex items-center gap-[10px]">
                            <div className="mt-2 md:mt-0 px-[15px] py-[11px] text-[#000] rounded-[3px] font-semibold text-[12px] border border-[#000000] flex items-center gap-[10px] ">
                                <DeleteForeverIcon />
                                Delete Account
                            </div>
                        </div>

                    </div>

                </div>

            </div>

            <div className=" px-4 md:px-20 lg:px-[276px]">
                <div className='bg-[#F9F9F9] pb-[50px] rounded-bl-xl rounded-br-xl mt-10 md:mt-[71px]'>
                    <div className='rounded-[10px] w-full max-w-full'>
                        <div className='bg-[#DB4444] w-full py-[18px] pl-[55px] rounded-t-3xl text-[#FFFFFF] font-[600] text-xl'>
                            <p>Product Images</p>
                        </div>
                        <div className='mt-[30px]'>
                            <p className='text-sm text-[#000000] font-[600] opacity-[50%] pl-4 md:pl-[70px]'>Upload Profile Photo</p>
                          
                            <div className='px-4 md:px-[70px]'>
                                <ProductImageUpload onImageSelect={handleImageSelect} />
                            </div>
                        </div>
                        <div className='bg-[#DB4444] w-full py-[18px] pl-4 md:pl-[55px] mt-[37px] text-[#FFFFFF] font-[600] text-xl'>
                            <p>Product Details</p>
                        </div>
                    </div>
                    <div className=' mt-[39px]'>
                        <Formik
                            initialValues={{
                                productName: '',
                                price: '',
                                shortDescription: '',
                                productDescription: '',
                                color: '',
                                size: '',
                                inventory: 0,
                            }}
                            validationSchema={validationSchema}
                            onSubmit={handleSubmit}
                        >
                            {({ isValid, isSubmitting }) => (
                                <Form className='w-full'>
                                    <div className="px-4 md:px-[70px]">
                                    <div>
                                        <p className='mb-2 font-[600] text-sm text-[#000000] opacity-[50%]'>
                                            Full Name (Optional)<span className='text-[#FB1314] ml-1'>*</span>
                                        </p>
                                        <InputField label="Kolade David" type="text" name="productName" className="w-full mt-10" id="outlined-basic" variant="outlined" />
                                    </div>
                                    <div>
                                        <p className='mb-2 font-[600] text-sm text-[#000000] opacity-[50%]'>
                                            Store Name
                                        </p>
                                        <InputField label="Umukoro  Development Community Store" type="text" name="shortDescription" id="outlined-basic" variant="outlined" />
                                    </div>
                                    <div>
                                        <p className='mb-2 font-[600] text-sm text-[#000000] opacity-[50%]'>
                                            Email (Optional)
                                        </p>
                                        <InputField label="Product Description" type="email" name="productDescription" id="outlined-basic" variant="outlined" />
                                    </div>
                                    <div>
                                        <p className='mb-2 font-[600] text-sm text-[#000000] opacity-[50%]'>
                                            Phone Number (Optional)
                                        </p>
                                        <InputField label="Enter Phone Number" type="number" name="productDescription" id="outlined-basic" variant="outlined" />
                                    </div>

                                    </div>
                                    <div className='bg-[#DB4444] w-full py-[18px] pl-[55px] mt-[37px] text-[#FFFFFF] font-[600] text-xl'>
                                        <p>Change Password</p>
                                    </div>
                        
                                    <div className="px-4 md:px-[70px]">
                                    <div className=' mt-[30px]'>
                                        <div className='w-full'>
                                            <p className='mb-2 font-[600] text-sm text-[#000000] opacity-[50%] '>Old Password</p>
                                            <InputField label="Enter old password" type="text" name="color" id="outlined-basic" variant="outlined" className="w-full" />
                                        </div>
                                    </div>
                                    <div className='nd:flex justify-between mt-[30px]'>
                                        <div className='w-[335px]'>
                                            <p className='mb-2 font-[600] text-sm text-[#000000] opacity-[50%] '>New Password</p>
                                            <InputField label="New Password" type="text" name="color" id="outlined-basic" variant="outlined" />
                                        </div>
                                        <div className='w-[335px]'>
                                            <p className='mb-2 font-[600] text-sm text-[#000000] opacity-[50%]'>Confirm Password</p>
                                            <InputField label="Enter Confirm Password" type="text" name="price" id="singleInput" variant="outlined" />
                                        </div>
                                    </div>
                                    <div className='mt-10 flex items-center '>

                                        <div className='md:flex gap-2'>
                                            <button type="submit" className=' py-4 px-[68px] bg-[#FBECEC] font-medium text-sm text-[#DB4444]w-full'>
                                                Preview
                                            </button>
                                            <div className="mt-2">
                                            <AuthButton type="submit" disabled={!isValid || isSubmitting}>
                                                Upload Product
                                            </AuthButton>
                                            </div>
                                        </div>

                                    </div>
                                    </div>
                                </Form>
                            )}
                        </Formik>
                    </div>
                </div>
            </div>
        </>
    );
}

export default Profile;
