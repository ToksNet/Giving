import apiClient from './apiClient';

export const registerSeller = async (sellerData) => {
  try {
    const response = await apiClient.post('/seller/register', sellerData);
    return response.data;
  } catch (error) {
    throw error.response ? error.response.data : new Error('API error');
  }
};
