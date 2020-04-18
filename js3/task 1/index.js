const whatdate = prompt("Какое сегодня число?");
const date = Number.parseInt(whatdate);
const res = date >= 2 ? whatdate : "Сегoдня первое число";
alert(res);