import crypto from "crypto";

const SECRET_KEY =
  "2070c5dfa8e942c388fddb41958216f453f3549c083c4e9a94d0024cea0c657ce809b1aa6c4646ada07f823559eec07b63a547f18c8641e8a4eebdd6e49b0a82d5a12d1509494ea2ac31ce0aeddf611ac9643f6e04ff4e03aee9d7a5b39a483a8654eaebfcc7477fab8b3eeb0ebec69aee347a87afdd4522999e929e342758bc";

export const signn = (params) => {
  return signData(buildDataToSign(params), SECRET_KEY);
};

const signData = (data, secretKey) => {
  return crypto.createHmac("sha256", secretKey).update(data).digest("base64");
};

const buildDataToSign = (params) => {
  const signedFieldNames = params.signed_field_names.split(",");
  const dataToSign = signedFieldNames.map(
    (field) => `${field}=${params[field]}`
  );
  return commaSeparate(dataToSign);
};

const commaSeparate = (dataToSign) => {
  return dataToSign.join(",");
};
