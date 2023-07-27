import { useEffect, useState } from "react";
import { fetchRates, conversionRates } from "./FetchRates";
import TableForm, { ConversionItem } from "./TableForm";

const cur = {
  USD: "United States Dollar",
  EUR: "Euro",
  GBP: "British Pound",
  CZK: "Czech Crown",
};

const ConvertUSD = (amount: number, currency: string, conversionRates: any) => {
  return amount / conversionRates[currency];
};

const CurrencyForm: React.FC = () => {
  const [amount, setAmount] = useState("");
  const [currency, setCurrency] = useState("USD");
  const [error, setError] = useState("");
  useEffect(() => {
    fetchRates();
  }, []);

  const [convertedAmount, setConvertedAmount] = useState(0);
  const [conversionList, setConversionList] = useState<ConversionItem[]>([]);

  const handleChange = (
    event: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>
  ) => {
    const { name, value } = event.target;

    if (name === "amount") {
      const numericValue = value.replace(/[^0-9.]/g, "");
      setAmount(numericValue);
      if (numericValue.trim() === "" || parseFloat(numericValue) === 0) {
        setError("Enter a valid amount");
      } else {
        setError("");
      }
    } else if (name === "currency") {
      setCurrency(value);
    }
  };
  useEffect(() => {
    const convertedAmount = ConvertUSD(
      Number(amount),
      currency,
      conversionRates
    );
    setConvertedAmount(convertedAmount);
  }, [amount, currency]);

  const handleConvert = () => {
    if (amount.trim() === "" || amount === "." || parseFloat(amount) === 0) {
    } else {
      const convertedAmount = ConvertUSD(
        Number(amount),
        currency,
        conversionRates
      );
      setConvertedAmount(convertedAmount);
      setConversionList((prevList) => [
        ...prevList,
        { originalAmount: amount, amountInUSD: convertedAmount, currency },
      ]);
    }
  };

  const showTexthint = Number(amount) > 0 && !isNaN(Number(amount));
  return (
    <>
      <div className="formcont">
        <form id="conForm">
          <div className="topform">
            <p>Currency Converter</p>
            <label htmlFor="amount">Amount</label>
            <input
              id="amount"
              type="number"
              autoComplete="off"
              step="0.1"
              name="amount"
              value={amount}
              onChange={handleChange}
            />
            <div className="amounterror" id="amounterror">
              {error}
            </div>
            <label htmlFor="currencyC">From</label>
            <select
              name="currency"
              id="currencyC"
              value={currency}
              onChange={handleChange}
            >
              {Object.entries(cur).map(([currencyCode, currencyName]) => (
                <option key={currencyCode} value={currencyCode}>
                  {currencyCode} - {currencyName}
                </option>
              ))}
            </select>
          </div>
          <div className="bottomform">
            {showTexthint && (
              <div className="texthint" id="texthint">
                Amount in USD: {convertedAmount.toFixed(2)}
              </div>
            )}
            <input
              onClick={handleConvert}
              type="button"
              value="Convert"
              id="convertbtn"
            />
          </div>
        </form>
      </div>
      <TableForm conversionList={conversionList} />
    </>
  );
};
export default CurrencyForm;
