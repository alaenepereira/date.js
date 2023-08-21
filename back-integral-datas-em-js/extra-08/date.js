const meses = [
  "Janeiro",
  "Fevereiro",
  "Março",
  "Abril",
  "Maio",
  "Junho",
  "Julho",
  "Agosto",
  "Setembro",
  "Outubro",
  "Novembro",
  "Dezembro",
];
const newDate = () => {
  let date = new Date(2020, 9, 5);
  const formatDate =
    date.getDate() +
    " de " +
    meses[date.getMonth()] +
    " de " +
    date.getFullYear();
  console.log(formatDate);
};

newDate();

//b) 05/10/2020
const addTheZero = (numero) => {
  if (numero <= 9) return "0" + numero;
  else return numero;
};
let date = new Date(2020, 9, 5);
const formatDate =
  addTheZero(date.getDate().toString()) +
  "/" +
  addTheZero(date.getMonth() + 1).toString() +
  "/" +
  date.getFullYear();
console.log(formatDate);

addTheZero();

//c) 5 out
let monthAbbreviated = [
  "Jan",
  "Fev",
  "Mar",
  "Abr",
  "Mai",
  "Jun",
  "Jul",
  "Ago",
  "Set",
  "Out",
  "Nov",
  "Dez",
];
const month = (_year, month, day) => {
  const formatDate =
    dateCurrent.getDate() + " " + monthAbbreviated[dateCurrent.getMonth()];
  console.log(formatDate);
};
let dateCurrent = new Date(2020, 9, 5);
month(dateCurrent);

//d) 05 out 2020

const addYear = (numero, year, month, day) => {
  if (numero <= 9) return "0" + numero;
  else return numero;
};
monthAbbreviated = [
  "Jan",
  "Fev",
  "Mar",
  "Abr",
  "Mai",
  "Jun",
  "Jul",
  "Ago",
  "Set",
  "Out",
  "Nov",
  "Dez",
];
dateCurrent = new Date(2020, 9, 5);
let format =
  addYear(dateCurrent.getDate().toString()) +
  " " +
  addYear(monthAbbreviated[dateCurrent.getMonth().toString()]) +
  " " +
  dateCurrent.getFullYear();
console.log(format);
addYear(dateCurrent);

//e) 05 de out de 2020

const formatting = (numero) => {
  if (numero <= 9) return "0" + numero;
  else return numero;
};
monthAbbreviated = [
  "Jan",
  "Fev",
  "Mar",
  "Abr",
  "Mai",
  "Jun",
  "Jul",
  "Ago",
  "Set",
  "Out",
  "Nov",
  "Dez",
];
dateCurrent = new Date(2020, 9, 5);
format =
  formatting(dateCurrent.getDate().toString()) +
  " de " +
  formatting(monthAbbreviated[dateCurrent.getMonth().toString()]) +
  " de " +
  dateCurrent.getFullYear();
console.log(format);
formatting(dateCurrent);

//f) 05/out

const add = (numero, _year, month, day) => {
  if (numero <= 9) return "0" + numero;
  else return numero;
};
monthAbbreviated = [
  "Jan",
  "Fev",
  "Mar",
  "Abr",
  "Mai",
  "Jun",
  "Jul",
  "Ago",
  "Set",
  "Out",
  "Nov",
  "Dez",
];
dateCurrent = new Date(2020, 9, 5);
format =
  add(dateCurrent.getDate().toString()) +
  "/" +
  add(monthAbbreviated[dateCurrent.getMonth().toString()]);
console.log(format);
add(dateCurrent);
