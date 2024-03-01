"use strict";

var _cliente = _interopRequireDefault(require("./cliente.js"));
var _impuesto = _interopRequireDefault(require("./impuesto.js"));
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }
var impuesto1 = new _impuesto["default"](300000, 50000);
var impuesto2 = new _impuesto["default"](500000, 150000);
var impuesto3 = new _impuesto["default"](250000, 35000);
var cliente1 = new _cliente["default"]('Pedro Retamales', impuesto1);
var cliente2 = new _cliente["default"]('Amanda Peñaloza', impuesto2);
var cliente3 = new _cliente["default"]('Constanza Tevez', impuesto1);
var cliente4 = new _cliente["default"]('Constanza Tevez', impuesto3);
cliente1.calcularImpuesto();
cliente2.calcularImpuesto();
cliente3.calcularImpuesto();
cliente4.calcularImpuesto();