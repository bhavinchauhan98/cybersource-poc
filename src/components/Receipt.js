import React from "react";
import { signn } from "@/utils/security";

const Receipt = ({ params }) => {
  const isSignatureValid = () => {
    const signature = signn(params);
    return signature === params.signature;
  };

  return (
    <fieldset id="response">
      <legend>Receipt</legend>
      <div>
        <form id="receipt">
          {Object.entries(params).map(([name, value]) => (
            <div key={name}>
              <span>{name}</span>
              <input type="text" name={name} size="50" value={value} readOnly />
              <br />
            </div>
          ))}
          <div>
            <span>Signature Verified:</span>
            <input
              type="text"
              name="verified"
              size="50"
              value={isSignatureValid() ? "True" : "False"}
              readOnly
            />
            <br />
          </div>
        </form>
      </div>
    </fieldset>
  );
};

export default Receipt;
