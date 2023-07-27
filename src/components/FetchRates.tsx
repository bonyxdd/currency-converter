import axios from "axios";

export let conversionRates = {};

export const fetchRates = async () => {
  try {
    await axios
      .get(
        "https://v6.exchangerate-api.com/v6/008f806407234c56e711196a/latest/USD"
      )
      .then((response) => {
        conversionRates = response.data.conversion_rates;
        console.log(conversionRates);
      });
  } catch {
    console.log("Error fetching articles:");
  }
};
