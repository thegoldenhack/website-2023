// js doesn't have enums so here's a janky DIY version
export const emailTemplates = {
  APPLICATION_SUBMITTED: "ApplicationSubmitted",
  CONFIRM_ACCOUNT: "ConfirmAccount",
  FORGOT_PASSWORD: "ForgotPassword",
  FORGOT_PASSWORD_SUCCESS: "ForgotPasswordSuccess",
  WELCOME: "Welcome",
};

export const sendEmails = (recipient, emailTemplate) => {
  var endpoint = process.env.REACT_APP_API_GATEWAY;
  var apiKey = process.env.REACT_APP_API_KEY;

  var requestOptions = {
    method: "POST",
    headers: {
      "Access-Control-Allow-Origin": "*",
      "Access-Control-Allow-Credentials": true,
      "x-api-key": apiKey,
    },
    body: JSON.stringify({
      people: [
        {
          email: recipient,
        },
      ],
      templateName: emailTemplate,
    }),
  };

  // idk if this is a permanent fix, but I (Dunja) was having trouble getting
  // around the CORS policy without it. If anyone has a better solution please share!
  const proxyurl = "https://cors-anywhere.herokuapp.com/";

  fetch(proxyurl + endpoint + "/emails", requestOptions)
    .then((response) => response.json())
    .then((data) => console.log(data))
    .catch((error) => console.log(error));
};
