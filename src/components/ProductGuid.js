function ProductGuid() {
  return (
    <>
      <div className="ProductBottom">
        {/* Product Guide */}
        <div className="ProductGuid">
          <h4>Product Information</h4>
          <table style={{ margin: "0 auto" }}>
            <tr>
              <td className="td1">Product Name</td>
              <td className="td2">Doctor's Role Play Set</td>
            </tr>
            <tr>
              <td className="td1">Maker</td>
              <td className="td2">Plantoys (Thailand)</td>
            </tr>
            <tr>
              <td className="td1">Country of Origin</td>
              <td className="td2">Thailand</td>
            </tr>
            <tr>
              <td className="td1">Material</td>
              <td className="td2">Natural Wood (Rubber Wood)</td>
            </tr>
            <tr>
              <td className="td1">Size</td>
              <td className="td2">2.4 x 16.0 x 51.6 cm</td>
            </tr>
            <tr>
              <td className="td1">Weight</td>
              <td className="td2">Total weight: 248g</td>
            </tr>
            <tr>
              <td className="td1">Contents</td>
              <td className="td2">
                Bag, stethoscope, blood pressure monitor, syringe, thermometer,
                shot gun (1 each)
              </td>
            </tr>
            <tr>
              <td className="td1">Target Age</td>
              <td className="td2">3 years old and above</td>
            </tr>
            <tr>
              <td className="td1">Caution</td>
              <td className="td2">
                Due to the use of natural wood, there may be individual
                differences in wood grain, color, and texture.
              </td>
            </tr>
          </table>
        </div>

        {/* Shipping and Return Guide */}
        <div className="ship">
          <h4>Exchange and Return Policy</h4>
          <span style={{ whiteSpace: "pre-line" }}>
            For products with significant damage,
            <br />
            please contact us via email or phone within 1 week of receipt.
            <br />
            Once the return is confirmed, we will proceed with exchange or
            refund.
            <br />
            <br />
            ※ Please note that after 1 week from the product arrival,
            <br />
            we may not be able to process returns (exchange/refund) for any
            reason.
            <br />
            Due to the difference in devices such as PCs and smartphones,
            <br />
            there may be slight differences in color and texture between photos
            and actual products.
            <br />
            Returns due to differences in images or other reasons may also be
            difficult to process.
            <br />
            <br />
            We appreciate your understanding that handling customer returns due
            to various reasons can be challenging.
          </span>
        </div>
      </div>
    </>
  );
}

export default ProductGuid;
