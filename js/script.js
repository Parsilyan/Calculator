function insert(num) {
   document.querySelector("#inp").value += num;
}
function clean() {
   document.querySelector("#inp").value = "";
}
function back() {
   let value = document.querySelector("#inp").value;
   document.querySelector("#inp").value = value.substring(0, value.length-1);
}
function equal() {
   let value = document.querySelector("#inp").value;
   if (value) {
      document.querySelector("#inp").value = eval(value);
   } else if (value == "") {
      alert("Can not be emty!")
   }
}