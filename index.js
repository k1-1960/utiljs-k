//codigo
module.exports.LetrasAlternadas = (args) => {
return args.split("")
	.map((char, i) => char[`to${i % 2 ? 'Upper' : 'Lower'}Case`]()).join('')
};

const errormath = "La solicitud no pudo ser completada, probablemente sea por qué el valor a calcular no era un numero";

module.exports.sum = (args) => {

	let text = args.replace(/ /, "").replace(/  /, "")

const op = text.split("+");

	var res = `${parseInt(op[0]) + parseInt(op[1])}`
	
if(!isNaN(res)){
	return res;
} else {
	return console.log(errormath)
}

}

module.exports.rest = (args) => {

	let text = args.replace(/ /, "").replace(/  /, "")

const op = text.split("-");

	var res = `${parseInt(op[0]) - parseInt(op[1])}`
		
if(!isNaN(res)){
	return res;
} else {
	return console.log(errormath)
		}
	
}

module.exports.multi = (args) => {

let text = args.replace(/ /, "").replace(/  /, "")

const multisy = "x";
	
const op = text.split(`${multisy}`);

	var res = `${parseInt(op[0]) * parseInt(op[1])}`;

if(!isNaN(res)){
	return res;
} else {
	return console.log(errormath)
}
	
}

module.exports.div = (args) => {

let text = args.replace(/ /, "").replace(/  /, "")
	
const symb = "/";
	
const op = text.split(`${symb}`);

	var res = `${parseInt(op[0]) / parseInt(op[1])}`;

if(!isNaN(res)){
	return res;
} else {
	return console.log(errormath)
}
	
}

//npm