//codigo

const { cid, id } = require('./emojis.json');

module.exports.LetrasAlternadas = (args) => {
  return args.split("")
    .map((char, i) => char[`to${i % 2 ? 'Upper' : 'Lower'}Case`]()).join('')
};

const errormath = "La solicitud no pudo ser completada, probablemente sea por qué el valor a calcular no era un numero";

module.exports.sum = (args) => {

  let text = args.replace(/ /, "").replace(/  /, "")

  const op = text.split("+");

  let res = `${parseInt(op[0]) + parseInt(op[1])}`

  if (!isNaN(res)) {
    return res;
  } else {
    return console.log(errormath)
  }

}

module.exports.rest = (args) => {

  let text = args.replace(/ /, "").replace(/  /, "")

  const op = text.split("-");

  let res = `${parseInt(op[0]) - parseInt(op[1])}`

  if (!isNaN(res)) {
    return res;
  } else {
    return console.log(errormath)
  }

}

module.exports.multi = (args) => {

  let text = args.replace(/ /, "").replace(/  /, "")

  const multisy = "x";

  const op = text.split(`${multisy}`);

  let res = `${parseInt(op[0]) * parseInt(op[1])}`;

  if (!isNaN(res)) {
    return res;
  } else {
    return console.log(errormath)
  }

}

module.exports.div = (args) => {

  let text = args.replace(/ /, "").replace(/  /, "")

  const symb = "/";

  const op = text.split(`${symb}`);

  let res = `${parseInt(op[0]) / parseInt(op[1])}`;

  if (!isNaN(res)) {
    return res;
  } else {
    return console.log(errormath)
  }

}

module.exports.argsCount = (args) => {
 if(args){
   let res = args.length;
   return res;
   } else return;

  }


module.exports.emojis = (emoji) => {
  let res;
    if(!cid.includes(cid[parseInt(emoji)])){
        res = 'No existe este emoji :(';
      return res;
  }
  if(emoji){
    if(isNaN(emoji)) return;
    
   res = cid[parseInt(emoji)];
    
    return res;
  } else {
    res = 'No existe este emoji :(';

    return res;
  }
}

module.exports.emojisId = (emoji) => {
  let res;
  if(!id.includes(id[parseInt(emoji)])){
        res = 'No existe este emoji :(';
    return res;
  }
  if(emoji){
    if(isNaN(emoji)) return;
    
   res = id[parseInt(emoji)];
    
    return res;
  } else {
    res = 'No existe este emoji :(';

    return res;
  }
}

//npm