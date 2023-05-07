const auth0 = require("auth0-js");

const auth0Config = {
  domain: "dev-05o0jj0rko2ty63h.us.auth0.com",
  clientID: "D1JPLEpnCVR3D6paH2qiRuthJjKtxFXQ",
  redirectUri: "http://localhost:3001/",
  responseType: "token ",
  scope: "openid",
};

const auth0Client = new auth0.WebAuth(auth0Config);

module.exports = { auth0Client };
