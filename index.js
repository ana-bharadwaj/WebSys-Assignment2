function reverseString() {
  let input = parseInt(document.getElementById('firstString').value);
  let reversed = input.split('').reverse().join('');
  document.getElementById('firstAnswer').innerHTML = 'Reversed: ' + reversed;
}
document.getElementById('firstStringBtn').addEventListener('click', reverseString);

function palindromeNumber() {
  let num = parseInt(document.getElementById('number').value);
  let numCopy = num;
  let index = 0;
  let num2 = 0;
  while (numCopy > 0) {
    let digit = numCopy % 10;
    num2 = 10 * num2 + digit;
    numCopy = parseInt(numCopy / 10);
    index++;
  }

  if (num2 == num) {
    document.getElementById('secondAnswer').innerHTML =
      'The number entered is a palindrome number';
  } else {
    document.getElementById('secondAnswer').innerHTML =
      'The number entered is not a palindrome number';
  }
}
document
  .getElementById('numberBtn')
  .addEventListener('click', palindromeNumber);

function restaurant() {
  let subtotalAmt = parseFloat(
    document.getElementById('subtotal').value
  ).toFixed(2);
  let tipPercent = parseFloat(document.getElementById('tip').value).toFixed(2);
  if (tipPercent > 100) tipPercent = 100;
  let totalAmt = subtotalAmt * (1 + tipPercent / 100);
  document.getElementById('thirdAnswer').innerHTML =
    'The total amount to be paid to the restaurant : ' + totalAmt.toFixed(2);
}
document.getElementById('subtotalBtn').addEventListener('click', restaurant);
