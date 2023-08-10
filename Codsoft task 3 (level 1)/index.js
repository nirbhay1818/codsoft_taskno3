function Solve(val) {
    var solve = document.getElementById('result');
    solve.value += val;
 }
 function Result() {
    var num1 = document.getElementById('result').value;
    var num2 = eval(num1);
    document.getElementById('result').value = num2;
 }
 function Clear() {
    var clear = document.getElementById('result');
    clear.value = '';
 }
 function Back() {
    var evaluate = document.getElementById('result');
    evaluate.value = evaluate.value.slice(0,-1);
 }