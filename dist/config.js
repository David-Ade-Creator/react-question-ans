"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _dotenv = _interopRequireDefault(require("dotenv"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

_dotenv.default.config();

var _default = {
  MONGODB_URL: process.env.MONGODB_URL || 'MONGODB_URL',
  JWT_SECRET: process.env.JWT_SECRET || 'JWT_SECRET',
  PORT: process.env.PORT || 3500,
  MAIL_KEY: process.env.MAIL_KEY || 'MAIL_KEY',
  JWT_ACCOUNT_ACTIVATION: process.env.JWT_ACCOUNT_ACTIVATION || 'JWT_ACCOUNT_ACTIVATION',
  JWT_RESET_PASSWORD: process.env.JWT_RESET_PASSWORD || 'JWT_RESET_PASSWORD',
  EMAIL_TO: process.env.EMAIL_TO || 'EMAIL_FROM',
  EMAIL_FROM: process.env.EMAIL_FROM || 'EMAIL_FROM',
  CLIENT_URL: process.env.CLIENT_URL || 'CLIENT_URL',
  GOOGLE_CLIENT: process.env.GOOGLE_CLIENT || 'GOOGLE_CLIENT = 962563750549-c0kla6kearj160dt1p0qs54f89slpfil.apps.googleusercontent.com'
};
exports.default = _default;