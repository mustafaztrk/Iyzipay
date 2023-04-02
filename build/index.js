"use strict";

var _logs = require("./utils/logs");
var _nanoid = _interopRequireDefault(require("./utils/nanoid"));
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
const id = (0, _nanoid.default)();
console.log(id);