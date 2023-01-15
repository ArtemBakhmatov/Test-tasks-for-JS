const width  = +prompt('Ширина матрицы'),
      height = +prompt('Высота матрицы');

function matrix(width, height) {
    let result = new Array(height).fill().map(() => new Array(width).fill(''));
    let counter = 1,                // улитка начинется с единицы
       startCol = 0,                // cтаротовая колонка
         endCol = width - 1,        // конечноя колонка // -1 -> массив начинается с 0
       startRow = 0,                // cтаротовая сторока
         endRow = height - 1;       // конечноя сторока // -1 -> массив начинается с 0

    while (startCol <= endCol && startRow <= endRow) { 
        for (let i = startCol; i <= endCol; i++) {
            result[startRow][i] = counter;         // цифры по горизонтали
            counter++;
        }
        startRow++; // стартовая строка уходит вниз

        for (let j = startRow; j <= endRow; j++) {
            result[j][endCol] = counter;            // цифры по веритикали
            counter++;
        }

        endCol--;

        for (let i = endCol; i >= startCol; i--) {
            result[endRow][i] = counter;
            counter++;
        }

        endRow--;

        for (let i = endRow; i >= startRow; i--) {
            result[i][startCol] = counter;
            counter++;
        }

        startCol++;
    }

    return result;
}

console.log(matrix(width, height));

// Матрица - это массив массивов
// Высота матрицы будет количетво массивов внутри (тоесть 3 массива. пример внизу)
// Ширина матрицы будет количесто элементов , которые находиятся в массивах

/* [
    [2, 34, 65, 8, 56,],
    [12323, 124, 4124, 214],
    [123, 44, 64]
] */

// fill() -> заполняет все элементы массива от начального до конечного индексов одним значением.
/* ПРИМЕР
const array1 = [1, 2, 3, 4];
console.log(array1.fill(6));
Expected output: Array [6, 6, 6, 6]
 */

// map() -> создаёт новый массив с результатом вызова указанной функции для каждого элемента массива.
