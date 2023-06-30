"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.shellExtensionInfo = void 0;
/* babel-plugin-inline-import './logo.png' */
var shellExtensionInfo = {
  name: 'shell-extension',
  prettyName: 'Shell Wallet',
  logo: logo,
  mode: 'extension',
  mobileDisabled: true,
  rejectMessage: {
    source: 'Request rejected'
  },
  connectEventNamesOnWindow: ['shell_keystorechange'],
  downloads: [{
    device: 'desktop',
    browser: 'chrome',
    link: 'https://chrome.google.com/webstore/detail/shell-wallet/kbdcddcmgoplfockflacnnefaehaiocb'
  }]
};
exports.shellExtensionInfo = shellExtensionInfo;