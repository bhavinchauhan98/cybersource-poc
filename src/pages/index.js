import PaymentConfirmation from "@/components/PaymentConfirmation";
import PaymentForm from "@/components/PaymentForm";
import Receipt from "@/components/Receipt";
import { useState } from "react";

export default function Home() {
  const [params, setParams] = useState(null);
  const [receiptParams, setReceiptParams] = useState(null);

  const handleFormSubmit = (formData) => {
    setParams(formData);
  };

  const handlePaymentConfirmation = (responseParams) => {
    setReceiptParams(responseParams);
  };

  return (
    <>
      <h1>Cybersource iframe demo</h1>
      {receiptParams ? (
        <Receipt params={receiptParams} />
      ) : params ? (
        <PaymentConfirmation
          params={params}
          onConfirmation={handlePaymentConfirmation}
        />
      ) : (
        <PaymentForm onFormSubmit={handleFormSubmit} />
      )}
    </>
  );
}
