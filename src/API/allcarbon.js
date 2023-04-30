import axios from 'axios';
const baseUrl = 'https://backend.flowcaboom.com/api/v1/co2-calculator';

export async function getCountryList() {
  try {
    const response = await axios.get(`${baseUrl}/countries`);
    return response.data;
  } catch (error) {
    throw new Error(error);
  }
}

export async function getFootprintCarbon(country) {
  try {
    const response = await axios.get(
      `${baseUrl}/footprint?country_code=${country}&measurement_system=metric`
    );
    return response.data;
  } catch (error) {
    throw new Error(error);
  }
}

export async function getDietCarbon(country, dietForm) {
  try {
    const response = await axios.get(
      `${baseUrl}/diet?country_code=${country}&diet_form=${dietForm}&measurement_system=metric`
    );
    return response.data;
  } catch (error) {
    throw new Error(error);
  }
}

export async function getCarCarbon(country, distance) {
  try {
    const response = await axios.get(
      `${baseUrl}/car?country_code=${country}&distance=${distance}&measurement_system=metric`
    );
    return response.data;
  } catch (error) {
    throw new Error(error);
  }
}

export async function getFlightCarbon(country, frequency) {
  try {
    const response = await axios.get(
      `${baseUrl}/flight?country_code=${country}&frequency=${frequency}&measurement_system=metric`
    );
    return response.data;
  } catch (error) {
    throw new Error(error);
  }
}

export async function getClothesCarbon(country, amount) {
  try {
    const response = await axios.get(
      `${baseUrl}/clothes?country_code=${country}&amount=${amount}&measurement_system=metric`
    );
    return response.data;
  } catch (error) {
    throw new Error(error);
  }
}

export async function getEnergyCarbon(
  country,
  houseHold_size,
  home_size,
  energy_type
) {
  try {
    const response = await axios.get(
      `${baseUrl}/energy?country_code=${country}&household_size=${houseHold_size}&home_size=${home_size}&energy_type=${energy_type}&measurement_system=metric`
    );
    return response.data;
  } catch (error) {
    throw new Error(error);
  }
}
