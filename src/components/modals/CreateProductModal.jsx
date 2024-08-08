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
import ProductImageUpload from '../uploads/ProductImageUpload';
import InputField from '../InputField';
import AuthButton from '../AuthButton';
import BasicSelect from '../../components/DropdownInput';
import { addProduct } from '../../features/productSlice';

const validationSchema = Yup.object({
  productName: Yup.string().required('Product name is required'),
  quantity:Yup.string(),
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

export default function CustomizedDialogs() {
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
    const productData = {
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

    dispatch(addProduct(productData)); 

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
    <React.Fragment>
      <Button variant="outlined" onClick={handleClickOpen}>
        Add New Product
      </Button>
      <BootstrapDialog
        onClose={handleClose}
        aria-labelledby="customized-dialog-title"
        open={open}
      >
        <DialogTitle sx={{ m: 0, p: 2 }} id="customized-dialog-title">
          Create Product
          <IconButton
            aria-label="close"
            onClick={handleClose}
            sx={{
              position: 'absolute',
              right: 8,
              top: 8,
              color: (theme) => theme.palette.grey[500],
            }}
          >
            <CloseIcon />
          </IconButton>
        </DialogTitle>
        <DialogContent dividers>
          <div className='bg-[#F9F9F9] pb-[50px] rounded-bl-xl rounded-br-xl'>
            <div className='rounded-[10px] w-full max-w-full'>
              <div className='bg-[#DB4444] w-full py-[18px] pl-[55px] rounded-t-3xl text-[#FFFFFF] font-[600] text-xl'>
                <p>Product Images</p>
              </div>
              <div className='mt-[30px] ml-7'>
                <p className='text-sm text-[#000000] font-[600] opacity-[50%]'>Product Images (optional)</p>
                <p className='text-sm text-[#000000] mt-4 font-[600] opacity-[50%]'>Recommended dimension: 930px x 1163px, Max file size: 5mb</p>
                <div className='px-[70px]'>
                  <ProductImageUpload onImageSelect={handleImageSelect} />
                </div>
              </div>
              <div className='bg-[#DB4444] w-full py-[18px] pl-4 md:pl-[55px] mt-[37px] text-[#FFFFFF] font-[600] text-xl'>
                <p>Product Details</p>
              </div>
            </div>
            <div className='px-4 md:px-[70px] mt-[39px]'>
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
                    <div>
                      <p className='mb-2 font-[600] text-sm text-[#000000] opacity-[50%]'>
                        Product Name:<span className='text-[#FB1314] ml-1'>*</span>
                      </p>
                      <InputField label="Product Name" type="text" name="productName" className="w-full mt-10" id="outlined-basic" variant="outlined" />
                    </div>
                    <div>
                      <p className='mb-2 font-[600] text-sm text-[#000000] opacity-[50%]'>
                        Short Description (Optional)
                      </p>
                      <InputField label="Short Description" type="text" name="shortDescription" id="outlined-basic" variant="outlined" />
                    </div>
                    <div>
                      <p className='mb-2 font-[600] text-sm text-[#000000] opacity-[50%]'>
                        Product Description (Optional)
                      </p>
                      <InputField label="Product Description" type="text" name="productDescription" multiline id="outlined-basic" variant="outlined" />
                    </div>
                    <div className='lg:flex justify-between'>
                      <div>
                        <p className='mb-2 font-[600] text-sm text-[#000000] opacity-[50%] w-[335px]'>Color</p>
                        <InputField label="Color" type="text" name="color" id="outlined-basic" variant="outlined" />
                      </div>
                      <div className='w-[335px]'>
                        <p className='mb-2 font-[600] text-sm text-[#000000] opacity-[50%]'>Sizes</p>
                        <BasicSelect
                          label="Sizes"
                          options={options}
                          value={selectedValue}
                          onChange={handleSelectChange}
                          className="w-full"
                        />
                      </div>
                    </div>
                    <div>
                      <p className='mb-2 font-[600] text-sm text-[#000000] opacity-[50%]'>
                        Inventory:<span className='text-[#FB1314] ml-1'>*</span>
                      </p>
                      <InputField label="Inventory" type="number" name="inventory" id="outlined-basic" variant="outlined" />
                    </div>
                    <div>
                                            <p className='mb-2 font-[600] text-sm text-[#000000] opacity-[50%]'>Does this product have variations?</p>
                                            <FormControlLabel
                                                control={
                                                    <Checkbox
                                                        checked={hasVariations}
                                                        onChange={handleVariationChange}
                                                        name="hasVariations"
                                                    />
                                                }
                                                label="Yes"
                                            />
                                            <FormControlLabel
                                                control={
                                                    <Checkbox
                                                        checked={!hasVariations}
                                                        onChange={() => setHasVariations(false)}
                                                        name="noVariations"
                                                    />
                                                }
                                                label="No, it doesn’t"
                                            />
                                        </div>
                                        {hasVariations ? (
                                            <div>
                                                <div className='mt-[30px]'>
                                                    <p className='mb-2 font-[600] text-sm text-[#000000] opacity-[50%]'>Pricing</p>
                                                    <InputField label="Enter amount" type="text" name="price" id="singleInput" variant="outlined" />
                                                </div>
                                                <div className='flex gap-20'>
                                                    <div className=' w-1/2'>
                                                        <p className='mb-2 font-[600] text-sm text-[#000000] opacity-[50%]'>Cost Price</p>
                                                        <InputField label="Cost Price" type="text" name="singleInput" id="singleInput" variant="outlined" className="w-full" />
                                                    </div>
                                                    <div className=' w-1/2'>
                                                        <p className='mb-2 font-[600] text-sm text-[#000000] opacity-[50%]'>Discounted Price (Optional)</p>
                                                        <InputField label="Discounted Price " type="text" name="singleInput" id="singleInput" variant="outlined" className="w-full" />
                                                    </div>
                                                </div>
                                            </div>
                                        ) : (
                                            <div className='mt-[30px]'>
                                                <p className='mb-2 font-[600] text-sm text-[#000000] opacity-[50%]'>Pricing</p>
                                                <InputField label="Enter amount" type="text" name="price" id="singleInput" variant="outlined" />
                                            </div>
                                        )}

                                        <div className='bg-[#DB4444] w-full py-[18px] pl-[55px] mt-[37px] text-[#FFFFFF] font-[600] text-xl'>
                                            <p>Inventory</p>
                                        </div>
                                        <div className='flex justify-between mt-[30px]'>
                                            <div className='w-[335px]'>
                                                <p className='mb-2 font-[600] text-sm text-[#000000] opacity-[50%] '>Color</p>
                                                <InputField label="Color" type="text" name="color" id="outlined-basic" variant="outlined" />
                                            </div>
                                            <div className='w-[335px]'>
                                                <p className='mb-2 font-[600] text-sm text-[#000000] opacity-[50%]'>Sizes</p>
                                                <InputField label="Enter amount" type="text" name="price" id="singleInput" variant="outlined" />
                                            </div>
                                        </div>
                                        <div className='flex justify-between '>
                                            <div className='w-[335px]'>
                                                <p className='mb-2 font-[600] text-sm text-[#000000] opacity-[50%] '>Color</p>
                                                <InputField label="Color" type="text" name="color" id="outlined-basic" variant="outlined" className="w-full" />
                                            </div>
                                        </div>
                                        <div className='mt-10 flex items-center justify-between'>
                                            <div>
                                                <button type="submit " className='py-4 px-[55px] bg-[#fff] border border-[#000000] font-medium text-sm text-[#595959]'>
                                                    Clear Fields
                                                </button>
                                            </div>
                                            <div className='flex gap-2'>
                                                <button type="submit" className=' py-4 px-[68px] bg-[#FBECEC] font-medium text-sm text-[#DB4444]'>
                                                    Preview
                                                </button>
                                                <AuthButton type="submit" disabled={!isValid || isSubmitting}>
                                                    Upload Product
                                                </AuthButton>
                                            </div>

                                        </div>
                                    </Form>
                                )}
                            </Formik>
                        </div>
                    </div>
                </DialogContent>
      </BootstrapDialog>
    </React.Fragment>
  );
}
