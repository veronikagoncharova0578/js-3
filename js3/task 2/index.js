const wdate = prompt("Какое сегодня число?");
const day = Number.parseInt(wdate);
const result = day % 2 === 0 ? wdate : "upppss";
alert(result);