const CurrencyForm = () => {

    return (
    <div className="formcont">
        <form id="conForm">
          <div className="topform">
            <p>Currency Converter</p>
            <label htmlFor="amount">Amount</label>
            <input id="amount" type="float" step="0.1" autoComplete="off" />
            <div className="amounterror" id="amounterror">Enter a correct amount</div>
            <label htmlFor="currencyC">From</label>
            <select name="currencyC" id="currencyC"></select>
          </div>
          <div className="bottomform">
            <div className="texthint" id="texthint"></div>
            <input type="submit" value="Convert" id="convertbtn" />
          </div>
        </form>
      </div>
    )
} 
export default CurrencyForm;