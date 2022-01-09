# utiljs-k

npm simple para todo tipo de cosas incluidas próximamente

## Instalación

```
$ npm install utiljs-k
```

### Letras Alternadas

Modo de uso:

```js
const ujsk = require('utiljs-k');

let text = 'hola mundo';

const msg = await ujsk.LetrasAlternadas(text)

console.log(msg)

//Resultado
//---> hOlA mUnDo
```

### Suma

Modo de uso:

```js
const ujsk = require('utiljs-k');

const num = "1+2";

const msg = await ujsk.sum(num);

console.log(msg)

//resultado:
// 3
```

### resta

Modo de uso:

```js
const ujsk = require('utiljs-k');

const num = "5-2";

const msg = await ujsk.rest(num);

console.log(msg)

//resultado:
// 3
```

### multiplicacion

Modo de uso:

```js
const ujsk = require('utiljs-k');

const num = "1x3";
//usa la letra "x"

const msg = await ujsk.multi(num);

console.log(msg)

//resultado:
// 3
```

### División

Modo de uso:
```js
const ujsk = require('utiljs-k');

const num = "12/3";

const msg = await ujsk.div(num);

console.log(msg);

//resultado:
// 4
```

### Emojis! · Discord bots
Para usar esta característica tu bot necesita estar en el siguiente servidor: [aquí](https://discord.gg/pd4FcMrqXq)

Debes completar un formulario el cual debes enviar a **K1#1960**, dicho formulario se encuentra en el canal **Inicio**.

*Se te notificará si tu bot fue aceptado o rechazado.*

### toMs
Convierte tiempo normal a milisegundos!

Modo de uso:
```js

const ujsk = require('utiljs-k');

var time = '15' || 15;
var type = 'm';

var ms = ujsk.toMs(time, type);

console.log(ms);
//resultado:
// 900000
```

En el parametro `type` se aceptan 4 tipos de valores, estos son:
`s` para segundos.
`m` para minutos.
`h` para horas.
`d` para dias.