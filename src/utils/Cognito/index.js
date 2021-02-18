import AWS, { CognitoIdentityServiceProvider } from "aws-sdk";
import {
  CognitoUserPool,
  AuthenticationDetails,
  CognitoUser,
} from "amazon-cognito-identity-js";
import jwtDecode from "jwt-decode";

AWS.config.update({ region: process.env.REACT_APP_AWS_REGION });

const poolData = {
  UserPoolId: process.env.REACT_APP_COGNITO_USER_POOL_ID,
  ClientId: process.env.REACT_APP_COGNITO_CLIENT_ID,
};

const userPool = new CognitoUserPool(poolData);
const clientId = process.env.REACT_APP_COGNITO_CLIENT_ID;
const cognitoIdentityServiceProvider = new CognitoIdentityServiceProvider();

export const login = (email, password, callback) => {
  if (email == null || password == null) return;

  var authData = {
    Username: email,
    Password: password,
  };

  var authenticationDetails = new AuthenticationDetails(authData);

  var userData = {
    Username: email,
    Pool: userPool,
  };

  var cognitoUser = new CognitoUser(userData);

  cognitoUser.authenticateUser(authenticationDetails, callback);
};

export const register = (email, password, firstName, lastName, callback) => {
  var attributeList = [];

  var dataEmail = {
    Name: "email",
    Value: email,
  };
  var dataPersonalName = {
    Name: "name",
    Value: firstName,
  };
  var dataFamilyName = {
    Name: "family_name",
    Value: lastName,
  };

  attributeList.push(dataEmail);
  attributeList.push(dataPersonalName);
  attributeList.push(dataFamilyName);

  userPool.signUp(email, password, attributeList, null, callback);
};

export const confirmAccount = (email, confirmation, callback) => {
  var params = {
    ClientId: poolData.ClientId,
    ConfirmationCode: confirmation,
    Username: email,
  };

  cognitoIdentityServiceProvider.confirmSignUp(params, callback);
};

export const forgotPassword = (email, callback) => {
  var params = {
    ClientId: clientId,
    Username: email,
  };

  cognitoIdentityServiceProvider.forgotPassword(params, callback);
};

export const confirmForgotPassword = (email, password, code, callback) => {
  var params = {
    ClientId: clientId,
    ConfirmationCode: code,
    Password: password,
    Username: email,
  };

  cognitoIdentityServiceProvider.confirmForgotPassword(params, callback);
};

export const signOut = () => {
  localStorage.removeItem("accessToken");
};

export const getJwt = () => {
  return localStorage.getItem("accessToken") ?? null;
};

export const getEmailFromJwt = () => {
  const jwt = getJwt();
  if (jwt) {
    var jwtDecoded = jwtDecode(jwt);
    return jwtDecoded.email;
  }
};

export const getNameFromJwt = () => {
  const jwt = getJwt();
  if (jwt) {
    var jwtDecoded = jwtDecode(jwt);
    return jwtDecoded.name;
  }
};

export const getRoleFromJwt = () => {
  const jwt = getJwt();
  if (jwt) {
    var jwtDecoded = jwtDecode(jwt);
    return jwtDecoded["custom:role"];
  }
};