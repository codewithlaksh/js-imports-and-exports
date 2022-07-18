export default function addNums() {
    const addForm = document.forms["addForm"];
    const num1 = addForm["num1"];
    const num2 = addForm["num2"];

    document.querySelector('#totalVal').innerHTML = eval(`${num1.value} + ${num2.value}`);
    document.querySelector('#addForm').reset();
}