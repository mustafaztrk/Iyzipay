"use strict";

var _dotenv = _interopRequireDefault(require("dotenv"));
var _config = _interopRequireDefault(require("./config.js"));
var _express = _interopRequireDefault(require("express"));
var _morgan = _interopRequireDefault(require("morgan"));
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
const envPath = _config.default?.production ? "./env/.prod" : "./env/.dev";
_dotenv.default.config({
  path: envPath
});
const app = (0, _express.default)();
app.use((0, _morgan.default)(process.env.LOGGER));
app.use(_express.default.json({
  limit: "1mb"
}));
app.use(_express.default.urlencoded({
  extended: true
}));
app.listen(process.env.PORT, () => {
  console.log("Express Uygulamamoz " + process.env.PORT + " üzerinden çalışmaktadır");
});