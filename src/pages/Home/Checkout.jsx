/** @format */

import React from "react";
import { Formik, Form, Field } from "formik";
import * as Yup from "yup";

const initialValues = {
	firstName: "",
	companyName: "",
	streetAddress: "",
	apartment: "",
	city: "",
	phoneNumber: "",
	emailAddress: "",
};

const validationSchema = Yup.object({
	firstName: Yup.string().required("Name is required"),
	companyName: Yup.string().required("Name of company is required"),
	streetAddress: Yup.string().required("Street address is required"),
	apartment: Yup.string().required("Apartment number/address is required"),
	city: Yup.string().required("Name of your city is required"),
	phoneNumber: Yup.string().required("Phone number is required"),
	emailAddress: Yup.string().required("Email is required"),
});

const checkout = [
	{
		image: "./images/gamingpad.png",
		item: "H1 Gamepad",
		price: "$650",
	},
	{
		image: "./images/IPS LCS GamingMonitor.png",
		item: "LCD Monitor",
		price: "$1100",
	},
];

const details = [
	{
		title: "Subtotal:",
		price: "$1750",
	},
	{
		title: "Shipping:",
		price: "Free",
	},
	{
		title: "Total:",
		price: "$1750",
	},
];

const Checkout = () => {
	return (
		<>
			<div className='md:mt-48 px-4 md:px-24'>
				{/* Section Routing/Navigation buttons */}
				<div className='text-[#808080] md:px-0  mt-[40px] text-[14px] font-[Poppins] '>
					<span className='text-[14px] text-[#808080] font-[400]'>
						Account{" "}
					</span>{" "}
					/{" "}
					<span className='text-[14px] text-[#808080] font-[400]'>
						Product{" "}
					</span>{" "}
					/{" "}
					<span className='text-[14px] text-[#808080] font-[400]'>
						View Cart{" "}
					</span>{" "}
					/ <span className='text-[#000000] font-[400] text'> Checkout</span>
				</div>

				{/* Subheading */}
				<div className='mt-[45px]'>
					<h1 className='text-[36px] font-[500] font-[inter]'>
						Billing Details
					</h1>
				</div>

				{/* Billing Contents */}
				<div className='mt-[48px]'>
					<div className='flex flex-col md:flex-row md:gap-[150px]'>
						{/* Billing Content Left Section */}
						<div className='md:w-[45%]'>
							<Formik
								initialValues={initialValues}
								validationSchema={validationSchema}>
								{({ errors }) => (
									<Form>
										<div className='mb-[32px]'>
											<label
												htmlFor='firstName'
												className='text-[16px] text-[#979494] font-[400] font-[poppins]'>
												First Name<span className='text-yellow-500'>*</span>
											</label>
											<Field
												type='text'
												name='firstName'
												className='bg-[#F5F5F5] rounded-[4px] mt-[8px] p-3 w-full'></Field>
											{errors.firstName && <small>{errors.firstName}</small>}
										</div>

										<div className='mb-[32px]'>
											<label
												htmlFor='companyName'
												className='text-[16px] text-[#979494] font-[400] font-[poppins]'>
												Company Name
											</label>
											<Field
												type='text'
												name='companyName'
												className='bg-[#F5F5F5] rounded-[4px] mt-[8px] p-3 w-full'></Field>
											{errors.companyName && (
												<small>{errors.companyName}</small>
											)}
										</div>

										<div className='mb-[32px]'>
											<label
												htmlFor='firstName'
												className='text-[16px] text-[#979494] font-[400] font-[poppins]'>
												Street Address<span className='text-yellow-500'>*</span>
											</label>
											<Field
												type='text'
												name='streetAddress'
												className='bg-[#F5F5F5] rounded-[4px] mt-[8px] p-3 w-full'></Field>
											{errors.streetAddress && (
												<small>{errors.streetAddress}</small>
											)}
										</div>

										<div className='mb-[32px]'>
											<label
												htmlFor='companyName'
												className='text-[16px] text-[#979494] font-[400] font-[poppins]'>
												Apartment, floor, etc. (optional)
											</label>
											<Field
												type='text'
												name='apartment'
												className='bg-[#F5F5F5] rounded-[4px] mt-[8px] p-3 w-full'></Field>
											{errors.apartment && <small>{errors.apartment}</small>}
										</div>

										<div className='mb-[32px]'>
											<label
												htmlFor='firstName'
												className='text-[16px] text-[#979494] font-[400] font-[poppins]'>
												Town/City<span className='text-yellow-500'>*</span>
											</label>
											<Field
												type='text'
												name='city'
												className='bg-[#F5F5F5] rounded-[4px] mt-[8px] p-3 w-full'></Field>
											{errors.city && <small>{errors.city}</small>}
										</div>

										<div className='mb-[32px]'>
											<label
												htmlFor='firstName'
												className='text-[16px] text-[#979494] font-[400] font-[poppins]'>
												Phone Number<span className='text-yellow-500'>*</span>
											</label>
											<Field
												type='number'
												name='phoneNumber'
												className='bg-[#F5F5F5] rounded-[4px] mt-[8px] p-3 w-full'></Field>
											{errors.phoneNumber && (
												<small>{errors.phoneNumber}</small>
											)}
										</div>

										<div className='mb-[32px]'>
											<label
												htmlFor='firstName'
												className='text-[16px] text-[#979494] font-[400] font-[poppins]'>
												Email Address<span className='text-yellow-500'>*</span>
											</label>
											<Field
												type='email'
												name='emailAddress'
												className='bg-[#F5F5F5] rounded-[4px] mt-[8px] p-3 w-full'></Field>
											{errors.emailAddress && (
												<small>{errors.emailAddress}</small>
											)}
										</div>

										<div className='flex md:items-center gap-[10px]'>
											<input
												type='checkbox'
												className='w-[20px] h-[20px]'
											/>
											<p className='text-[16px] font-[400] font-[poppins]'>
												Save this information for faster check-out next time
											</p>
										</div>

										<div className='mt-[32px]'>
											<button
												type='submit'
												className=' text-white bg-[#DB4444] hover:bg-[#db4444ca] transition duration-300 text-[16px] font-[500] py-[16px] px-[48px] rounded '>
												Place Order
											</button>
										</div>
									</Form>
								)}
							</Formik>
						</div>

						{/* Billing Content Right Section */}
						<div className='mt-[104px] md:mt-10 md:w-[45%]'>
							<div>
								<div>
									{checkout.map((single, index) => (
										<div
											key={index}
											className='flex items-center mb-[28px] gap-[150px] justify-between'>
											<div className='flex items-center gap-[26.12px]'>
												<img
													src={single.image}
													className='w-[48.88px]'
													alt='Gaming Pad'
												/>
												<p className='text-[16px] font-[400] font-[poppins]'>
													{single.item}
												</p>
											</div>

											<div>
												<p className='text-[16px] font-[400] font-[poppins]'>
													{single.price}
												</p>
											</div>
										</div>
									))}
								</div>

								<div>
									{details.map((item, index) => (
										<div
											key={index}
											className='flex justify-between  border-b-[1px] mb-[28px] border-[#cac8c8] pb-[16px]'>
											<p className='text-[16px] font-[400] font-[poppins]'>
												{item.title}
											</p>
											<p className='text-[16px] font-[400] font-[poppins]'>
												{item.price}
											</p>
										</div>
									))}
								</div>

								<div className='flex justify-between mb-[28px]'>
									<div className='flex gap-[16px]'>
										<img
											src='./images/Ellipse 10.png'
											className='w-[24px] h-24px'
											alt='Ellipse'
										/>
										<p className='text-[16px] font-[400] font-[poppins]'>
											Bank
										</p>
									</div>
									<div className='flex gap-[10.1px]'>
										<img
											src='./images/BKash.png'
											className=''
											alt='BKash'
										/>
										{/* <img src="./images/Visa.png" className='' alt="BKash" /> */}
										<img
											src='./images/Mastercard.png'
											className=''
											alt='BKash'
										/>
										<img
											src='./images/ArabLogo.png'
											className=''
											alt='BKash'
										/>
									</div>
								</div>

								<div>
									<div className='flex items-center gap-[16px]'>
										<img
											src='./images/Radio Button.png'
											alt='Radio Button'
										/>
										<p className='text-[16px] font-[400] font-[poppins]'>
											Cash on delivery
										</p>
									</div>
								</div>

								<div>
									<div className='mt-[32px] flex justify-center md:gap-[16px]'>
										<button className='border border-black rounded py-[16px] pl-[20px] pr-[45px] md:pl-[24px] md:pr-[100px]'>
											Coupon Code
										</button>
										<button className=' text-white bg-[#DB4444] hover:bg-[#db4444ca] transition duration-300 text-[16px] font-[500] py-[16px] px-[32px] md:px-[48px] rounded '>
											Apply Coupon
										</button>
									</div>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
		</>
	);
};

export default Checkout;
