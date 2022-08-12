const sumar = require('./funciones/sumar')
const restar = require('./funciones/restar')
const multiplicar = require('./funciones/multiplicar')
const dividir = require('./funciones/dividir')
const pocess = require('process')

let operacion = process.argv[2]
let numero1 = Number(process.argv[3])
let numero2 = Number(process.argv[4])

if(operacion.toLowerCase ())
