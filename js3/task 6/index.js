const name = prompt("Введите имя");
const surname = prompt("Введите фамилию");
const namel = (name.lenght);
const surnamel = (surname.length);
if (namel > 4 && surnamel > 5) {
    alert(namel + surnamel);
} else {
    alert('Упс');
}