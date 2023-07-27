export interface ConversionItem {
  originalAmount: string;
  amountInUSD: number;
  currency: string;
}

interface TableFormProps {
  conversionList: ConversionItem[];
}

const TableForm: React.FC<TableFormProps> = ({ conversionList }) => {
  return (
    <div className="tablecont">
      <table id="conversionTable">
        <thead>
          <tr>
            <th>Original Amount</th>
            <th>Amount in USD</th>
          </tr>
        </thead>
        <tbody>
          {conversionList.map((item, index) => (
            <tr key={index}>
              <td>
                {Number(item.originalAmount).toFixed(2)} {item.currency}
              </td>
              <td>{item.amountInUSD.toFixed(2)}</td>
            </tr>
          ))}
        </tbody>
        <tfoot>
          <tr>
            <td>Total in USD:</td>
            <td id="totalAmount">
              {conversionList
                .reduce((total, item) => total + item.amountInUSD, 0)
                .toFixed(2)}
            </td>
          </tr>
        </tfoot>
      </table>
    </div>
  );
};
export default TableForm;
