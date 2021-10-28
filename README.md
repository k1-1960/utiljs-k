# utiljs-k

npm simple para todo tipo de cosas incluidas próximamente

## Instalación

```
$ npm install utiljs-k
```

### Letras Alternadas

#### Modo de uso:

```js
const ujsk = require('utiljs-k');

let text = 'hola mundo';

const msg = await ujsk.LetrasAlternadas(text)

console.log(msg)

//Resultado
//---> hOlA mUnDo
```

### Suma

#### Modo de uso:

```js
const ujsk = require('utiljs-k');

const num = "1+2";

const msg = await ujsk.sum(num);

console.log(msg)

//resultado:
// 3
```

### resta

#### Modo de uso:

```js
const ujsk = require('utiljs-k');

const num = "5+2";

const msg = await ujsk.rest(num);

console.log(msg)

//resultado:
// 3
```

### multiplicacion

#### Modo de uso:

```js
const ujsk = require('utiljs-k');

const num = "1×3";
//puedes usar el signo de multiplicación "×" o la letra "x"

const msg = await ujsk.multi(num);

console.log(msg)

//resultado:
// 3
```