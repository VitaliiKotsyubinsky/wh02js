
//сложение дробей
let a = 0.1 + 0.2;
alert(a.toFixed(1));

//сложение строки с числом
let str = '1'
let num = Number(str);
let result = num + 2;
alert(result);

//Користувач вказує обсяг флешки в Гб. Програма повинна порахувати скільки файлів розміром в 820 Мб поміщається на флешку.
function estimateFileCount(fileSize) {
    const memoryInGb = prompt(`Вкажіть обсяг флешки в Гб, щоб порахувати скільки файлів розміром в ${fileSize}Мб поміщається на флешку`);
    const memoryInMb = Number(memoryInGb) * 1024;
    const fileCount = Math.floor(memoryInMb / fileSize)
    alert(`кількість файлів буде ${fileCount}`)
}
estimateFileCount(820)

//Користувач вводить суму грошей в гаманці і ціну однієї шоколадки. Програма виводить скільки шоколадок може купити користувач і скільки здачі у нього залишиться.
//Запитай у користувача тризначне число і виведи його задом наперед. Для вирішення завдання тобі знадобиться оператор% (залишок від ділення).

function calculationOfValues() {
    const sum = prompt('Введіть суму грошей в гамаці')
    const price = prompt('Введіть ціну одного товару')
    let quantityOfGoods = Math.floor(Number(sum) / Number(price))
    let change = Number(sum) - (quantityOfGoods * Number(price))
    alert(`кількість товару буде ${quantityOfGoods}шт`)
    alert(`решта ${change}грн`)
}
calculationOfValues()

