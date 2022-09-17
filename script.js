//Create values for years
function createYearOptions() {
  var yroptions = "<option value='0'></option>";
  for (var i = 1; i <= 100; i++) {
    yroptions += "<option value= '" + i + "'>" + i + "</option>";
  }
  document.getElementById('years').innerHTML = yroptions;
  return yroptions;
}

//Validate the document
var form = document.getElementById("calculator");
form.onsubmit = async (event) => {
  event.preventDefault();
  var currentDate = new Date();
  var currentYear = currentDate.getFullYear();
  var interestValue = parseFloat(document.getElementById('interest').value);
  var yearSelected = parseInt(document.getElementById('years').value);
  var amount = parseInt(document.getElementById('amount').value);
  var yearToDisplay = currentYear + yearSelected;
  var result = 0;

  function checkData() {
    //check if amount is empty
    if (amount <= 0) {
      alert('Enter a positive number');
      amount.focus();
      return false;
    }

    if (isNaN(amount)) {
      alert('Please Enter a Number');
      amount.focus();
      return false;
    }

    //check if yearSelected is empty
    if (yearSelected <= 0) {
      alert('Please Select a Year');
      yearSelected.focus();
      return false;
    }

    //check if interestValue is empty
    if (interestValue <= 0) {
      alert('Please Select an interest');
      interestValue.focus();
      return false;
    }

    return true;
  }
  checkData();
  result = (interestValue * amount * yearSelected) / 100;
  document.getElementById('amountRes').innerHTML = 'if you deposit ' + amount;
  document.getElementById('interestRes').innerHTML = 'at any interest of ' + interestValue + '%';
  document.getElementById('resultRes').innerHTML = 'You will receive an amount of ' + result;
  document.getElementById('yearRes').innerHTML = 'in the year ' + yearToDisplay;
}
