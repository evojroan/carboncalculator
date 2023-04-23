import axios from 'axios';
const baseUrl = 'https://backend.flowcaboom.com/api/v1/co2-calculator';

export const getCountryList = async () => {
  try {
    const res = await axios.get(`${baseUrl}/countries`);
    return res.data;
  } catch (error) {
    console.error('[Get Countries failed]: ', error);
  }
};
