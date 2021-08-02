const endpoint = process.env.REACT_APP_API_GATEWAY;
const apiKey = process.env.REACT_APP_API_KEY;
const allEventsApiKey = process.env.REACT_APP_ALL_EVENTS_API_KEY;


// idk if this is a permanent fix, but I (Dunja) was having trouble getting
// around the CORS policy without it. If anyone has a better solution please share!
const proxyurl = "https://cors-anywhere.herokuapp.com/";

const isLocalhost = Boolean(
  window.location.hostname === 'localhost' ||
  // [::1] is the IPv6 localhost address.
  window.location.hostname === '[::1]' ||
  // 127.0.0.1/8 is considered localhost for IPv4.
  window.location.hostname.match(
      /^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/
  )
);

const apiEndpoint = isLocalhost ? proxyurl + endpoint : endpoint

// js doesn't have enums so here's a janky DIY version
export const emailTemplates = {
  APPLICATION_SUBMITTED: "ApplicationSubmitted",
  CONFIRM_ACCOUNT: "ConfirmAccount",
  FORGOT_PASSWORD: "ForgotPassword",
  FORGOT_PASSWORD_SUCCESS: "ForgotPasswordSuccess",
  WELCOME: "Welcome",
};

// Sends the requested type of email to the recipient
// Recipient is a string corresponding to the intended recipient's email address
// and the emailTemplate is one of emailTemplates (above)
export const sendEmails = (recipient, emailTemplate) => {
  var requestOptions = {
    method: "POST",
    headers: {
      "Access-Control-Allow-Origin": "*",
      "Access-Control-Allow-Credentials": true,
      "x-api-key": apiKey,
    },
    body: JSON.stringify({
      people: recipient,
      templateName: emailTemplate,
    }),
  };

  fetch(apiEndpoint + "/emails", requestOptions)
    .then((response) => response.json())
    .then((data) => console.log(data))
    .catch((error) => console.log(error));
};

// Saves an application in the HackerApplications table in the database
// Application is an object consisting of all the fields of the application.
// onSuccess will be called when the request was successful, and onFailure
// will be called when it was unsucessful
export const saveApplication = (application, onSuccess, onFailure) => {
  var requestOptions = {
    method: "POST",
    headers: {
      "Access-Control-Allow-Origin": "*",
      "Access-Control-Allow-Credentials": true,
      "x-api-key": apiKey,
    },
    body: JSON.stringify({
      application: application,
    }),
  };

  fetch(apiEndpoint + "/applications/application/save", requestOptions)
    .then((response) => response.json())
    .then((data) => onSuccess(data))
    .catch((error) => onFailure(error));
};

// Submits an application to the HackerApplications table in the database
// Application is an object consisting of all the fields of the application.
// onSuccess will be called when the request was successful, and onFailure
// will be called when it was unsucessful
export const submitApplication = (application, onSuccess, onFailure) => {
  var requestOptions = {
    method: "POST",
    headers: {
      "Access-Control-Allow-Origin": "*",
      "Access-Control-Allow-Credentials": true,
      "x-api-key": apiKey,
    },
    body: JSON.stringify({
      application: application,
    }),
  };

  fetch(
    apiEndpoint + "/applications/application/submit",
    requestOptions
  )
    .then((response) => response.json())
    .then((data) => onSuccess(data))
    .catch((error) => onFailure(error));
};

// Return all the applications in the database.
// We’ll probably want to paginate these somehow so we’re not returning a massive amount of information all the time.
export const getAllApplications = (onSuccess, onFailure) => {
  var requestOptions = {
    method: "GET",
    headers: {
      "Access-Control-Allow-Origin": "*",
      "Access-Control-Allow-Credentials": true,
      "x-api-key": apiKey,
    },
  };
  fetch(apiEndpoint + `/applications`, requestOptions)
    .then((response) => response.json())
    .then((data) => onSuccess(data))
    .catch((error) => onFailure(error));
};

// Retrieves an application for the user with the given userId (email)
// if it exists and has not been submitted yet.
// onSuccess will be called when the request was successful, and onFailure
// will be called when it was unsucessful (ie if the item doesn't exist in the db)
export const getApplication = (email, onSuccess, onFailure) => {
  var requestOptions = {
    method: "GET",
    headers: {
      "Access-Control-Allow-Origin": "*",
      "Access-Control-Allow-Credentials": true,
      "x-api-key": apiKey,
    },
  };

  var searchParams = {
    email: email
  }

  fetch(
    apiEndpoint +
      "/applications/application?" +
      new URLSearchParams(searchParams),
    requestOptions
  )
    .then((response) => response.json())
    .then((data) => onSuccess(data))
    .catch((error) => onFailure(error));
};

// Return an individual application. ID should be the application id.
export const getApplicationById = (applicationId, onSuccess, onFailure) => {
  var requestOptions = {
    method: "GET",
    headers: {
      "Access-Control-Allow-Origin": "*",
      "Access-Control-Allow-Credentials": true,
      "x-api-key": apiKey,
    },
    body: JSON.stringify({
      id: applicationId,
    }),
  };
  fetch(apiEndpoint + `/applications/getById`, requestOptions)
    .then((response) => response.json())
    .then((data) => onSuccess(data))
    .catch((error) => onFailure(error));
};

// Submits RSVP status of an applicant to the HackerApplications table in the database
// RSVP is an object consisting of a user's email and their rsvp_response (bool).
// onSuccess will be called when the request was successful, and onFailure
// will be called when it was unsucessful
export const RSVPApplication = (RSVP, onSuccess, onFailure) => {
  var requestOptions = {
    method: "PUT",
    headers: {
      "Access-Control-Allow-Origin": "*",
      "Access-Control-Allow-Credentials": true,
      "x-api-key": apiKey,
    },
    body: JSON.stringify({
      application: RSVP,
    }),
  };

  fetch(apiEndpoint+ "/applications/application/rsvp", requestOptions)
    .then((response) => response.json())
    .then((data) => onSuccess(data))
    .catch((error) => onFailure(error));
};

//Accept the application with the given id. Flip their status to “accepted”
export const acceptApplication = (applicationId, onSuccess, onFailure) => {
  var requestOptions = {
    method: "PUT",
    headers: {
      "Access-Control-Allow-Origin": "*",
      "Access-Control-Allow-Credentials": true,
      "x-api-key": apiKey,
    },
    body: JSON.stringify({
      id: applicationId,
    }),
  };
  fetch(
    apiEndpoint + `/applications/accept`, // this path currently doesn not support PUT, we need to att the PUT function to this endpoint
    requestOptions
  )
    .then((response) => response.json())
    .then((data) => onSuccess(data))
    .catch((error) => onFailure(error));
};

//Reject the application with the given id. Flip their status to rejected
export const rejectApplication = (applicationId, onSuccess, onFailure) => {
  var requestOptions = {
    method: "PUT",
    headers: {
      "Access-Control-Allow-Origin": "*",
      "Access-Control-Allow-Credentials": true,
      "x-api-key": apiKey,
    },
    body: JSON.stringify({
      id: applicationId,
    }),
  };
  fetch(apiEndpoint + `/applications/reject`, requestOptions)
    .then((response) => response.json())
    .then((data) => onSuccess(data))
    .catch((error) => onFailure(error));
};

//Waitlist the application with the given id. Flip their status to waitlisted
export const waitlistApplication = (applicationId, onSuccess, onFailure) => {
  var requestOptions = {
    method: "PUT",
    headers: {
      "Access-Control-Allow-Origin": "*",
      "Access-Control-Allow-Credentials": true,
      "x-api-key": apiKey,
    },
    body: JSON.stringify({
      id: applicationId,
    }),
  };
  fetch(apiEndpoint + `/applications/waitlist`, requestOptions)
    .then((response) => response.json())
    .then((data) => onSuccess(data))
    .catch((error) => onFailure(error));
};

export const getAllEvents = (onSuccess, onFailure) => {
  var requestOptions = {
    method: "GET",
    headers: {
      "Access-Control-Allow-Origin": "*",
      "Access-Control-Allow-Credentials": true,
      "x-api-key": apiKey,
    },
  };
  fetch(apiEndpoint + `/events`, requestOptions)
    .then((response) => response.json())
    .then((data) => onSuccess(data))
    .catch((error) => onFailure(error));
};
