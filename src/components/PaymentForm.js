import React, { useEffect, useState } from "react";
import { v4 as uuidv4 } from "uuid";

const PaymentForm = ({ onFormSubmit }) => {
  const [formData, setFormData] = useState({
    access_key: "cf7632547fcf3f1abb735eca534f3a98",
    profile_id: "7958C05C-D2C6-435A-9AB7-F30188CD7A80",
    transaction_uuid: uuidv4(),
    signed_field_names:
      "access_key,profile_id,transaction_uuid,signed_field_names,unsigned_field_names,signed_date_time,locale,transaction_type,reference_number,amount,currency",
    unsigned_field_names: "",
    signed_date_time: new Date().toISOString(),
    locale: "en-us",
    transaction_type: "",
    reference_number: "",
    amount: "",
    currency: "",
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    onFormSubmit(formData);
  };

  return (
    <form id="payment_form" onSubmit={handleSubmit}>
      <input type="hidden" name="access_key" value={formData.access_key} />
      <input type="hidden" name="profile_id" value={formData.profile_id} />
      <input
        type="hidden"
        name="transaction_uuid"
        value={formData.transaction_uuid}
      />
      <input
        type="hidden"
        name="signed_field_names"
        value={formData.signed_field_names}
      />
      <input
        type="hidden"
        name="unsigned_field_names"
        value={formData.unsigned_field_names}
      />
      <input
        type="hidden"
        name="signed_date_time"
        value={formData.signed_date_time}
      />
      <input type="hidden" name="locale" value={formData.locale} />
      <fieldset>
        Payment Details
        <div id="paymentDetailsSection" className="section">
          <span>transaction_type:</span>
          <input
            type="text"
            name="transaction_type"
            value={formData.transaction_type}
            onChange={handleChange}
            size="25"
          />
          <br />
          <span>reference_number:</span>
          <input
            type="text"
            name="reference_number"
            value={formData.reference_number}
            onChange={handleChange}
            size="25"
          />
          <br />
          <span>amount:</span>
          <input
            type="text"
            name="amount"
            value={formData.amount}
            onChange={handleChange}
            size="25"
          />
          <br />
          <span>currency:</span>
          <input
            type="text"
            name="currency"
            value={formData.currency}
            onChange={handleChange}
            size="25"
          />
          <br />
        </div>
      </fieldset>
      <input type="submit" id="submit" name="submit" value="Submit" />
    </form>
  );
};

export default PaymentForm;
