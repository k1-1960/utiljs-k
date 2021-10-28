//codigo
module.exports.LetrasAlternadas = (args) => {
return args.split("")
	.map((char, i) => char[`to${i % 2 ? 'Upper' : 'Lower'}Case`]()).join('')
};

module.exports.sum = (args) => {

const op = args.split("+");

	var res = parseInt(op[0]) + parseInt(op[1])

return res
	
}

module.exports.rest = (args) => {

const op = args.split("-");

	var res = parseInt(op[0]) - parseInt(op[1])

	return res
	
}

module.exports.multi = (args) => {

const multisy = "x";
	
const op = args.split(`${multisy}`);

	var res = `${parseInt(op[0]) * parseInt(op[1])}`;

return res
	
}

//npm