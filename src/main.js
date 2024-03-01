import Cliente from "./cliente.js";
import Impuesto from "./impuesto.js";

var impuesto1 = new Impuesto(300000, 50000);
var impuesto2 = new Impuesto(500000, 150000)
var impuesto3 = new Impuesto(250000, 35000)
var cliente1 = new Cliente('Pedro Retamales', impuesto1);
var cliente2 = new Cliente('Amanda Peñaloza', impuesto2);
var cliente3 = new Cliente('Constanza Tevez', impuesto1);
var cliente4 = new Cliente('Constanza Tevez', impuesto3);


cliente1.calcularImpuesto();
cliente2.calcularImpuesto();
cliente3.calcularImpuesto();
cliente4.calcularImpuesto();