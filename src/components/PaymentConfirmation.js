import { signn } from "@/utils/security";
import React from "react";

const PaymentConfirmation = ({ params }) => {
  const handleSubmit = (e) => {
    e.preventDefault();

    const form = document.getElementById("payment_confirmation");
    const formData = new FormData(form);

    fetch("https://testsecureacceptance.cybersource.com/embedded/pay", {
      method: "POST",
      body: formData,
    })
      .then((response) => response.text())
      .then((result) => {
        console.log(result);
      })
      .catch((error) => {
        console.error("Error:", error);
      });
  };

  const signedParams = {
    ...params,
    signature: signn(params),
  };

  return (
    <form id="payment_confirmation" onSubmit={handleSubmit}>
      <fieldset id="confirmation">
        <legend>Review Payment Details</legend>
        <div>
          {Object.entries(signedParams).map(([name, value]) => (
            <div key={name}>
              <span>{name}: </span>
              <span>{value}</span>
            </div>
          ))}
        </div>
      </fieldset>
      {Object.entries(signedParams).map(([name, value]) => (
        <input key={name} type="hidden" id={name} name={name} value={value} />
      ))}
      <input type="submit" id="submit" value="Confirm" />
    </form>
  );
};

export default PaymentConfirmation;
