import React, { Component } from "react";
import "./donateBtns.css";

const PATREON_ID = "29073055";
const PAYPAL_BIZ_ID = "NCZH4FUURXPXY";

class DonateBtns extends Component {
  render() {
    const { source } = this.props;
    return (
      <div className={`donateBtns db-${source}`}>
        <a
          className="donateBtn patreonBtn btn btn-danger"
          href={`https://www.patreon.com/bePatron?u=${PATREON_ID}`}
          target="_blank"
          rel="noopener noreferrer"
        >
          Patreon
        </a>
        <form
          action="https://www.paypal.com/cgi-bin/webscr"
          method="post"
          target="_blank"
        >
          <input type="hidden" name="cmd" value="_s-xclick" />
          <input type="hidden" name="hosted_button_id" value={PAYPAL_BIZ_ID} />
          <input
            type="submit"
            className="donateBtn payPalBtn btn btn-warning"
            border="0"
            name="submit"
            title="PayPal - The safer, easier way to pay online!"
            value="PayPal"
          />
        </form>
      </div>
    );
  }
}

export default DonateBtns;
