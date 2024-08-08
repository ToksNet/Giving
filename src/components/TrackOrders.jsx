// src/components/TrackOrders.js
import React, { useState } from 'react';
import { trackOrders } from '../constants/constants';
import BasicSelect from './DropdownInput';
import avatar from '../assets/images/Avatar.png'
import map from '../assets/images/map.png'
import FmdGoodOutlinedIcon from '@mui/icons-material/FmdGoodOutlined';
import CancelIcon from '@mui/icons-material/Cancel';
const TrackOrders = () => {
    const [selectedStatus, setSelectedStatus] = useState('orders');
    const [selectedValue, setSelectedValue] = useState('');
    const [selectedOrder, setSelectedOrder] = useState(null); // State to hold the selected order
    const [isModalOpen, setIsModalOpen] = useState(false); // State to control modal visibility

    const uniqueStatuses = [...new Set(trackOrders.map(order => order.status.trim().toLowerCase()))];

    const handleStatusChange = (status) => {
        setSelectedStatus(status);
    };

    const filteredOrders = trackOrders.filter(order => order.status.trim().toLowerCase() === selectedStatus);

    const handleSelectChange = (event) => {
        setSelectedValue(event.target.value);
    };

    const handleViewDetails = (order) => {
        setSelectedOrder(order);
        setIsModalOpen(true);
    };

    const closeModal = () => {
        setIsModalOpen(false);
        setSelectedOrder(null);
    };

    const options = [
        { value: 10, label: 'Ten' },
        { value: 20, label: 'Twenty' },
        { value: 30, label: 'Thirty' },
    ];

    const Modal = ({ isOpen, onClose, children }) => {
        if (!isOpen) return null;

        return (
            <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 ">
                <div className="bg-white p-4 relative rounded-lg w-fit h-[700px] overflow-scroll md:p-12">
                    <button
                        onClick={onClose}
                        className="absolute top-2 right-2  "
                    >
                       < CancelIcon className='text-[#EB5757]'/>
                    </button>
                    <div>{children}</div>
                </div>
            </div>
        );
    };

    return (
        <div>
            <div className='flex items-center gap-6 mt-[68px]'>
                <p>List of order: 100</p>
                <BasicSelect
                    label="Show 25 entries"
                    options={options}
                    value={selectedValue}
                    onChange={handleSelectChange}
                />
            </div>
            <div className='flex hap-4 justify-between mt-[78px]'>
                <div className='flex gap-6'>
                    {uniqueStatuses.map(status => (
                        <button
                            key={status}
                            onClick={() => handleStatusChange(status)}
                            className={selectedStatus === status ? 'active-track' : 'button-track'}
                        >
                            {status.charAt(0).toUpperCase() + status.slice(1)}
                        </button>
                    ))}
                </div>
                <button className='bg-[#DB4444] font-medium text-sm text-[#FFFFFF] border-none cursor-pointer p-4 rounded-[3px]'>
                    Create Order
                </button>
            </div>
            <div className='w-full max-w-full flex items-center justify-center'>
                <div className='mt-12 grid grid-cols-2 justify-center items-center gap-x-[88px] gap-y-[50px]'>
                    {filteredOrders.map(order => (
                        <div key={order.id} className='bg-white w-full py-5 flex px-[26px] gap-7 shadow-[#00000040] rounded-[10px]' style={{ boxShadow: '0 4px 6px #00000040' }}>
                            <div className='w-[120px]'>
                                <img src={order.image} alt={order.prodName} className='w-full' />
                            </div>
                            <div className='w-full'>
                                <div className='flex items-center justify-between w-full'>
                                    <h3 className='font-medium text-base text-[#000000]'>{order.prodName}</h3>
                                    <p className='font-bold text-base text-[#000000]'>Price: ${order.price}</p>
                                </div>
                                <p className='text-sm font-normal text-[#000000]'>Color: <span className='font-bold text-sm text-[#000000] ml-6'>red</span></p>
                                <p className='mt-[13px] font-normal text-sm text-[#000000]'>Size: <span className='ml-6'>medium</span></p>
                                <div className='mt-[49px] flex justify-between'>
                                    <p className='font-bold text-sm text-[#000000]'>Color: <span className='font-normal text-sm text-[#000000] ml-6'>red</span></p>
                                    <p
                                        onClick={() => handleViewDetails(order)}
                                        className='text-[red] cursor-pointer'
                                    >
                                        View more details
                                    </p>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>

            <Modal isOpen={isModalOpen} onClose={closeModal}>
                {selectedOrder && (
                    <div>
                        <p className='text-[20px] text-[#000000]'><span className='font-bold mr-4'>Order No:</span>{selectedOrder.id}</p>
                        <div className='flex gap-[85px] items-center mt-[70px]'>
                            <div className='w-[350px]'>
                                <img src={selectedOrder.image} alt={selectedOrder.prodName} className='w-full ' />
                            </div>
                            <div className='w-[582px]'>
                                <h2 className='text-lg font-medium'>{selectedOrder.prodName}</h2>
                                <p className='text-lg font-medium text-[#DB4444] mt-2'>${selectedOrder.price}</p>
                                <p className='text-[#807D7E] text-base mt-2 leading-[33.5px]'>The DualShock 4 Wireless Controller features familiar controls, and incorporates several innovative features to usher in a new era of interactive experiences. Its definitive analog sticks and trigger buttons have been improved for greater feel and sensitivity. </p>
                            </div>
                        </div>
                        <hr className='w-full bg-[#FBECEC] h-[14px] mt-[29px]'></hr>

                        <div className='mt-[52px]'>
                            <h1 className='font-bold text-xl text-[#000000]'>Buyer’s  Details</h1>

                            <div className='flex items-center gap-[88px]'>
                                <div>
                                    <div>
                                        <div className='flex items-center gap-[7px] mt-[50px]'>
                                            <div>
                                                <img src={avatar} alt="profile image" />
                                            </div>
                                            <div>
                                                <p className='text-[15px] font-normal text-[#2F2E36]'>James . I</p>
                                                <p className='text-[13px] text-[#B8B8B8] font-normal'>4,9</p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className='mt-[25px]'>
                                    <div className='flex items-center  gap-3  '>
                                        <FmdGoodOutlinedIcon className='text-[#4CAF50]' />
                                        <div>
                                            <p className=' text-[12px] font-bold'>111 Bijoy sarani, Dhaka,</p>
                                            <p className='text-[13px] font-normal text-[#B8B8B8]'>Bangledesh.</p>
                                        </div>
                                    </div>
                                    <div className='flex items-center  gap-3 mt-[17px] '>
                                        <FmdGoodOutlinedIcon className='text-[#4CAF50]' />
                                        <div>
                                            <p className=' text-[12px] font-bold'>111 Bijoy sarani, Dhaka,</p>
                                            <p className='text-[13px] font-normal text-[#B8B8B8]'>Bangledesh.</p>
                                        </div>
                                    </div>
                                    <div className='flex items-center  gap-3 mt-[17px]'>
                                        <FmdGoodOutlinedIcon className='text-[#4CAF50]' />
                                        <p className='font-normal text-[12px]'><span className='font-bold'>Phone no:</span> 07038941107</p>
                                    </div>
                                </div>
                                <div>
                                <img src={map} alt="map" />
                            </div>
                            </div>
                           
                        </div>
                        {/* 
            <p>Price: ${selectedOrder.price}</p>
            <p>Color: {selectedOrder.color}</p>
            <p>Size: {selectedOrder.size}</p>
         
            <p>Order Number: {selectedOrder.id}</p> */}
                        <button onClick={closeModal} className='bg-gray-500 text-white p-2 rounded mt-4'>Close</button>
                    </div>
                )}
            </Modal>
        </div>
    );
};

export default TrackOrders;
