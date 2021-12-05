const x = 820
//сложение дробей
let a = 0.1 + 0.2;
alert(a.toFixed(1));

//сложение строки с числом
let str = '1'
let num = Number(str);
let result = num + 2;
alert(result);

//Користувач вказує обсяг флешки в Гб. Програма повинна порахувати скільки файлів розміром в 820 Мб поміщається на флешку.

let memoryOnGb = prompt('Вкажіть обсяг флешки в Гб,щоб порахувати скільки файлів розміром в 820 Мб поміщається на флешку');
let y = Number(memoryOnGb);
let resultOnMb = (y * 1024) / 820;
resultOnMb = Math.round(resultOnMb, 1)
alert(`кількість файлів буде ${resultOnMb}`)