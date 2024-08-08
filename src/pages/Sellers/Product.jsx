import React, { useEffect, useState } from "react";
import { FaPen, FaPlug, FaSearch } from "react-icons/fa";
import { AiOutlineDown } from "react-icons/ai";
import { HiCurrencyDollar } from "react-icons/hi";
import { RiContactsBookUploadFill, RiDeleteBin5Fill } from "react-icons/ri";
import { FaPlus } from "react-icons/fa6";
import { TbStack2Filled } from "react-icons/tb";
import "../../index.css"
import { MdOutlineKeyboardArrowLeft, MdOutlineKeyboardArrowRight } from "react-icons/md";
import BasicSelect from "../../components/DropdownInput";
import CreateIcon from '@mui/icons-material/Create';
import icon from '../../assets/images/icon.png'
import CustomizedDialogs from "../../components/modals/CreateProductModal";
import ConfirmDeleteModal from "../../components/modals/ConfirmDeleteModal";



function Product() {

  const handlePageChange = (page) => {
    setCurrentPage(page);
  };
  const [selectedValue, setSelectedValue] = useState('');
  const [showConfirmDelete, setShowConfirmDelete] = useState(false);
  const [products, setProducts] = useState([]);
  const [deleteIndex, setDeleteIndex] = useState(null);
  const [editingProduct, setEditingProduct] = useState(null); 
  const [showEditModal, setShowEditModal] = useState(false); 
  
  const handleSelectChange = (event) => {
    setSelectedValue(event.target.value);
  };
  const options = [
    { value: 10, label: 'Ten' },
    { value: 20, label: 'Twenty' },
    { value: 30, label: 'Thirty' },
  ];
  useEffect(() => {
    const storedProducts = JSON.parse(localStorage.getItem("products")) || [];
    setProducts(storedProducts);
  }, []);
  let [num, setNum] = useState(1)
  let [cur, setCur] = useState(1)

  const page = [
    { page: num },
    { page: num + 1 },
    { page: num + 2 },
    { page: num + 3 },
  ]

  function Next() {
    setNum(++num)
  }
  const handleDelete = () => {
    if (deleteIndex !== null) {
      const updatedProducts = products.filter((_, i) => i !== deleteIndex);
      setProducts(updatedProducts);
      localStorage.setItem("products", JSON.stringify(updatedProducts));
      setShowConfirmDelete(false);
      setDeleteIndex(null);
    }
  };

  const handleConfirmDelete = (index) => {
    setDeleteIndex(index);
    setShowConfirmDelete(true);
  };
  const handleEdit = (index) => {
    setEditingProduct(products[index]);
    setShowEditModal(true);
  };

  function Back() {
    num > 1 && setNum(--num)
  }

  const [currentPage, setCurrentPage] = useState(0);
  const itemsPerPage = 5;
  const pageCount = Math.ceil(products.length / itemsPerPage);
  const startIndex = currentPage * itemsPerPage;
  const currentProducts = products.slice(startIndex, startIndex + itemsPerPage);

  const getPageNumbers = () => {
    const totalPages = pageCount;
    const pageNumbers = [];

    if (totalPages <= 7) {
      for (let i = 1; i <= totalPages; i++) {
        pageNumbers.push(i);
      }
    } else {
      if (currentPage < 4) {
        pageNumbers.push(1, 2, 3, 4, '...', totalPages);
      } else if (currentPage >= totalPages - 4) {
        pageNumbers.push(1, '...', totalPages - 3, totalPages - 2, totalPages - 1, totalPages);
      } else {
        pageNumbers.push(1, '...', currentPage, currentPage + 1, currentPage + 2, '...', totalPages);
      }
    }
    return pageNumbers;
  };

  return (
    <>
      <div className="p-4 md:mt-20  mt-32 md:mx-10">
        <div className="flex flex-col ">
          <div className="flex-col lg:flex-row gap-3 flex justify-between">
            <h1 className="md:text-2xl text-lg font-bold">
              Track Orders
            </h1>
            <div className="flex items-center">
              <input placeholder="Search Order or Order ID " className="bg-[#F5F5F5] w-[391px] max-w-full px-5 py-[11.5px] rounded  text-[12px] font-normal" />
              <button className="bg-[#DB4444] py-[11.5px] px-3 rounded-tr-[12px] rounded-br-[12px]  font-normal text-[#FFFFFF] text-[12px] border-none">Search</button>
            </div>
            <div className="mt-3 md:mt-0">
            <BasicSelect
              label="Past 3 Months"
              options={options}
              value={selectedValue}
              onChange={handleSelectChange}
            />
            </div>
          </div>
          <div className="md:mt-4 flex flex-col-reverse lg:flex-row items-center gap-10 md:gap-28 ">
            <div className="flex flex-col lg:flex-row gap-6 md:gap-9 w-full md:w-[70%]">
              <div className="bg-[#d6f5ff] px-5 pt-12 mt-2 py-3 rounded-lg w-full">
                <div className="flex items-center justify-between">
                  <p className="text-lg font-semibold">$100.00</p>
                  <div className="bg-[#fbecec] rounded-full p-2">
                    <HiCurrencyDollar className="w-6 h-6 text-[#DB4444]" />
                  </div>
                </div>
                <div className="mt-2">
                  <p className="text-xs text-gray-500">Total Inventory Value</p>
                </div>
              </div>

              <div className="bg-[#d5edf1] px-5 pt-12 mt-2 py-3 rounded-lg w-full">
                <div className="flex items-center justify-between">
                  <p className="text-lg font-semibold">5</p>
                  <div className="bg-[#fbecec] rounded-full p-2">
                    <RiContactsBookUploadFill className="w-6 h-6 text-[#DB4444]" />
                  </div>
                </div>
                <div className="mt-2">
                  <p className="text-xs text-gray-500">Product Sold</p>
                </div>
              </div>

              <div className="bg-[#fae3e3] px-5 pt-12 mt-2 py-3 rounded-lg w-full">
                <div className="flex items-center justify-between">
                  <p className="text-lg font-semibold">1  </p>
                  <div className="bg-[#fbecec] rounded-full p-2">
                    <TbStack2Filled className="w-6 h-6 text-[#DB4444]" />
                  </div>
                </div>
                <div className="mt-2">
                  <p className="text-xs text-gray-500">Out Of Stock</p>
                </div>
              </div>
            </div>

            <div className="w-full lg:w-[20%] mt-3 md:mt-0">
              <div className="flex gap-3 justify-center items-center text-white text-sm text-center font-semibold w-full  py-[12px] rounded bg-[#DB4444]">
                <FaPlus className="" />
                <CustomizedDialogs />
              </div>
            </div>
          </div>
          <div>
            <div className="bg-[#F9F9F9] px-[30px] py-5 mt-[64px] rounded-[3px] ">
              <table className="min-w-full divide-y divide-gray-200 ">
                <thead className="">
                  <tr>
                    <th className="text-left pb-4 text-[#191919] text-sm ">Product</th>
                    <th className="text-left pb-4 text-[#191919] text-sm ">Collect</th>
                    <th className="text-left pb-4 text-[#191919] text-sm ">Variation</th>
                    <th className="text-left pb-4 text-[#191919] text-sm ">In Stock</th>
                    <th className="text-left pb-4 text-[#191919] text-sm ">Price</th>
                    <th className="text-left pb-4 text-[#191919] text-sm "></th>
                  </tr>
                </thead>
                <tbody className="divide-gray-200 ">
                {currentProducts.length > 0 ? (
                    currentProducts.map((product, index) => (
                    <tr key={index} className=" ">
                      <td className="flex items-center border-b border-b-[#EFEFEF] py-[6px] gap-1 bg-[#F9F9F9]">
                        <img src={product.image} alt={product.name} className="w-12 h-12" />
                        <p className="font-[600] text-sm text-[#191919]">{product.name}</p>
                      </td>
                      <td className=" font-normal text-[#191919] text-sm">0</td>
                      <td className=" font-normal text-[#191919] text-sm">0</td>
                      <td className=" font-normal text-[#191919] text-sm">{product.inventory}</td>
                      <td className=" font-normal text-[#191919] text-sm">${product.price}</td>
                      <td className="border-b border-b-[#EFEFEF] w-fit text-white  rounded p-2 flex justify-center items-center">
                        <button onClick={() => handleConfirmDelete(startIndex + index)} className="flex items-center justify-center"><RiDeleteBin5Fill className="text-[#DB4444] w-5 h-5" /></button>
                        <button><img src={icon} /></button>
                      </td>
                    </tr>
                  ))
                ) : (
                  <tr>
                    <td colSpan="6" className="text-center text-gray-500 py-4">No data has been added</td>
                  </tr>
                )}
                </tbody>
              </table>
            </div>
            <div className="flex  mt-4 space-x-2">
              <button
                onClick={() => handlePageChange(currentPage - 1)}
                disabled={currentPage === 0}
                className={` ${currentPage === 0 ? 'text-gray-400 cursor-not-allowed' : 'text-gray-700'} `}
              >
                <MdOutlineKeyboardArrowLeft className="w-8 h-8" />
              </button>
              {getPageNumbers().map((number, index) =>
                number === "..." ? (
                  <span key={index} className="flex items-center justify-center w-8 h-8 text-gray-700">
                    ...
                  </span>
                ) : (
                  <button
                    key={index}
                    onClick={() => handlePageChange(number - 1)}
                    className={` ${number === currentPage + 1 ? 'bg-red-500 text-white' : 'text-gray-700 border border-[#DFE3E8]'
                      } rounded w-8 h-8 flex items-center justify-center`}
                  >
                    {number}
                  </button>
                )
              )}
              <button
                onClick={() => handlePageChange(currentPage + 1)}
                disabled={currentPage === pageCount - 1}
                className={`${currentPage === pageCount - 1 ? 'text-gray-400 cursor-not-allowed' : 'text-gray-700'} `}
              >
                <MdOutlineKeyboardArrowRight className="w-8 h-8" />
              </button>
            </div>
          </div>
        </div>
      </div>
      <ConfirmDeleteModal
        open={showConfirmDelete}
        handleClose={() => setShowConfirmDelete(false)}
        handleConfirm={handleDelete}
      />

    </>
  );
}

export default Product;
