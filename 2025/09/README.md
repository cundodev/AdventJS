Los elfos han construido un **reno 🦌 robot aspirador** (`@`) para limpiar un poco el taller de cara a las navidades.

El reno se mueve sobre un tablero para **recoger cosas del suelo** (`*`) y debe **evitar obstáculos** (`#`).

Recibirás dos parámetros:

- `board`: un `string` que representa el tablero.
- `moves`: un `string` con los movimientos: `'L'` (izquierda), `'R'` (derecha), `'U'` (arriba), `'D'` (abajo).

**Reglas del movimiento:**

- Si el reno **recoge algo del suelo** (`*`) durante los movimientos → devuelve `'success'`.
- Si el reno se **sale del tablero** o **choca contra un obstáculo** (`#`) → devuelve `'crash'`.
- Si el reno **no recoge nada ni se estrella** → devuelve `'fail'`.

Ten en cuenta que si el reno **recoge algo del suelo**, ya es `'success'`, indepentientemente de si en movimientos posteriores se chocase con un obstáculo o saliese del tabler.

**Importante:** Ten en cuenta que en el `board` la primera y última línea están en blanco y deben descartarse.

**Ejemplo:**

```Javascript
const board = `
.....
.*#.*
.@...
.....
`

moveReno(board, 'D')
// ➞ 'fail' -> se mueve pero no recoge nada

moveReno(board, 'U')
// ➞ 'success' -> recoge algo (*) justo encima

moveReno(board, 'RU')
// ➞ 'crash' -> choca contra un obstáculo (#)

moveReno(board, 'RRRUU')
// ➞ 'success' -> recoge algo (*)

moveReno(board, 'DD')
// ➞ 'crash' -> se choca con la parte de abajo del tablero

moveReno(board, 'UUU')
// ➞ 'success' -> recoge algo del suelo (*) y luego se choca por arriba

moveReno(board, 'RR')
// ➞ 'fail' -> se mueve pero no recoge nada
```
