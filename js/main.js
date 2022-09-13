const submit = document.getElementById("submit");
submit.addEventListener("click", validate);

function validate(e) {
  e.preventDefault();
  let correctForm = validateForm();
  if(correctForm){
      document.getElementById("thank-you").style.display = "flex";
      document.getElementById("creditCardForm").style.display = "none";
      setData();
  }
  return
}
function clearData() {
  document.getElementById("thank-you").style.display = "none";
      document.getElementById("creditCardForm").style.display = "block";
  document.getElementById("number").innerHTML = "0000 0000 0000 0000";
  document.getElementById("user").innerHTML = "JANE APPLESEED";
  document.getElementById("date").innerHTML = "00/00";
  document.getElementById("cvc").innerHTML = "000";
  document.getElementById("userCard_error").style.display="none";
  document.getElementById("numberCard_error").style.display="none";
  document.getElementById("date_error").style.display="none";
  document.getElementById("cvcCard_error").style.display="none";
  document.getElementById("userCard").classList.remove('danger');
  document.getElementById("numberCard").classList.remove('danger');
  document.getElementById("monthCard").classList.remove('danger');
  document.getElementById("yearCard").classList.remove('danger');
  document.getElementById("cvcCard").classList.remove('danger');
  document.getElementById("userCard").value = "";
  document.getElementById("numberCard").value = "";
  document.getElementById("monthCard").value = "";
  document.getElementById("yearCard").value = "";
  document.getElementById("cvcCard").value = "";
}
function setData() {
  const number = document.getElementById("numberCard");
  const numberCard = number.value;
  let res = [...numberCard].reduce(
    (p, c, i) => (p += i && !(i % 4) ? " " + c : c),
    ""
  );
  document.getElementById("number").innerHTML =
    numberCard !== "" ? res : "0000 0000 0000 0000";
  const user = document.getElementById("userCard");
  const userCard = user.value;
  document.getElementById("user").innerHTML =
    userCard !== "" ? userCard.toUpperCase() : "JANE APPLESEED";
  const month = document.getElementById("monthCard");
  const monthCard = month.value;
  const year = document.getElementById("yearCard");
  const yearCard = year.value;
  document.getElementById("date").innerHTML =
    yearCard !== "" && monthCard !== "" ? yearCard + "/" + monthCard : "00/00";
  const cvc = document.getElementById("cvcCard");
  const cvcValue = cvc.value;
  document.getElementById("cvc").innerHTML = cvcValue !== "" ? cvcValue : "000";
}

function validateForm(){
  let inputs = 0;
  let field = ['userCard','numberCard','monthCard','yearCard','cvcCard'];
  let i, l = field.length;
  for(i=0 ; i< l ;i++){
    fieldName = field[i];
    let dateFields = 0;
    if(document.forms['creditCardForm'][fieldName].value === ''){
      inputs++;
     if(`${fieldName}` === 'monthCard' || `${fieldName}` === 'yearCard'){
      document.getElementById(`${fieldName}`).classList.add('danger')
      dateFields++;
        if(dateFields => 1){
          document.getElementById('date_error').style.display = "block"; 
        }
      }else{
      document.getElementById(`${fieldName}_error`).style.display = "block";
      document.getElementById(`${fieldName}`).classList.add('danger')
      }
    }
  }

  return inputs > 0 ? false : true
}

function validateFieldLength(object) {
  if(object.value.length > object.maxLength){
    object.value = object.value.slice(0, object.maxLength)
  }
}
