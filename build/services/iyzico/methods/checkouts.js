"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.initialize = exports.getForPayment = void 0;
var _iyzipay = _interopRequireDefault(require("../connection/iyzipay"));
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
//3ds ödeme işleminin tamamlanıp tamamlanmadıgını kontrol edicez
const initialize = data => {
  return new Promise((resolve, reject) => {
    _iyzipay.default.checkoutFormInitialize.create(data, (err, result) => {
      if (err) {
        reject(err);
      } else {
        resolve(result);
      }
    });
  });
};
exports.initialize = initialize;
const getForPayment = data => {
  return new Promise((resolve, reject) => {
    _iyzipay.default.checkoutForm.retrieve(data, (err, result) => {
      if (err) {
        reject(err);
      } else {
        resolve(result);
      }
    });
  });
};
exports.getForPayment = getForPayment;