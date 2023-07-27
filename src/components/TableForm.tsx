const TableForm = () => {
    return (
    <div className="tablecont">
      <table id="conversionTable">
        <thead>
          <tr>
            <th>Original Amount</th>
            <th>Amount in USD</th>
          </tr>
        </thead>
        <tbody></tbody>
        <tfoot>
          <tr>
            <td>Total in USD:</td>
            <td id="totalAmount">0.00</td>
          </tr>
        </tfoot>
      </table>
    </div>
    )
}
export default TableForm;